import { useEffect, useState } from "react"
import { CardContainer } from "./Card/CardContainer"
import { getPartsToSell, downloadAndSetImgUrl, auth } from "../utils/firebase.utils"
import { Button } from "react-bootstrap"
import { AddPartModal } from "./Card/AddPartModal"

export const ItemPage = () => {
    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)
    
    const toggleModal = () => setShowModal(!showModal)

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
            auth.currentUser !== null ? <Button onClick={()=>setShowModal(true)}>Add Part</Button> : <></>
        }
        {
            items.map((part, index) => 
                <CardContainer 
                    title={part.title}
                    body={part.description}
                    id={index}
                />
            )
        }
        <AddPartModal 
            show={showModal}
            handleClose={toggleModal}
        />
    </div>
    )
}