import React from 'react'
import {Button} from './Button';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video scr="/video/video-2.mp4" autoplay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
