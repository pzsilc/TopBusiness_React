import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Slider = () => {

    const [images, setImages] = useState([
        `/assets/images/1.jpg`,
        `/assets/images/2.jpg`,
        `/assets/images/3.jpg`,
        `/assets/images/4.jpg` 
    ]);

    if(images.length === 0){
        return null;
    } 
    else{
        console.log(images);
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