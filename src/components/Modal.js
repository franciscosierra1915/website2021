import React from 'react';

const Modal = ({selectedImg, setSelectedImg, handleNextPrev}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    const exit = () => {
        setSelectedImg(null);
    }



    return (
        <div className='backdrop' onClick={(e) => handleClick(e)}>
            <div className="img-container">
                <button className="previous" onClick={() => handleNextPrev('previous')}>PREV</button>
                <img src={selectedImg} alt='enlarged pic'/>
                <button className="next" onClick={() => handleNextPrev('next')}>NEXT</button>
            </div>
            <span onClick={() => exit()}>X</span>
        </div>
    )
}

export default Modal;