import { useEffect, useState } from 'react';
import { ImageWithTextBelow } from './ImageWithTextBelow';
import { downloadAndSetImgUrl, getHomeInfo } from '../utils/firebase.utils';

export const MainPage = () => {
    const [homeInfo, setHomeInfo] = useState([])
    useEffect(() => {
        if(homeInfo.length === 0) {
            getHomeInfo().then(docs => {
                setHomeInfo(docs)
            })
        } else {
            homeInfo.forEach((item, index) => {
                downloadAndSetImgUrl(item.img_location, "image-home-" + index)
            })  
        }
    }, [homeInfo])
    return <>
    {
        homeInfo.map((item, index) => 
            <ImageWithTextBelow 
                content={item.description}
                alt={item.alt}
                id={index}
                key={index}
            />
        )
    }
    </>
}