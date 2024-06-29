import React from 'react'

function Progressbar() {
    return (
        <div className="w-full">
            <div className="flex justify-between">
                <p className="font-[Bicubik] text-[6px] text-white">МУДРОСТЬ</p>
                <p className="font-[Bicubik] text-[6px] text-white">УРОВЕНЬ 9/10</p>
            </div>
            <div className="w-full h-[8px] bg-[#646464] rounded-[3px] mt-[10px]">
                <div className="h-[8px] shadow-inner shadow-black/[.25] bg-gradient-to-r from-[#005F53] to-[#00B8A2] rounded-[3px] w-[65%]"></div>
            </div>
        </div>
    )
}

export default Progressbar