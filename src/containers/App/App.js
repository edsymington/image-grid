import React, { useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import Modal from '../../components/Modal/Modal';
import { motion } from 'framer-motion';

const App = props => {

	// Set initial state
	const [state, setState] = useState({
		collection: 'Posts'
	});

	// Handle tab clicks, ignore current tab
	const tabClickHandler = tabClickedLabel => {

		if(tabClickedLabel === state.collection) {
			return;
		}

		setState({
			...state,
			collection: tabClickedLabel
		});
	};

	// Handle image clicks, show modal
	const imageClickHandler = imageData => {

		setState({
			...state,
			showModal: true,
			modalImageData: imageData
		});
	};

	// Close the modal
	const modalCloseHandler = event => {

		setState({
			...state,
			showModal: false
		});
	}

	// Get the modal ready
	const modalComponent = state.showModal ? (
		<motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {ease: 'easeOut'}}}>
			<Modal imageData={state.modalImageData} closeHandler={modalCloseHandler} />
		</motion.div>
	) : null;

	// Set up the tabs and image grid with a modal if required
	return (
		<>
			<section className="container mx-auto sm:px-2 md:px-4 mb-10">
				<header>
					<Tabs activeCollection={state.collection} tabClickHandler={tabClickHandler} />
				</header>
				<main className="mt-5">
					<ImageGrid collection={state.collection} imageClickHandler={imageClickHandler} />
				</main>
			</section>
			{modalComponent}
		</>
	);
}

export default App;
