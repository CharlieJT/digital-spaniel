import React from 'react';
import WeUnleash from './WeUnleash/WeUnleash';
import Capable from './Capable/Capable';
import Projects from './Projects/Projects';

import CaseStudies from './CaseStudies/CaseStudies';
import AllAbout from './AllAbout/AllAbout';
import KindWords from './KindWords/KindWords';
import HomePage from '../../Containers/HomePage/HomePage';


const index = () => {
    // All Components for the Home Page are added here & are spread out like this to avoid application becoming cumbersome
    return (
        <div>
            <WeUnleash />
            <Capable />
            <Projects />
            <CaseStudies />
            <AllAbout />
            <KindWords />
        </div>
    );
}

export default index;