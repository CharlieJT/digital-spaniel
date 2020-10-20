import React from 'react';
import classes from './CaseStudies.css';
import ScrollAnimation from 'react-animate-on-scroll';

const CaseStudies = () => {
    return (
        <ScrollAnimation animateIn="fadeInRight" duration={1}>
            <div className={classes.CaseStudies}>
                <h1 className={[classes.HeadingOne, "mb-0"].join(' ')}>Case Studies</h1>
                <p className={[classes.CaseStudiesText, "my-4 mx-auto"].join(' ')}>
                    We create brand experiences which are memorable and distinct. Our experienced team create amd develop
                    brands with personality and resonance.
                </p>
            </div>
        </ScrollAnimation>
        
    );
}

export default CaseStudies;