import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { useRef } from 'react';

function Login() {
    const navigate = useNavigate()
    const emailRef = useRef();
    const location = useLocation();
  console.log('logonn ', location)
  const from=location.state?.from?.pathname || '/';



    const [showPass, setShowPass] = useState(false)
    const [passwordError, setPasswordError] = useState('')

    const { setUserName, setPhotoUrl, googleHandler, githubHandler, logInUser ,updateUserProfile,updateUserPassWord} = useContext(AuthContext)

    const googleBtnClicked = () => {
        googleHandler()
            .then((result) => {
                // The signed-in user info.
                const user = result.user.displayName;
                setPhotoUrl(result.user?.photoURL)
                setUserName(user)
                navigate(from);

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    const githubBtnClicked = () => {
        githubHandler()
            .then((result) => {
                // The signed-in user info.
                const user = result.user.displayName;
                setPhotoUrl(result.user?.photoURL)
                setUserName(user)
                navigate(from)
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    const resetPass = (e) => {
        const email = emailRef.current.value;
        console.log(email)
        updateUserPassWord(email)
        .then(() => {
            console.log(`Password reset email sent!`)
           
          })
          .catch((error) => {
            const errorMessage = error.message;
           console.log(errorMessage)
          });
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setPasswordError('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        logInUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                updateUserProfile(user.displayName)
                    .then(() => {
                        setUserName(user.displayName);
                        setPhotoUrl(user.photoURL)
                        navigate(from)
                    }).catch((error) => {
                        const errorMessage = error.message;
                        console.log(errorMessage)
                    });
            })
            .catch((error) => {
                setPasswordError('')
                const errorMessage = error.message;
                console.log(errorMessage)
                setPasswordError(errorMessage)
            });

    }

    return (
        <div className='text-center my-10 mx-5 '>
            <h2 className='text-3xl font-semibold'>Please Login </h2>
            <form onSubmit={submitHandler} className='mb-6 mt-2 shadow-xl pt-16 py-12 md:w-[45%] mx-auto rounded-lg'>
                <div >
                    <input type="email" name="email" ref={emailRef} placeholder="Enter Your Email" className="bg-[#E8F0FE] input w-full max-w-xs" required />
                </div>
                <div className='relative my-4'>
                    <input type={showPass ? 'text' : 'password'} name="password" placeholder="Enter Your password" className="bg-[#E8F0FE]  input w-full max-w-xs" required />
                    {
                        showPass ?
                            <FaEye onClick={() => setShowPass(!showPass)} className="absolute top-3  right-1/4" />
                            : <FaEyeSlash onClick={() => setShowPass(!showPass)} className="absolute top-3 right-1/4" />
                    }
                    {
                        passwordError &&
                        <p style={{ color: 'red' }} className="error">{passwordError}</p>
                    }

                </div>
                <div className='my-6'>
                    <button className='btn bg-primaryColor border-0 px-8' type="submit" variant="dark">Login</button>
                </div>
                <hr className='hr_design' />

                <div className='my-8 flex flex-col lg:flex-row gap-3 justify-center mx-5'>
                    <button onClick={googleBtnClicked} className='btn btn-outline btn-success hover:bg-success'><FaGoogle className='text-lg me-1' />Login With Google</button>
                    <button onClick={githubBtnClicked} className='btn btn-outline hover:btn'><FaGithub className='text-lg me-1' />Login With Github</button>

                </div>

                <p className='text-lg my-5'>Dont’t Have An Account ? <Link className='font-medium text-primaryColor' to='/register'>Register</Link></p>
                <p onClick={resetPass} className='text-lg font-medium mb-5 text-red-600'>Forget Password??</p>
            </form>
        </div>
    )
}

export default Login