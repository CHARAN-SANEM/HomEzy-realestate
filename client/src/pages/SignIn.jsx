import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      <div className='p-3 max-w-lg  mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignIn</h1>  
      <form className='flex flex-col gap-4 '>
        <input type="email" placeholder='email' className='border p-3 rounded-lg ' id='email'/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg ' id='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:bg-opacity-80' >Sign Up</button>
     </form>
     <div className='flex gap-2 mt-5'>
      <p>Dont Have an Account?</p>
      <Link to={'/sign-up'}>
      <span className='text-blue-500'> Sign up</span>
      </Link>

     </div>
      
    </div>
    </div>
  )
}
