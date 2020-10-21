import React from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import HomePage from './Containers/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from './Components/UI/BackToTop/BackToTop';

const App = () => {
	return (
		<div className={classes.App}>
			<Layout>
				{/* Typically in a larger Application with more pages, the routing would be done here using React Router */}
				<HomePage />
			</Layout>
			{/* Back to top icon which when clicked, will navigate the user back to the top of the page */}
			<BackToTop />
		</div>
	);
}

export default App;