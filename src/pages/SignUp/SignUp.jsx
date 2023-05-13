/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import img from '../../assets/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
      const {createUser}=useContext(AuthContext)
      const handleSignUp=e=>{
            e.preventDefault()
            const form=e.target
            const email=form.email.value
            const password=form.password.value
            console.log(email,password);
            createUser(email,password)
            .then(result=>{
                  const user=result.user;
                  console.log(user);
            })
            .catch(error=>console.log(error))
      }
      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left w-1/2">

                              <img className='w-5/6' src={img} alt="" />
                        </div>
                        <div className=" w-1/2 card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                                    <form onSubmit={handleSignUp} >
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">

                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">

                                                <input className="btn btn-primary" type="submit" value="Login" />
                                          </div>
                                    </form>
                                    <p className='text-center'>Already Have an Account? <Link to={'/login'} className='text-orange-500 font-bold'>LogIn</Link></p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SignUp;