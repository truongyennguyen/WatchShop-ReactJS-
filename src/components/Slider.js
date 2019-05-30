import React, { Component } from 'react';

import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 900px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
`;
const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

export default class Slider extends Component {
    
    render() {
        return (
            <Carousel maxTurns={Number.POSITIVE_INFINITY} defaultWait={3000} /*wait for 1000 milliseconds*/ >
                <Slide right>
                    <div>
                        <img  src="./images/1.jpg"  alt="1" className="slider"/>      
                    </div>
                </Slide>
                <Slide right>
                    <div>
                    <img className="slider" src="./images/2.jpg" 
                            alt="2"/>
                    </div>
                </Slide>
                <Slide right>
                    <div>
                    <img className="slider" src="./images/3.jpg" 
                            alt="3"/>
                    </div>
                </Slide>
            </Carousel>
            
        )
    }
}
