import { ImageWithTextBelow } from './ImageWithTextBelow';

export const MainPage = () => {
    return <>
    <ImageWithTextBelow 
        image_url={"https://storage.googleapis.com/website-bucket-05122024/images/front-side-klass.JPG"}
        content="Here at farm machinery parts NI we specialise in; sales, service, remanufacturing and original parts for Class forage equipment."
        alt="digger front side"
    />

    <ImageWithTextBelow 
        image_url={"https://storage.googleapis.com/website-bucket-05122024/images/klass-front-side.JPG"}
        content="We have over 15 years specialising in this industry and with keeping upto date with technology allowing us to offer a full cover of all Claas forage equipment"
        alt="digger side"
    />

    <ImageWithTextBelow 
        image_url={"https://storage.googleapis.com/website-bucket-05122024/images/klass-reverse-side.JPG"}
        content="We offer a full range of used Class forage harvesters for sale along with a large stock of both new and used parts available for immediate delivery."
        alt="digger reverse side"
    />
    </>
}