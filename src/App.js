import React, { useState } from 'react';
import Logoname from "./components/logoname";
import Progressbar from "./components/user/progressbar";
import Balance from "./components/user/balance";
import EmblaCarousel from './components/carusel/EmblaCarousel';
import Menu from "./components/menu";
import AnimationVisible from "./components/animationVisible";
import Cointap from "./components/cointap";



const OPTIONS = { axis: 'y' };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
    const [balance, setBalance] = useState(0);
    const [increment, setIncrement] = useState(0);
    const [showCointap, setShowCointap] = useState(false);

    const handleIncrement = () => {
        setBalance(prevBalance => prevBalance + 10);
        setIncrement(10); // Значение увеличения для анимации
    };

    const handleBack = () => {
        setShowCointap(false);
    };

    const handleTap = () => {
        setShowCointap(true);
    };

    return (
        <div className="flex flex-col justify-between h-full select-none">
            <AnimationVisible/>
            <div className="mx-[30px] pt-[30px] animation_visible">
                <Logoname/>
                <div className="flex items-center space-x-[30px] mt-[30px]">
                    <Progressbar/>
                    <Balance balance={balance} increment={increment}/>
                </div>
            </div>
            <div id="carusel" className="animation_visible">
                {showCointap ? (
                    <Cointap onIncrement={handleIncrement} onBack={handleBack}/>
                ) : (
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} onTap={handleTap}/>
                )}
            </div>
            <div className="animation_visible">
                <Menu/>
            </div>
        </div>
    );
}

export default App;