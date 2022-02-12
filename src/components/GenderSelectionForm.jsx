import React from 'react'


function GenderSelectionForm() {
  
  const handleRandom =(e) => {
    e.preventDefault()
    console.log('Random has been clicked');
  }

  const handleFemale =(e) => {
    e.preventDefault()
    console.log('Female has been clicked');
  }

  const handleMale =(e) => {
    e.preventDefault()
    console.log('Male has been clicked');
  }

  return (
    <>
        <div className='card shadow-md compact side bg-base-100'>
              <div className="flex-row items-center space-x-20 card-body">
                  <button onClick ={ handleRandom } className="btn btn-ghost btn-sm rounded-btn">
                      Generate Random
                  </button>
                  <button onClick = { handleFemale } className="btn btn-ghost btn-sm rounded-btn">
                      Generate female
                  </button>
                  <button onClick = { handleMale } className="btn btn-ghost btn-sm rounded-btn">
                      Generate Male
                  </button>
          </div>
      </div>
    </>
    
  )
}

export default GenderSelectionForm