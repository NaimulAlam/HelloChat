import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold py-2">Hello App!</h1>
            <h1 className="text-xl font-bold">Login!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-2 px-5">
            <div className="card-body ">
              <form className='divide-y-2'>
                <div className="form-control">
                  <input type="text" placeholder="Email" className="input input-ghost w-full max-w-xs" />
                </div>
                <div className="form-control">
                  <input type="password" placeholder="Password" className="input input-ghost w-full max-w-xs" />
                </div>
                <div className="form-control">
                  <button className="btn btn-outline btn-accent mt-6">Sign in</button>
                </div>
              </form>
              <div className='text-center mt-3'>
                <p className='text-sm text-gray-400'>You do not have an account? <span className='hover:text-error cursor-pointer'>Sign up</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login