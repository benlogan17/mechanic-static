import { useEffect, useState } from "react"
import { CardContainer } from "./Card/CardContainer"
import { getPartsToSell, downloadAndSetImgUrl } from "../utils/firebase.utils"
import { Button } from "react-bootstrap"

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
        <Button onClick={()=>setShowModal(true)}>Add Part</Button>
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

/*
Actions this needs to do to work
 - Add Sellable part
 - Display sellable parts
 - Delete sellable parts
*/