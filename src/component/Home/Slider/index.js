import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Slider = () => {

    const [images, setImages] = useState([]);

    const imageExists = path => {
        var img = new Image();
        img.src = path;
        return img.height != 0;
    }

    useEffect(() => {
        let i = 1;
        let files = [];
        while(true){
            let path = `/assets/images/${i++}.jpg`;
            if(!imageExists(path)) break;
            files.push(path);
        }
        setImages(files);
    }, []);

    if(images.length === 0){
        return null;
    } 
    else{
        return(
            <div className="slide-container">
                <Slide>
                    {images.map((img, key) => 
                        <div className="each-slide" key={key}>
                            <div className='slider-image' style={{'backgroundImage': `url(${img})`}}></div>
                        </div>
                    )}
                </Slide>
            </div>
        )
    }
}


export default Slider;