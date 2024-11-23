import { useEffect, useState, useRef } from "react"

export const ImageWithTextBelow = ({content, image_url}) => {
    const [isVisible, setVisible] = useState(true)
    const containerRef = useRef(null)

    const callbackfunction = (entries) => {
        const [entry] = entries
        setVisible(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }

    useEffect(()=> {
        const observer = new IntersectionObserver(callbackfunction, options)
        if (containerRef.current) observer.observe(containerRef.current)
        
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    return (
        <div className={`w-75 m-auto tile-custom p-3 fade-in-section ${isVisible ? "is-visible" : ""}`} ref={containerRef}>
            <img 
                src={image_url}
                alt="image of digger"
                className="d-flex w-50 h-50 m-auto"
            />
            <p 
                className='mt-3 p-3 w-100 text-center m-auto bg-white fs-5'
            >
                {content}
            </p>
        </div>
    )
}