import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';

const Modal = props => {

    // Set initial state
    const [state, setState] = useState({
        likes: props.imageData.likes,
        animateLikeIcon: false
    });

    // Listen for changes to the state & remove the animation class when necessary
    useEffect(() => {
        
        const timeoutId = window.setTimeout(() => {
            setState({
                ...state,
                animateLikeIcon: false
            });
        }, 300);

        return () => {
            window.clearTimeout(timeoutId);
        };
    });
    
    // Listen for like button clicks, DEVTODO: Retain new likes between tab switches
    const likeButtonClickHandler = event => {

        setState({
            ...state,
            likes: ++props.imageData.likes,
            animateLikeIcon: true
        });
    };
    
    return (
        <>
            <div onClick={props.closeHandler} className="bg-gray-900 bg-opacity-90 fixed top-0 right-0 bottom-0 left-0 flex justify-center">
                <img className="object-contain" src={'img/' + props.imageData.full} alt="Something interesting" />
            </div>
            <button onClick={likeButtonClickHandler} className="flex items-center fixed left-1/2 transform -translate-x-2/4 bottom-4 bg-white px-3 py-1 rounded-full font-bold text-gray-500 text-sm">
                <i className={styles.LikeIcon + ' mr-1.5' + (state.animateLikeIcon ? ' ' + styles.LikeIconAnimate : '')} aria-hidden="true"></i>
                {state.likes}
            </button>
        </>
    );
};

export default Modal;