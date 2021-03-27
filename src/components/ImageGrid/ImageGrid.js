import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GridImage from '../GridImage/GridImage';
import { motion } from 'framer-motion';

// Config
const DATA_CONFIG = {
    'Posts': {
        filename: 'posts.json'
    },
    'Tagged': {
        filename: 'tagged.json'
    }
}

const ImageGrid = props => {
    
    // Set the initial state
    const [state, setState] = useState({
        imageData: [],
        errorLoadingData: false
    });

    // Listen for changes to props.collection (tab switches)
    useEffect(() => {
        
        // Reset the page
        setState({
            images: [],
            errorLoadingData: false
        });

        // Get the image data
        axios.get('json/' + DATA_CONFIG[props.collection].filename)
        .then(response => {
            // Update the state with the new image data
            setState({
                imageData: response.data.images.slice(),
                errorLoadingData: false
            });
        })
        .catch(error => {
            // Show an error message
            setState({
                imageData: [],
                errorLoadingData: true
            });
        });
    }, [props.collection]);

    // No state yet
    if(!state.imageData) {
        return (<></>);
    }

    // Error loading data
    if(state.errorLoadingData) {
        return (
            <p>Something's wrong here, we apologise for the inconvenience.</p>
        );
    }

    // New data requested & page reset, DEVTODO: Add loading icon/message
    if(!state.imageData.length) {
        return (<></>);
    }

    // Ready to go, set up the transitions
    const listTransitions = {
        initial: {},
        show: {
            transition: {
                staggerChildren: .05
            }
        }
    }

    const listItemTransitions = {
        initial: { 
            opacity: 0,
            translateY: 50
        },
        show: {
            opacity: 1,
            translateY: 0,
            transition: {
                ease: 'easeOut',
                duration: .3
            }
        }
    }

    // Return a list of images
    return (
        <motion.ul 
            variants={listTransitions}
            initial="initial"
            animate="show"
            className="grid sm:grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-9"
        >
            {state.imageData.map((imageData, index) => (
                <motion.li variants={listItemTransitions} key={index} className="aspect-w-1 aspect-h-1">
                    <GridImage imageData={imageData} imageClickHandler={props.imageClickHandler} />
                </motion.li>
            ))}
        </motion.ul>
    );
}

export default ImageGrid;