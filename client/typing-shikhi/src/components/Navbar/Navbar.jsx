import React, { useState } from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {FaRegKeyboard} from 'react-icons/fa'
import {MdOutlineLeaderboard, MdOutlineLightMode} from 'react-icons/md'
import {TfiStatsUp} from 'react-icons/tfi'
import {TbBrandSpeedtest, TbApps} from 'react-icons/tb'
import { Link, useLocation} from 'react-router-dom'

function Navbar() {

    // states
    const [activeBtn, setActiveBtn] = useState(0)

    // controllers
    function btnActive(index){
        setActiveBtn(index)
    }


    const navElements = [
        {id:1, icon:<FaRegKeyboard/>, name:"টাইপিং প্র্যাক্টিস", path:"/"},
        {id:2, icon:<AiOutlineUser/>,  name:"প্রোফাইল", path:"/profile"},
        {id:3, icon:<MdOutlineLeaderboard/>, name:"লিডারবোর্ড", path:"/leaderboard"},
        {id:4, icon:<TfiStatsUp/>, name:"স্ট্যাটস", path:"/stats"},
        {id:5, icon:<TbBrandSpeedtest/>, name:"টাইপিং টেস্ট", path:"/test"},
        {id:6, icon:<TbApps/>, name:"আরো দেখুন", path:"/options"},
    ]

  return (
    <div className='px-32 bg-forground flex justify-between items-center mt-5 drop-shadow-sm rounded-lg font-shiliguri '>
        <h1 className='text-text-clr font-bold cursor-pointer'>
            Typing <span className='text-light-text'>Shikhi_</span>
        </h1>
        <div>
            <ul className='flex items-center mx-5 py-2 flex-wrap'>
                {navElements.map((item, index)=>(
                    <Link key={item.id} to={item.path} onClick={()=>btnActive(index)}>
                        <li className={`px-6 py-2 flex items-center text-text-clr cursor-pointer hover:text-orange-500 rounded-lg
                                        tansition-all ease duration-100`} >
                                            
                            <span className='text-orange-500 text-md'>{item.icon}</span>
                            <span className={`${activeBtn === index? 'text-orange-500':''} ml-2 text-md font-medium`}>{item.name}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className=' text-text-clr'>
            <MdOutlineLightMode className='font-medium text-orange-500'/>
        </div>
    </div>
  )
}

export default Navbar