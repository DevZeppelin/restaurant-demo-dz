import React from 'react'

const MainCard = ({src, alt, title}) => {
    return (
        <div className='m-2 py-4 mx-0 text-center border-2 border-gray rounded-xl shadow-gray shadow-inner'>
            <div className='mx-2'>
                <img className='mx-auto h-16 w-16' src={src} alt={alt} />
                <p className='text-dgray text-center text-base uppercase font-semibold mt-2 mx-'>{title}</p>
            </div>
        </div>
    )
}

export default MainCard
