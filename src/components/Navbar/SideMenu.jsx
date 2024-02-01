import React, { useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";


const SideMenu = () => {
    const [flg, setFlg] = useState('translate-x-full');

    const toggleMenu = () => {
        if (flg) {
            setFlg('')
            document.body.style.overflow = 'hidden';
        }else{
            setFlg('translate-x-full')
            document.body.style.overflow = 'unset';
        }
    }

    return (
        <>
            <button className="btn border p-2 rounded-full relative overflow-hidden z-40">
                <p onClick={toggleMenu} className="z-10 relative"><CgMenuRightAlt /></p>
                <div id="sidemenu" className={`fixed top-0 left-0 w-screen h-screen transition duration-700 ease-in-out bg-dark bg-opacity-95 flex ${flg}`}>
                    <div className=' mx-auto my-auto'>

                        <li className='text-white list-none text-5xl text-left px-5 py-2 border-b'>Home</li>
                        <li className='text-white list-none text-5xl text-left px-5 py-2 border-b'>Menu</li>
                        <li className='text-white list-none text-5xl text-left px-5 py-2 border-b'>Three Hours</li>
                        <li className='text-white list-none text-5xl text-left px-5 py-2 border-b'>Polls</li>
                        <li className='text-white list-none text-5xl text-left px-5 py-2'>Login</li>

                    </div>
                </div>
            </button>
        </>
    )
}

export default SideMenu
