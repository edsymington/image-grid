import React from 'react';

// Set up the modal
const Modal = props => (
    <div onClick={props.closeHandler} className="bg-gray-900 bg-opacity-90 fixed top-0 right-0 bottom-0 left-0 flex justify-center">
        <img className="object-contain" src={'img/' + props.imageData.full} alt="Something interesting" />
    </div>
);

export default Modal;