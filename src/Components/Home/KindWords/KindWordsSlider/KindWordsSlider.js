import React, { Component } from 'react';
import Slider from 'react-slick';
import TestimonialFace1 from '../../../../media/images/testimonial_face01.png';
import TestimonialFace2 from '../../../../media/images/testimonial_face02.png';
import TestimonialFace3 from '../../../../media/images/testimonial_face03.png';
import classes from './KindWordsSlider.css';

class KindWordsSlider extends Component {

    state = {

        // Data held for each testimonial item in the tabs section
        // I also understand it's not good practice to add id's in manually like this as you would need to adjust all id's after a testimonial
        // you wanted to add but didn't want to add to the end of the array.
        testimonial: [
            {
                id: 1,
                name: "Johnny B. Goode",
                jobTitle: "CEO, Getting Things Done",
                image: TestimonialFace1,
                quote: "Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this."
            },
            {
                id: 2,
                name: "Mary Jane",
                jobTitle: "CEO, Design Matters",
                image: TestimonialFace2,
                quote: "We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we've seen a huge response to the product launch."
            },
            {
                id: 3,
                name: "Paul",
                jobTitle: "Founder, MegaCorp",
                image: TestimonialFace3,
                quote: "Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!"
            }
        ]
    }

    render() {

        // Slider settings to help with usability
        
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                }
            ]
        };

        return (
            <div>
                <Slider className={[classes.Slider, classes.active].join(' ')} {...settings}>
                    {this.state.testimonial.map(testimonialItem => (
                        <div key={testimonialItem.id} className={classes.TestimonialItem}>
                            <div className={classes.TestimonialCard}>
                                <p className={classes.TestimonialText}><i>{testimonialItem.quote}</i></p>
                                <img src={testimonialItem.image} className={[classes.TestimonialImage, "mx-auto my-3"].join(' ')} alt={testimonialItem.name}/>
                                <b>{testimonialItem.name}</b>
                                <p>{testimonialItem.jobTitle}</p>
                            </div>
                        </div>
                    ))}
                    {this.state.testimonial.map(testimonialItem => (
                        <div key={testimonialItem.id} className={classes.TestimonialItem}>
                            <div className={classes.TestimonialCard}>
                                <p className={classes.TestimonialText}><i>{testimonialItem.quote}</i></p>
                                <img src={testimonialItem.image} className={[classes.TestimonialImage, "mx-auto my-3"].join(' ')} alt={testimonialItem.name}/>
                                <b>{testimonialItem.name}</b>
                                <p>{testimonialItem.jobTitle}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default KindWordsSlider;