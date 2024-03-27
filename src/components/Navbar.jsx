import React, {useState} from 'react'

const Navbar = () => {
    const[nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240] mg-auto px-4 text-red-50">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">BebRails.</h1>
            <ul className='flex'> 
                <li className='p-4 font-bold'>About</li>
                <li className='p-4 font-bold'>FAQ</li>
            </ul>
        </div>
    )
}

export default Navbar