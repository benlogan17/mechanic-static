import { useEffect, useState } from "react"
import { CardContainer } from "./Card/CardContainer"
import { getPartsToSell, downloadAndSetImgUrl, auth, deleteDocAndImage } from "../utils/firebase.utils"
import { Button } from "react-bootstrap"
import { AddPartModal } from "./Card/AddPartModal"
import { DeleteWarningModal } from "./Card/DeleteWarningModal"
import "../styles/item-page.css"

export const ItemPage = () => {
    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showDeleteModal, setDeleteModal] = useState(false)
    const [selectedPart, setSelectedPart] = useState(-1)
    
    const toggleModal = () => setShowModal(!showModal)
    
    const handleDeleteClicked = (partIndex) => {
        setSelectedPart(partIndex)
        setDeleteModal(true)
    }

    const handlePartDeletion = () => {
        deleteDocAndImage(items[selectedPart])
        setDeleteModal(false)
    }

    useEffect(()=> {
        if (items.length === 0) {
            getPartsToSell().then(parts => {
                setItems(parts)
            })
        } else {
            items.forEach((item, index) => {
                downloadAndSetImgUrl(item.img_location, "parts-" + index)
            }) 
        }
    }, [items])
    return (
    <div>
        {
            auth.currentUser !== null ? <Button onClick={()=>setShowModal(true)} className="mx-3 my-2 button-part">Add Part</Button> : <></>
        }
        <div className="d-flex flex-wrap"> 
        {
            items.map((part, index) => 
                <CardContainer 
                    title={part.title}
                    body={part.description}
                    id={index}
                    onDelete={()=>handleDeleteClicked(index)}
                    key={"part-"+index}
                />
            )
        }
        </div>
        <AddPartModal 
            show={showModal}
            handleClose={toggleModal}
        />
        <DeleteWarningModal
            show={showDeleteModal}
            title={selectedPart >= 0 ? items[selectedPart].title : "NA"} 
            onDelete={handlePartDeletion} 
            onHide={()=>setDeleteModal(false)}
        />
    </div>
    )
}