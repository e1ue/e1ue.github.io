import React, { useEffect, useState } from 'react';

function Balance({ balance, increment }) {

    const [displayBalance, setDisplayBalance] = useState(balance);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (increment > 0) {
            setAnimating(true);
            let startValue = balance - increment;
            const duration = 500;
            const startTime = Date.now();

            const animateBalance = () => {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;
                if (elapsedTime < duration) {
                    const newValue = Math.easeOutQuad(elapsedTime, startValue, increment, duration);
                    setDisplayBalance(newValue);
                    requestAnimationFrame(animateBalance);
                } else {
                    setDisplayBalance(balance);
                    setAnimating(false);
                }
            };

            animateBalance();
        }
    }, [balance, increment]);

    Math.easeOutQuad = function (t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    };

    const formatBalance = (balance) => {
        return balance.toLocaleString('en-US', { minimumIntegerDigits: 8, useGrouping: false });
    };

    return (
        <div className="w-[200px]">
            <div className="bg-[#242424] border border-[#0C8A72] rounded-[8px]">
                <p className="font-[Bicubik] text-[9px] text-white text-center mt-[10px] mb-[8px] mx-[10px]">+38437/час</p>
                <hr className="border-[#0C8A72]"></hr>
                <div className="flex items-center my-[8px] mx-[10px]">
                    <img src={`/img/coinmini.png`} alt={'МонеткаМини'}/>
                    <p id="balance" className="font-[Bicubik] text-[10px] text-white ml-[5px] leading-none">{formatBalance(Math.round(displayBalance))}</p>
                </div>
            </div>
        </div>
    )
}

export default Balance
