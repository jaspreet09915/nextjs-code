import React from 'react'

const Dummy = () => {
  return (
      <>
      {/* using global we able to use this style to another component where this module is imported */}
      <style jsx global>
          {`
            .dummy{
                background:yellow;
            }
          `}
      </style>
      <div className='dummy'>I am Dummy Dummy!</div>
      </>
  )
}

export default Dummy