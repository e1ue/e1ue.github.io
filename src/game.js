import React from 'react'
import AnimationVisible from "./components/animationVisible";
import Logoname from "./components/logoname";
import Progressbar from "./components/user/progressbar";
import Balance from "./components/user/balance";
import EmblaCarousel from "./components/carusel/EmblaCarousel";
import Menu from "./components/menu";

const OPTIONS = { axis: 'y' }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function Game() {
    return (
        <div>
            <div className="flex flex-col justify-between h-full">
                <AnimationVisible/>
                <div className="mx-[30px] pt-[30px] animation_visible">
                    <Logoname/>
                    <div className="flex items-center space-x-[30px] mt-[30px]">
                        <Progressbar/>
                        <Balance/>
                    </div>
                </div>
                <div id="carusel" className="animation_visible">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
                </div>
                <div className="animation_visible">
                    <Menu/>
                </div>

            </div>
        </div>
    )
}

export default Game
