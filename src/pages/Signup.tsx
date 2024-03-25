import React from "react";

const Signup = () => {
  return (
    <form>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col'>
          <div className='text-center'>
            <h1 className='text-5xl font-medium'>Image Zreon</h1>
            <p className='py-4 w-96'>
              Start storing your images hassle-free today! Sign up now and enjoy
              seamless image uploading on our platform.
            </p>
          </div>
          <div className='card sm:w-[30rem] shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Signup</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
