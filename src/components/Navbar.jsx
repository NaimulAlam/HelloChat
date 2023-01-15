import React from 'react'

const Navbar = () => {
  return (
    // <div className='flex items-center justify-between'>
    //   <div className='navbar'>
    //     <span className="logo">
    //       Hello! App
    //     </span>
    //   </div>
    //   <div className="flex user">
    //     <img src="" alt="" />
    //     <span>Naim</span>
    //     <button className="primary">logout</button>
    //   </div>
    // </div>
    <div className="navbar bg-base-300 rounded-tl-lg">
      <div className="flex-1">
        <span className="normal-case text-xl">Hello! App</span>
      </div>
      <div className="flex-none gap-2">
        <p>Naim</p>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt=''/>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar