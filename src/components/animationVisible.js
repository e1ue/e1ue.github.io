import React, { useEffect } from 'react';

function AnimationVisible() {
    useEffect(() => {
        const blocks = document.querySelectorAll('.animation_visible');
        blocks.forEach((block, index) => {
            setTimeout(() => {
                block.classList.add('visible');
            }, index * 200); // Задержка между анимациями блоков
        });
    }, []);
    return (
        <></>
    )
}

export default AnimationVisible
