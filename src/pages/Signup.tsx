import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/", { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='h-screen w-full bg-base-200 px-7 py-4 flex items-center justify-center flex-col gap-3'>
      <div className='text-center'>
        <h1 className='text-5xl font-semibold bg-gradient-to-r from-slate-200 to-gray-700 bg-clip-text text-transparent pb-5'>
          Image Zreon
        </h1>
        <p className='mb-2'>
          Start storing your images hassle-free today!
          <br /> Sign up now and enjoy seamless image uploading on our platform.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className='border shadow-md bg-slate-50 p-5 rounded-md w-full sm:w-[30rem]'
      >
        {error && (
          <div role='alert' className='alert shadow-sm rounded-md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='stroke-info shrink-0 w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
            <div>
              <div className='text-xs'>{error}</div>
            </div>
          </div>
        )}
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='email'
            className='input input-bordered'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='px-1 pt-2'>
          <a
            className='cursor-pointer underline text-blue-400'
            onClick={() => navigate("/login", { replace: true })}
          >
            login here
          </a>
        </div>
        <div className='form-control mt-6'>
          <button className='btn btn-primary'>Signup</button>
        </div>
      </form>
      {/* <form onSubmit={handleSubmit} className='w-full'>
        {error && error}
        <div className='w-full'>
          <div className='flex-col'>
            <div className='text-center'>
              <h1 className='text-5xl font-medium'>Image Zreon</h1>
              <p className='py-4'>
                Start storing your images hassle-free today! Sign up now and
                enjoy seamless image uploading on our platform.
              </p>
            </div>
            <div className='card shadow-2xl bg-base-100 sm:max-w-[22rem]'>
              <div className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    placeholder='email'
                    className='input input-bordered'
                    // required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    // required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='form-control mt-6'>
                  <button className='btn btn-primary'>Signup</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form> */}
    </div>
  );
};

export default Signup;
