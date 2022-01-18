import React from 'react'

const MainButton = ({text, src}) => {
    return (
        <div className="flex p-1 mx-8 mt-6 border-4 text-blue border-blue bg-dgray rounded-2xl">
            <div className="w-1/4">
              <img src={src} alt="botón funcional main" className='m-2 h-12 w-12'/>  
            </div> 
            <div className="w-3/4 my-0 flex ml-4">
              <button className="font-bold text-lg">
                {text}
              </button>
            </div>
          </div>
    )
}

export default MainButton
