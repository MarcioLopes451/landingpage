import React from 'react'
import HeroImage from '../../images/image-hero-desktop.png';
import Databiz from '../../images/client-databiz.svg';
import Audiophlie from '../../images/client-audiophile.svg';
import Meet from '../../images/client-meet.svg';
import Maker from '../../images/client-maker.svg';
import MobileHero from '../../images/image-hero-mobile.png';

export default function Hero() {
  return (
    <section className='hero-section'>
        <div className='mobile-hero'>
            <img src={MobileHero} alt='mobile' />
            <div className='mobile-intro'>
                <h1>Make Remote Work</h1>
                <p> Get your team in sync, no matter your location. 
                    Streamline processes, create team rituals, 
                    and watch productivity soar.
                </p>
                <button>Learn more</button>
                <div className='mobile-clients'>
                    <img src={Databiz} alt='databiz'/>
                    <img src={Audiophlie} alt='audiophlie'/>
                    <img src={Meet} alt='meet'/>
                    <img src={Maker} alt='maker'/>
                </div>
            </div>
        </div>
        <div className='hero-container'>
            <div className='intro'>
                <h1>Make <br />
                Remote Work</h1>
                <p> Get your team in sync, no matter your location. 
                    Streamline processes, create team rituals, 
                    and watch productivity soar.
                </p>
                <button>Learn more</button>
                <div className='clients'>
                    <img src={Databiz} alt='databiz'/>
                    <img src={Audiophlie} alt='audiophlie'/>
                    <img src={Meet} alt='meet'/>
                    <img src={Maker} alt='maker'/>
                </div>
            </div>
            <div className='hero-image'>
                <img src={HeroImage} alt='hero' />
            </div>
        </div>
    </section>
  )
}
