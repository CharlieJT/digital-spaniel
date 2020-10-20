import React, { Component }from 'react';
import ChevronTop from '../../../media/images/chevronup.png';
import classes from './BackToTop.css';

class BackToTop extends Component {

    state = {
        scrollPrevPosition: window.pageYOffset,
    };

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler);
    }

    // Hide or show the menu.
    scrollHandler = () => {
        const scrollCurrPosition = window.pageYOffset;
        this.setState({ scrollPrevPosition: scrollCurrPosition });
    };

    // Scroll back to top of the page when function is called
    scrollToTop = () => window.scroll({ top: 0, behavior: 'smooth' });

    render() {
        return (
            <div onClick={this.scrollToTop} style={{ 
                content: `url(${ChevronTop})`, 
                opacity: window.pageYOffset > 40 ? '1' : '0', 
                pointerEvents: window.pageYOffset > 40 ? 'all' : 'none' 
            }} className={classes.ToTop}></div>
        );
    }
}

export default BackToTop;