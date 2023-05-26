import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';


function Register() {
    const navigate = useNavigate()

    const [showPass, setShowPass] = useState(false)
    const [passwordError, setPasswordError] = useState('')

    const { setUserName, setPhotoUrl, googleHandler, githubHandler, registerWithEmail, updateUserProfile } = useContext(AuthContext)

    const googleBtnClicked = () => {
        googleHandler()
            .then((result) => {
                // The signed-in user info.
                const user = result.user.displayName;
                setPhotoUrl(result.user?.photoURL)
                setUserName(user)
                navigate('/');

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
                navigate('/')
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const passwordValidating = (e) => {
        const password = e.target.value;
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError("At least one uppercase character");
            return
        }
        else if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            setPasswordError("At least one special character");
            return
        }
        else if (!/^(?=.*[0-9]).*$/.test(password)) {
            setPasswordError("At least one digit character");
            return
        }
        else if (!/^\S*$/.test(password)) {
            setPasswordError("No white space");
            return
        }
        else if (!/(?=.{6,})/.test(password)) {
            setPasswordError("Password must be at least 6 characters long")
            return
        }
        else {
            console.log('welcom')
            setPasswordError('');
            e.target.style.border = '1px solid #ced4da'
            return
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo_url = e.target.photo_url.value;

        if (passwordError) {
            e.target.password.focus();
            e.target.password.style.border = '2px solid red'
            return;
        }
        e.target.password.style.border = '1px solid #ced4da'

        registerWithEmail(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateUserProfile(name, photo_url)
                    .then(() => {
                        setUserName(user.displayName);
                        setPhotoUrl(user.photoURL)
                        navigate('/')
                    }).catch((error) => {
                        const errorMessage = error.message;
                        console.log(errorMessage)
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div className='text-center my-10 '>
            <h2 className='text-3xl font-semibold'>Please SingUp </h2>
            <form onSubmit={submitHandler} className='mb-6 mt-2 shadow-xl pt-16 py-12 mx-5 md:w-[45%] md:mx-auto rounded-lg'>
                <div >
                    <input type="text" name="name" placeholder="Enter Your Name" className="bg-[#E8F0FE]  input w-full max-w-xs" required />
                </div>
                <div className='my-4'>
                    <input type="text" name="photo_url" placeholder="Enter Your Photo URL" className="bg-[#E8F0FE]  input w-full max-w-xs" required />
                </div>
                <div >
                    <input type="email" name="email" placeholder="Enter Your Email" className="bg-[#E8F0FE]  input w-full max-w-xs" required />
                </div>
                <div className='my-4 relative'>
                    <input type={showPass ? 'text' : 'password'} name="password" onChange={passwordValidating} placeholder="Enter Your password" className="bg-[#E8F0FE]  input w-full max-w-xs" required />
                    {
                        showPass ?
                            <FaEye onClick={() => setShowPass(!showPass)} className="absolute top-3 right-1/4" />
                            : <FaEyeSlash onClick={() => setShowPass(!showPass)} className="absolute top-3 right-1/4" />
                    }
                    {
                        passwordError &&
                        <p style={{ color: 'red' }} className="error">{passwordError}</p>
                    }

                </div>
                <div className='my-6'>
                    <button className='btn bg-primaryColor border-0 px-8' type="submit" variant="dark">SingUp</button>
                </div>
                <hr className='hr_design' />

                <div className='my-8 flex flex-col lg:flex-row gap-3 justify-center mx-5'>
                    <button onClick={googleBtnClicked} className='btn btn-outline btn-success hover:bg-success'><FaGoogle className='text-lg me-1' />SingUp With Google</button>
                    <button onClick={githubBtnClicked} className='btn btn-outline hover:btn'><FaGithub className='text-lg me-1' />SingUp With Github</button>
                </div>

                <p className='text-lg my-5'>Have Already An Account ? <Link className='font-medium text-primaryColor' to='/login'>login here</Link></p>
            </form>
        </div>
    )
}

export default Register