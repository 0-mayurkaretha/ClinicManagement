import React, { useEffect, useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../Components/CommonComponents/CustomInput';
import CustomButton from '../Components/CommonComponents/CustomButton';
import { checkLoggedIn, consultantLogin, doctorLogin, mainDoctorLogin, receptionistLogin } from '../Redux/AuthReducer/action';

export default function Login() {
  const userLoginMessage = useSelector((state) => state.AuthReducer.userLoginMessage);
  const userLoginFail = useSelector((state) => state.AuthReducer.userLoginFail);
  const userLoginSuccess = useSelector((state) => state.AuthReducer.userLoginSuccess);
  const userLoginProcess = useSelector((state) => state.AuthReducer.userLoginProcess);
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handel custom input change
  const handelCustomInputChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  // handel Custom Button Click
  const handelCustomButtonClick = () => {
    // trim user input
    const data = {
      email: userInput.email.trim(),
      password: userInput.password.trim(),
    };

    if (!data.email || !data.password) {
      return toast.error('Please fill all required fields.', { position: toast.POSITION.TOP_RIGHT });
    }

    // check for valid email
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      toast.error('Invalid email.', { position: toast.POSITION.TOP_RIGHT });
      return;
    }

    if (!userRole) {
      return toast.error('Select a role.', { position: toast.POSITION.TOP_RIGHT });
    }

    // dispatch login function as per the selected user role.
    if (userRole === 'superAdmin') {
      dispatch(mainDoctorLogin(userInput));
    } else if (userRole === 'receptionist') {
      dispatch(receptionistLogin(userInput));
    } else if (userRole === 'consultant') {
      dispatch(consultantLogin(userInput));
    } else if (userRole === 'doctor') {
      dispatch(doctorLogin(userInput));
    }
  };

  // check if user already login
  useEffect(() => {
    dispatch(checkLoggedIn());
  }, []);

  // useEffect
  useEffect(() => {
    // if login success
    if (!userLoginProcess && userLoginSuccess) {
      toast.success(userLoginMessage, { position: toast.POSITION.TOP_RIGHT });

      //  redirect to home page
      window.location.pathname == '/login' && navigate('/dashboard');
    }

    // if login fail
    else if (!userLoginProcess && userLoginFail) {
      toast.error(userLoginMessage, { position: toast.POSITION.TOP_RIGHT });
    }
  }, [userLoginProcess, userLoginSuccess, userLoginFail]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* heading */}
        <p className="text-center mb-4 text-2xl font-bold ">Login to continue.</p>

        {/* email input */}
        <CustomInput label={'Email'} name={'email'} type={'text'} value={userInput.email} onChange={handelCustomInputChange} placeholder={'Enter Email!'} icon={<IoPersonOutline />} />

        {/* password input */}
        <CustomInput label={'Password'} name="password" type={'password'} value={userInput.password} onChange={handelCustomInputChange} placeholder={'Enter Your Password'} icon={<IoPersonOutline />} />

        {/* select user role */}
        <label htmlFor="countries" className=" block w-32 mt-5 text-sm font-medium text-primary-900  mb-1">
          Select an option
        </label>
        <select
          id="countries"
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className="w-full border border-primary-300 text-primary-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 "
        >
          <option value={''}>Select Role</option>
          <option value="superAdmin">Main Doctor</option>
          <option value="doctor">Doctor</option>
          <option value="receptionist">Receptionist</option>
          <option value="consultant">Consultant</option>
        </select>

        {/* login button */}
        <CustomButton onClick={handelCustomButtonClick} isProcessing={userLoginProcess} label="Login" />

        {/* redirect to login page */}
        {/* {
          <p className="mt-4">
            {' '}
            Signup As Main Doctor,{' '}
            <span
              onClick={() => {
                navigate('/signup');
              }}
              className="font-bold text-primary-200 cursor-pointer "
            >
              Signup
            </span>{' '}
          </p>
        } */}
      </div>

      <ToastContainer />
    </div>
  );
}
