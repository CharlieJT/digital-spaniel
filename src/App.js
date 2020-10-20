import React from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import HomePage from './Containers/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
	return (
		<div className={classes.App}>
			<Layout>
				<HomePage />
			</Layout>
		</div>
	);
}

export default App;