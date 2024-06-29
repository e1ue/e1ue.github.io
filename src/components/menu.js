import React from 'react'

function Menu() {
    return (
        <div className="bg-[#131313] rounded-t-[25px] flex justify-between px-[40px] py-[25px]">
            <button className="h-[35px] w-[55px] bg-[#242424] flex items-center justify-center rounded-[10px]">
                <img src={`/img/home.png`} alt={'home'}/>
            </button>
            <button className="h-[35px] w-[55px] bg-[#242424] flex items-center justify-center rounded-[10px]">
                <img src={`/img/boost.png`} alt={'boost'}/>
            </button>
            <button className="h-[35px] w-[55px] bg-[#242424] flex items-center justify-center rounded-[10px]">
                <img src={`/img/tops.png`} alt={'tops'}/>
            </button>
            <button className="h-[35px] w-[55px] bg-[#242424] flex items-center justify-center rounded-[10px]">
                <img src={`/img/friends.png`} alt={'friends'}/>
            </button>
            <button className="h-[35px] w-[55px] bg-[#242424] flex items-center justify-center rounded-[10px]">
                <img src={`/img/hz.png`} alt={'hz'}/>
            </button>
        </div>
    )
}

export default Menu
