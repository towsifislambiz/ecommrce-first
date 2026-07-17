import React, { useState } from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'
import Image from '../Components/Image'
import Google from '../assets/Google.png'
import Sbimg from '../assets/Sb-img.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { EmailAuthProvider } from 'firebase/auth/cordova'
import { log } from 'firebase/firestore/pipelines'
import { getAuth, signInWithEmailAndPassword , sendPasswordResetEmail } from "firebase/auth";
 import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'



const SBanner = () => {
  const auth = getAuth();
 let EmailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let lowercase=/(?=.*[a-z])/
  let uppercase =/(?=.*[A-Z])/
  let digit =/(?=.*\d)/
  let special  =/(?=.*[@$!%*?&])/
let characters = /^.{8,16}$/

const [email, setEmail] = useState("");
const [emailError, SetEmailError] = useState("");
const [password, setPassword] = useState("");
let [PasswordError , SetPasswordError]=useState()
const [showPassword, setShowPassword] = useState(false);
const [showForgotModal, setShowForgotModal] = useState(false);
const [resetEmail, setResetEmail] = useState("");
const [resetEmailError, setResetEmailError] = useState("");
const navigate=useNavigate()

const handleEmail = (e) => {
  setEmail(e.target.value);
  SetEmailError("");
};

const handlePassword = (e) => {
  setPassword(e.target.value);
  SetPasswordError("");
};


const handleLogin = () => {
  if (!email) {
    SetEmailError("Please Enter Your Email :");
  }else if(!EmailRegex.test(email)){
    SetEmailError("Please Enter Valid Email :")
  }if (!password) {
   SetPasswordError("Please Enter Your Password :");
  }else if(!characters.test(password)){
  SetPasswordError("Password must be 8-16 characters long :")
}
else if(!lowercase.test(password)){
  SetPasswordError("Must contain at least one lowercase letter :")
}
else if(!uppercase.test(password)){
  SetPasswordError("Must contain at least one uppercase letter :")
}
else if(!digit.test(password)){
  SetPasswordError("Must contain at least one digit :")
}
else if(!special.test(password)){
  SetPasswordError("Must contain at least one special character :")
}
if(    
    email &&
    password &&
    EmailRegex.test(email) &&
    lowercase.test(password) &&
    uppercase.test(password) &&
    digit.test(password) &&
    special.test(password) &&
    characters.test(password)){

   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    if(userCredential.user.emailVerified){
toast.success("login Successfully")
setTimeout(() => {
  
  navigate("/Account")
}, 2000);
    }else{
      toast.error("Verify Your Email")
    }
    


  })
  .catch((error) => {
   switch (error.code) {

    case "auth/invalid-credential":
      toast.error("Email or Password is incorrect!");
      break;

    case "auth/user-not-found":
      toast.error("No account found with this email!");
      break;

    case "auth/wrong-password":
      toast.error("Incorrect password!");
      break;

    case "auth/invalid-email":
      toast.error("Invalid email address!");
      break;

    case "auth/too-many-requests":
      toast.error("Too many failed attempts. Try again later.");
      break;

    case "auth/network-request-failed":
      toast.error("Check your internet connection.");
      break;

    default:
      toast.error(error.message);
  }
  });

    }

}

const handleResetPassword = async () => {
  if (!resetEmail) {
    setResetEmailError("Please enter your email.");
    return;
  }

  if (!EmailRegex.test(resetEmail)) {
    setResetEmailError("Please enter a valid email.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, resetEmail);

    toast.success("Password reset link sent to your email.");

    setShowForgotModal(false);
    setResetEmail("");
    setResetEmailError("");

  } catch (error) {

    switch (error.code) {

      case "auth/user-not-found":
        toast.error("No account found with this email.");
        break;

      case "auth/invalid-email":
        toast.error("Invalid email address.");
        break;

      case "auth/network-request-failed":
        toast.error("Check your internet connection.");
        break;

      default:
        toast.error(error.message);

    }

  }
};

  return (
    <section className='relative min-h-screen'>
        <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
      />
      {/* Left Side Image */}
      <div className='absolute w-[54%] bg-[#CBE4E8] h-200 rounded flex justify-center items-center'>
        <Image className='w-full h-200' src={Sbimg}/>
      </div>

      <Container>
        {/* Added minimum height so section takes full space */}
        <div className='flex relative min-h-screen'>
          
          {/* Right Side Form */}
          <div className='absolute right-0 top-[227.5px]'>
            <div className='ml-[50px]'>
              
              <h1 className='font-inter font-medium text-4xl text-black'>
                Log in to Exclusive
              </h1>

              <p className='pl-1 pt-6 font-normal text-base font-pop text-black'>
                Enter your details below
              </p>

              <div className='flex flex-col gap-y-10 mt-12 w-95'>
          

               <div className="relative">
  <input
    type="email"
    value={email}
    onChange={handleEmail}
    placeholder=" "
    className="
      peer
      w-full
      rounded-2xl
      border
      border-gray-300
      bg-gray-50
      px-5
      pt-6
      pb-3
      text-gray-800
      shadow-sm
      outline-none
      transition-all
      duration-300
      focus:border-blue-600
      focus:ring-4
      focus:ring-blue-100
      focus:shadow-[0_8px_30px_rgba(37,99,235,0.18)]
    "
  />

  <label
    className="
      absolute
      left-5
      top-2
      text-sm
      text-gray-500
      transition-all
      duration-300
      peer-placeholder-shown:top-5
      peer-placeholder-shown:text-base
      peer-placeholder-shown:text-gray-400
      peer-focus:top-2
      peer-focus:text-sm
      peer-focus:text-blue-600
    "
  >
    Email or Phone Number
  </label>

  {emailError && (
    <p className="mt-3 rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white">
      {emailError}
    </p>
  )}
</div>

      <div>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={handlePassword}
      placeholder=" "
      className="
        peer
        w-full
        rounded-2xl
        border
        border-gray-300
        bg-white
        px-5
        pr-14
        pt-6
        pb-3
        text-[16px]
        text-gray-800
        shadow-sm
        outline-none
        transition-all
        duration-300
        focus:border-blue-600
        focus:ring-4
        focus:ring-blue-100
        focus:shadow-lg
      "
    />

    <label
      className="
        absolute
        left-5
        top-2
        text-sm
        text-gray-500
        transition-all
        duration-300
        peer-placeholder-shown:top-5
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-400
        peer-focus:top-2
        peer-focus:text-sm
        peer-focus:text-blue-600
      "
    >
      Password
    </label>

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="
        absolute
        right-5
        top-1/2
        -translate-y-1/2
        text-gray-500
        hover:text-blue-600
        transition
        duration-300
        text-xl
      "
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>

  {PasswordError && (
    <p className="mt-3 rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white shadow-md">
      {PasswordError}
    </p>
  )}
</div>

        
              </div>

<div className='w-full flex justify-between mt-10 items-center'>

  <div
  
  onClick={handleLogin}
  >

<Button
  Text="Log In"
  className="
    w-40
    h-14
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    via-blue-700
    to-indigo-700
    text-white
    text-lg
    font-semibold
    tracking-wide
    shadow-[0_10px_30px_rgba(37,99,235,0.30)]
    transition-all
    duration-300
    hover:scale-[1.03]
    hover:shadow-[0_15px_40px_rgba(37,99,235,0.40)]
    hover:brightness-110
    active:scale-95
  "
/>
  </div>
                
              
<span
  onClick={() => {
    setShowForgotModal(true);
    setResetEmail(email);
  }}
  className="
    cursor-pointer
    text-base
    font-semibold
    text-blue-600
    transition-all
    duration-300
    hover:text-blue-700
    hover:underline
    hover:underline-offset-4
  "
>
  Forgot Password?
</span>

{showForgotModal && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6 animate-[fadeIn_0.25s_ease-out]"
    onMouseDown={(e) => {
      if (e.target === e.currentTarget) {
        setShowForgotModal(false);
        setResetEmailError("");
      }
    }}
  >
    <style>
      {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalPop {
          from { opacity: 0; transform: translateY(16px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}
    </style>

    <div
      className="relative w-full max-w-md sm:max-w-lg rounded-3xl border border-white/10 bg-gradient-to-b from-[#171A2E] to-[#0F1123] p-6 sm:p-8 shadow-2xl shadow-black/50 animate-[modalPop_0.3s_ease-out]"
    >
      {/* Close (X) button */}
      <button
        type="button"
        onClick={() => {
          setShowForgotModal(false);
          setResetEmailError("");
        }}
        aria-label="Close dialog"
        className="absolute right-5 top-5 sm:right-6 sm:top-6 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors duration-150 hover:bg-white/5 hover:text-white active:scale-90"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Gradient icon area */}
      <div className="relative flex h-28 sm:h-32 w-full items-center justify-center">
        <div className="absolute h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-indigo-500/30 blur-2xl" />

        <span className="absolute left-2 sm:left-4 top-1 h-3 w-3 rounded-full border-2 border-indigo-400/60" />
        <span className="absolute right-8 top-6 h-1.5 w-1.5 rounded-full bg-indigo-300/80" />
        <span className="absolute right-14 top-0 h-2 w-2 rotate-45 bg-indigo-400/70" />
        <span className="absolute bottom-2 left-10 h-1 w-1 rounded-full bg-indigo-300/60" />

        <svg
          className="absolute right-3 sm:right-6 top-0 h-8 w-8 rotate-[18deg] text-indigo-300 drop-shadow-[0_0_6px_rgba(129,140,248,0.6)]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22 2L2.5 10.9c-.7.3-.7 1.3.1 1.5l5 1.4 2 6.2c.2.7 1.1.8 1.5.2l2.8-3.8 5 3.9c.5.4 1.3.1 1.4-.6L22 2z" />
        </svg>

        <div className="relative z-10">
          <svg width="88" height="66" viewBox="0 0 88 66" fill="none">
            <defs>
              <linearGradient id="envBack" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
              <linearGradient id="envFront" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A5B4FC" />
                <stop offset="100%" stopColor="#818CF8" />
              </linearGradient>
            </defs>
            <rect x="4" y="10" width="80" height="52" rx="8" fill="url(#envBack)" />
            <path
              d="M4 18L44 40L84 18"
              stroke="#C7D2FE"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 62V30L38 52C41.5 54.3 46.5 54.3 50 52L84 30V62C84 64.2 82.2 66 80 66H8C5.8 66 4 64.2 4 62Z"
              fill="url(#envFront)"
            />
          </svg>

          <div className="absolute left-1/2 top-1 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white shadow-[0_4px_16px_rgba(99,102,241,0.45)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="11" width="14" height="9" rx="2" fill="#4F46E5" />
                <path
                  d="M8 11V8a4 4 0 018 0v3"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="15" r="1.4" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h2 className="mt-2 bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text text-center text-2xl sm:text-3xl font-bold leading-tight text-transparent">
        Password
        <br />
        Recovery
      </h2>

      {/* Body copy */}
      <p className="mx-auto mt-3 max-w-xs text-center text-sm sm:text-[15px] leading-relaxed text-slate-400">
        No worries! Enter your email and we&rsquo;ll send you instructions to reset your
        password.
      </p>

      {/* Email input */}
      <div className="mt-6">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-150 focus-within:border-indigo-400/60 focus-within:bg-white/[0.07]">
          <svg
            className="shrink-0 text-slate-400"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="email"
            value={resetEmail}
            onChange={(e) => {
              setResetEmail(e.target.value);
              setResetEmailError("");
            }}
            placeholder="Your email address"
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
        </div>

        {resetEmailError && (
          <p className="mt-2 text-xs text-rose-400">{resetEmailError}</p>
        )}
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => {
            setShowForgotModal(false);
            setResetEmailError("");
          }}
          className="order-2 sm:order-1 flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-150 hover:bg-white/10 active:scale-[0.98]"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleResetPassword}
          className="order-1 sm:order-2 flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-150 hover:brightness-110 active:scale-[0.98]"
        >
          Send Email
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Footer note */}
      <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-slate-500">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <span>Your security is our priority</span>
      </div>
    </div>
  </div>
)}
</div>

            </div>
          </div>

        </div>
      </Container>

    </section>
  )
}

export default SBanner