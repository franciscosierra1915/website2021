import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ image }) => (

        <LazyLoadImage
            height="100%"
            src={image}
            width="100%" 
            effect="blur"
        />
);


export default MyImage;