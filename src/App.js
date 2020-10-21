import React, { lazy, Suspense } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from './Components/UI/BackToTop/BackToTop';
import Spinner from './Components/UI/Spinner/Spinner';
const HomePage = lazy(() => import('./Containers/HomePage/HomePage'));


const App = () => {
	return (
		<Suspense fallback={<Spinner fontSize="6px"/>}>
			<div className={classes.App}>
				<Layout>
					{/* Typically in a larger Application with more pages, the routing would be done here using React Router */}
					<HomePage />
				</Layout>
				{/* Back to top icon which when clicked, will navigate the user back to the top of the page */}
				<BackToTop />
			</div>
		</Suspense>
	);
}

export default App;