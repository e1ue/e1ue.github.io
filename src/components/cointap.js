import React, { useState } from 'react';

function Cointap({ onIncrement, onBack }) {
    const [clicks, setClicks] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (event) => {
        onIncrement();

        const newClick = {
            id: Date.now(),
            x: event.clientX - 75,
            y: event.clientY - 400 // Позиционирование чуть выше места клика
        };

        setClicks([...clicks, newClick]);
        setIsAnimating(true);

        setTimeout(() => {
            setClicks((prevClicks) => prevClicks.filter(click => click.id !== newClick.id));
        }, 1000); // Время до исчезновения чисел (1 секунда)

        setTimeout(() => {
            setIsAnimating(false);
        }, 100); // Длительность анимации нажатия
    };

    return (
        <div>
            <button
                className="text-white px-[10px] py-[5px] border border-white/[.25] rounded-[10px] ml-[30px]"
                onClick={onBack}
            >
                ⬅ Назад
            </button>
            <div className="flex justify-center pt-[50px] relative">
                <div className="bg-cloud bg-auto bg-no-repeat bg-center relative">
                    <img
                        className={`py-[10px] select-none px-[35px] cursor-pointer ${isAnimating ? 'click-animation' : ''}`}
                        src={`/img/coin.png`}
                        alt={'coin'}
                        onClick={handleClick}
                    />
                    {clicks.map((click) => (
                        <span
                            key={click.id}
                            className="float-up"
                            style={{ top: `${click.y}px`, left: `${click.x}px`, transform: 'translate(-50%, -50%)' }}
                        >+10</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cointap;
