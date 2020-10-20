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
				<HomePage />
			</Layout>
			<BackToTop />
		</div>
	);
}

export default App;