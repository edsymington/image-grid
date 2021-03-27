import React from 'react';
import styles from './GridImage.module.css';

// Set up the image with a button
const GridImage = props => (
    <button className={styles.GridImageButton} onClick={() => props.imageClickHandler(props.imageData)}>
        <div className={styles.ImageContainer}>
            <picture>
                <source media="(max-width: 640px)" srcSet={'img/' + props.imageData['thumbnail-xs']} />
                <source media="(min-width: 641px)" srcSet={'img/' + props.imageData['thumbnail-sm']} />
                <img src={'img/' + props.imageData['thumbnail-xs']} alt="Something interesting" />
            </picture>
        </div>
    </button>
);

export default GridImage;