import PropTypes from 'prop-types'

function Navbar({title}) {

  
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
          <div className="flex-none px-2 mx-2">
              <h1 className='text-lg font-bold align-middle'>
                {title}
              </h1>
          </div>
        </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'User\'s List'
}

export default Navbar