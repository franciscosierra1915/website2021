import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import MyImage from './MyImage';

const Gallery = ({photos}) => {

    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index, photo) => {
        setSelectedIndex(index);
    }

    const handleNextPrev = (args) => {
        if(args === 'next'){
            setSelectedIndex(selectedIndex + 1)
        } else if (args === 'previous'){
            setSelectedIndex(selectedIndex - 1)
        }
    }

    useEffect(() => {
        if(!selectedImg){
            setSelectedIndex(null)
        }
    }, [selectedImg])

    useEffect(() => {
        if(photos && selectedIndex !== null){
            if(selectedIndex < 0){
                setSelectedImg(photos[photos.length + selectedIndex]);
            } else {
                setSelectedImg(photos.filter((_, index) => index === selectedIndex));
            }
            
        }
    }, [selectedIndex, photos])


    return (
        <>
        <div className="gallery">
            <p>Photography:</p>
            {photos && <div className="row row-gallery">
                {
                    photos.map((photo, index) => (
                    <div className="col mt-4 col-image-container" key={photo}>
                        <div className="image-container" onClick={() => handleClick(index, photo)}>
                            <MyImage image={photo}/>
                        </div>
                    </div>
                    ))
                }
            </div>}
        </div>
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} handleNextPrev={handleNextPrev}/>}
        </>
    )
}

export default Gallery