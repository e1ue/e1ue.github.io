import React from 'react'

function Logoname() {
    return (
        <div className="">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <div className="flex items-center">
                <img className="bg-white p-[5px] rounded-[15px]" src={`/img/logo.png`} alt={'Логотип'}/>
                <p className="text-base text-white font-[Bicubik] ml-[10px]">SHINOBI.C</p>
            </div>
        </div>
    )
}

export default Logoname
