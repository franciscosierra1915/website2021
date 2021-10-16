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
                <span onClick={() => exit()}>X</span>
                <button className="previous" onClick={() => handleNextPrev('previous')}>PREVIOUS</button>
                <img src={selectedImg} alt='enlarged pic'/>
                <button className="next" onClick={() => handleNextPrev('next')}>NEXT</button>
            </div>
        </div>
    )
}

export default Modal;