
import { useState, useEffect } from 'react'; 


export default function Slider() {

    const [initialSlide, setInitialSlide] = useState(1);
    const [activeSlide, setIsActiveSlide] = useState(1)

    const guts = (e) => {
        
        e.preventDefault(); 
        const tgt = e.currentTarget;
        const wrapper = document.querySelector('.slider__wrapper');
        const current = document.querySelector('.flex--active').getAttribute('data-slide');
        let preStart = document.querySelectorAll('.flex--preStart');
        let animEnd = document.querySelectorAll('.animate--end');

        

        let next = e.currentTarget.nextSibling ? e.currentTarget.nextSibling.getAttribute('data-slide') : 1;
        e.target.classList.remove('active');
       
        if (current === next) {
            return false;
        } else {
            setIsActiveSlide(e.currentTarget.getAttribute("data-slide"));
            wrapper.querySelectorAll('.flex__container[data-slide="' + next + '"]');    
            const currentActive = document.querySelector('.flex--active');
            currentActive.classList.toggle('animate--end');  
             
            setTimeout(function() {
                tgt.classList.remove('animate--start');
                tgt.classList.add('flex-active');    
               
            }, 800);
        };
    }


    return(
        <section className="container mx-auto px-5">
            <div className="slider__wrapper">
                <div className={`flex__container flex--pikachu ${activeSlide == 1 ? `flex--active` : '' }`} data-slide="1">
                    <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <p className="text--sub">One</p>
                        <h1 className="text--big">Pikachu</h1>
                        <p className="text--normal">Pikachu is an Electric-type Pokémon introduced in Generation I. Pikachu are small, chubby, and incredibly cute mouse-like Pokémon. They are almost completely covered by yellow fur.</p>
                    </div>
                    <p className="text__background">Pikachu</p>
                    </div>
                    <div className="flex__item flex__item--right"></div>
                </div>
                <div className={`flex__container flex--piplup ${activeSlide == 2 ? `flex--active` : 'animate--start' }`} data-slide="2">
                    <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <p className="text--sub">Two</p>
                        <h1 className="text--big">Piplup</h1>
                        <p className="text--normal">Piplup is the Water-type Starter Pokémon of the Sinnoh region. It was introduced in Generation IV. Piplup has a strong sense of self-esteem. It seldom accepts food that people give because of its pride.</p>
                    </div>
                    <p className="text__background">Piplup</p>
                    </div>
                    <div className="flex__item flex__item--right"></div>
                </div>
                <div className={`flex__container flex--blaziken ${activeSlide == 3 ? `flex--active` : 'animate--start' }`} data-slide="3">
                    <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <p className="text--sub">Three</p>
                        <h1 className="text--big">Blaziken</h1>
                        <p className="text--normal">Blaziken is the Fire/Fighting-type Starter Pokémon of the Hoenn region, introduced in Generation III. Blaziken is a large, bipedal, humanoid bird-like Pokémon that resembles a rooster.</p>
                    </div>
                    <p className="text__background">Blaziken</p>
                    </div>
                    <div className="flex__item flex__item--right"></div>
                </div>
                <div className={`flex__container flex--dialga  ${activeSlide == 4 ? `flex--active` : 'animate--start' }`} data-slide="4">
                    <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <p className="text--sub">Four</p>
                        <h1 className="text--big">Dialga</h1>
                        <p className="text--normal">Dialga is a Steel/Dragon-type Legendary Pokémon. Dialga is a sauropod-like Pokémon. It is mainly blue with some gray, metallic portions, such as its chest plate, which has a diamond in the center. It also has various, light blue lines all over
                        its body.</p>
                    </div>
                    <p className="text__background">Dialga</p>
                    </div>
                    <div className="flex__item flex__item--right"></div>
                </div>
                <div className={`flex__container flex--zekrom flex--zekrom ${activeSlide == 5 ? `flex--active` : 'animate--start' }`} data-slide="5">
                    <div className="flex__item flex__item--left">
                    <div className="flex__content">
                        <p className="text--sub">Five</p>
                        <h1 className="text--big">Zekrom</h1>
                        <p className="text--normal">Zekrom is a Dragon/Electric-type Legendary Pokémon. It is part of the Tao Trio, along with Reshiram and Kyurem. Zekrom is a large, black draconian Pokémon that seems to share its theme with its counterpart, Reshiram. It has piercing red eyes and
                        dark gray to black skin that seems to be armor-like.</p>
                    </div>
                    <p className="text__background">Zekrom</p>
                    </div>
                    <div className="flex__item flex__item--right"></div>
                </div>
                </div>

                <div className="slider__navi">
                    <a href="#" onClick={guts} className={`slide-nav ${activeSlide == 1 ? `active` : '' }`} data-slide="1">pikachu</a>
                    <a href="#" onClick={guts} className={`slide-nav ${activeSlide == 2 ? `active` : '' }`} data-slide="2">piplup</a>
                    <a href="#" onClick={guts} className={`slide-nav ${activeSlide == 3 ? `active` : '' }`} data-slide="3">blaziken</a>
                    <a href="#" onClick={guts} className={`slide-nav ${activeSlide == 4 ? `active` : '' }`} data-slide="4">dialga</a>
                    <a href="#" onClick={guts} className={`slide-nav ${activeSlide == 5 ? `active` : '' }`} data-slide="5">zekrom</a>
                </div>
            </section>
        ); 
}; 



