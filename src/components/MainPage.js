import { useEffect, useState } from 'react';
import { ImageWithTextBelow } from './ImageWithTextBelow';
import { downloadAndSetImgUrl } from '../utils/firebase.utils';
import { Image } from 'react-bootstrap';

export const MainPage = () => {
    [imageInfo, setImageInfo] = useState()
    useEffect(() => {
        downloadAndSetImgUrl("klass-front-side.JPG", "image-home-1")
        downloadAndSetImgUrl("klass-reverse-side.JPG", "image-home-2")
        downloadAndSetImgUrl("klass-side.JPG", "image-home-3")
        
    }, [])
    return <>
    <ImageWithTextBelow 
        content="Here at farm machinery parts NI we specialise in; sales, service, remanufacturing and original parts for Class forage equipment."
        alt="digger front side"
        id={1}
    />
    

    <ImageWithTextBelow 
        content="We have over 15 years specialising in this industry and with keeping upto date with technology allowing us to offer a full cover of all Claas forage equipment"
        alt="digger side"
        id={2}
    />

    <ImageWithTextBelow
        content="We offer a full range of used Class forage harvesters for sale along with a large stock of both new and used parts available for immediate delivery."
        alt="digger reverse side"
        id={3}
    />
    </>
}