import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Slider.css'

const Thumbnail = ({ arr, image, index}) => {
    return (
    <div className='thumbnail'>
    {arr.map((imgsrc, i) =>(
    <img
    key={i}
    height="80" 
    src={imgsrc}
    onClick={() => image(i)} 
    className={index === i ? 'active': ''}
    /> 
    ))}
    </div>
    )
}
const Slideshow =( {imgs} ) => {
    const [index, setIndex] = useState()
    useEffect(() => {
        setIndex(0)
    }, [])
    
    const next = () =>{
        if (index === imgs.length -1){
            setIndex(0)
        } else {
            setIndex(index +1)

        }

    }
    const previous = () =>{
        if (index === 0){
            setIndex(imgs.length -1)
        } else {
            setIndex( index - 1)
        }
        
    }
    return <div className="slideShow">
    <img className='animate__animated animate__fadeIn'src={imgs [index]}/>
    <div className='actions'>
        <button onClick={previous}>◄</button>
        <button onClick={next}>►</button>
    </div>
    <Thumbnail arr={imgs} image={setIndex} index={index}/>
    </div>
}
function Slider() {
  return (
    <Slideshow imgs = {['https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 
    'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1629236714692-9dddb8ebe990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    ]}/>
  )
}

export default Slider;