import React from 'react'
import addAvatar from './../img/addAvatar.png'

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold py-2">Hello App!</h1>
            <h1 className="text-xl font-bold">Register Here!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-2 px-5">
            <div className="card-body ">
              <form className='divide-y-2'>
                <div className="form-control">
                  <input type="text" placeholder="Display Name" className="input input-ghost w-full max-w-xs" />
                </div>
                <div className="form-control">
                  <input type="text" placeholder="Email" className="input input-ghost w-full max-w-xs" />
                </div>
                <div className="form-control">
                  <input type="password" placeholder="Password" className="input input-ghost w-full max-w-xs" />
                </div>
                <div className="form-control">
                  <label htmlFor='fileUpload' className="label cursor-pointer">
                    <div className="w-12 rounded">
                      <img src={addAvatar} alt="add-avatar" />
                    </div>
                    <span className="label-text">add your avatar</span>
                  </label>
                  <input type="file"
                    id='fileUpload'
                    style={{ 'display': 'none' }}
                    className="file-input w-full max-w-xs" />
                </div>
                <div className="form-control">
                  <button className="btn btn-outline btn-info mt-6">Sign up</button>
                </div>
              </form>
              <div className='text-center mt-3'>
                <p className='text-sm text-gray-400'>You already have an account? <span className='hover:text-error cursor-pointer'>Sign in</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register