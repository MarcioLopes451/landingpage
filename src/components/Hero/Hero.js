import React from 'react'
import HeroImage from '../../images/image-hero-desktop.png';

export default function Hero() {
  return (
    <section className='hero-section'>
        <div className='hero-container'>
            <div className='intro'>
                <h1>Make Remote Work</h1>
                <p> Get your team in sync, no matter your location. 
                    Streamline processes, create team rituals, 
                    and watch productivity soar
                </p>
                <button>Learn more</button>
            </div>
            <div className='hero-image'>
                <img src={HeroImage} alt='hero' />
            </div>
        </div>
    </section>
  )
}
