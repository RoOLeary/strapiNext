
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import Intro from '@/components/intro'

export default function Slider() {

    const [activeIndex, setActiveIndex] = useState(1);

    const guts = (e) => {
        e.preventDefault();
        
        const wrapper = document.querySelector('.slider__wrapper');
        const current = document.querySelector('.flex--active') ? document.querySelector('.flex--active').getAttribute('data-slide') : 1;
        const next = e.currentTarget.getAttribute('data-slide');

        let fadeSl = wrapper.querySelector('.flex__container[data-slide="' + next + '"]');
            fadeSl.classList.add('flex--preStart');

        if (current === next) {
            return false
        } else {
            let oldActive = wrapper.querySelector('.flex__container[data-slide="' + current + '"]');
                oldActive.classList.add('flex--active', 'animate--end');
            let fadeSl = wrapper.querySelector('.flex__container[data-slide="' + next + '"]');
                fadeSl.classList.remove('flex--active', 'animate--end');
                fadeSl.classList.add('animate--start');
            setTimeout(() => {
                setActiveIndex(next);
            }, 800)
        }
    }

    // const weed = () => {
        
    //     console.log('number time'); 
        
    // }

    // useEffect(() => {
    //     weed()
    // },[activeIndex])

    return(
        <>
            
            <div className="slider__wrapper">
                <div className={`flex__container flex--blue  ${activeIndex == 1 ? `flex--active` : 'animate--start' }`} data-slide="1">
                    <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <p className="text--sub">One</p>
                        <h1 className="text--big font-serif">About</h1>
                         <p className="text--normal">Isabel Vaz was born in Lisbon, Portugal, and started playing the cello by the age of seven. Isabel lived and studied in Lisbon until 2007, the year she moved to The Netherlands. She completed her bachelor and masters degrees at the Conservatory of Amsterdam with Dmitry Ferschtman. During her studies she did two exchange semesters, one in Prague (HAMU) and the other one in New York (Manhattan School of Music).</p> 
                         <Link href={`/about`}>
                            <a>More</a>
                        </Link>
                    </div>
                    <p className="text__background font-serif">About</p>
                    </div>
                    <div className="flex__item flex__item--right"></div>
                    <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0900-scaled.jpeg" />
                </div>

                <div className={`flex__container flex--yellow ${activeIndex == 2 ? `flex--active` : 'animate--start' }`} data-slide="2">
                    <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <p className="text--sub">Two</p>
                        <h1 className="text--big font-serif">Videos</h1>
                        <p className="text--normal">Quisque ac leo eget ante fermentum tempus. Phasellus malesuada, mi eu sagittis euismod, est leo scelerisque magna, a euismod sapien nisl vitae sapien.</p>  
                        <br />
                        <Link href={`/videos`}>
                            <a>All Videos</a>
                        </Link>
                    </div>
                    <p className="text__background font-serif">Videos</p>
                    </div>
                    <div className="flex__item flex__item--right"></div>
                    <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0874-scaled.jpeg" />
                </div>
                
                <div className={`flex__container flex--red  ${activeIndex == 3 ? `flex--active` : 'animate--start' }`} data-slide="3">
                    <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <p className="text--sub">Three</p>
                        <h1 className="text--big font-serif">Gallery</h1>
                         <p className="text--normal">Images of Isabel Vaz.</p>  
                        <Link href={`/gallery`}>
                            <a>View Gallery</a>
                        </Link>
                    </div>
                    <p className="text__background font-serif">Gallery</p>
                    </div>
                    <div className="flex__item flex__item--right"></div>
                    <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/isabel.png" />
                </div>
                <div className={`flex__container flex--darkblue  ${activeIndex == 4 ? `flex--active` : 'animate--start' }`} data-slide="4">
                    <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <p className="text--sub">Four</p>
                        <h1 className="text--big font-serif">Cello</h1>
                        {/* <p className="text--normal">Dialga is a Steel/Dragon-type Legendary Pokémon. Dialga is a sauropod-like Pokémon. It is mainly blue with some gray, metallic portions, such as its chest plate, which has a diamond in the center. It also has various, light blue lines all over
                        its body.</p>  */}
                    </div>
                    <p className="text__background font-serif">Cello</p>
                    </div>
                    <div className="flex__item flex__item--right"></div>
                    <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/IMG_0694.jpeg" />
                </div>
                <div className={`flex__container flex--gray ${activeIndex == 5 ? `flex--active` : 'animate--start' }`} data-slide="5">
                    <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <p className="text--sub">Five</p>
                        <h1 className="text--big font-serif">Teaching</h1>
                        {/* <p className="text--normal">Zekrom is a Dragon/Electric-type Legendary Pokémon. It is part of the Tao Trio, along with Reshiram and Kyurem. Zekrom is a large, black draconian Pokémon that seems to share its theme with its counterpart, Reshiram. It has piercing red eyes and
                        dark gray to black skin that seems to be armor-like.</p>  */}
                    </div>
                    <p className="text__background font-serif">Teaching</p>
                    </div>
                    <div className="flex__item flex__item--right"></div>
                    <img className="isabel_img hidden md:block" src="https://isabelvaz.com/wp-content/uploads/2020/03/2E8A9134-scaled.jpg" />
                </div>
                </div>

                <div className="slider__navi">
                    <a href="#" onClick={(e) => guts(e)} className={`slide-nav ${activeIndex == 1 ? `active` : '' }`} data-slide="1">blue</a>
                    <a href="#" onClick={(e) => guts(e)} className={`slide-nav ${activeIndex == 2 ? `active` : '' }`} data-slide="2">yellow</a>
                    <a href="#" onClick={(e) => guts(e)} className={`slide-nav ${activeIndex == 3 ? `active` : '' }`} data-slide="3">red</a>
                    <a href="#" onClick={(e) => guts(e)} className={`slide-nav ${activeIndex == 4 ? `active` : '' }`} data-slide="4">darkblue</a>
                    <a href="#" onClick={(e) => guts(e)} className={`slide-nav ${activeIndex == 5 ? `active` : '' }`} data-slide="5">gray</a>
                </div>
            </>
        ); 
}; 



