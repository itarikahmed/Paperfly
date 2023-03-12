import React,{ useState }  from "react"
import app from "../components/Firebase"
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"

const SignIn = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleChange=(event)=>{
    console.log(event.target.type);
    if(event.target.type ==="email"){
    setEmail(event.target.value)
    }
    else if(event.target.type ==="password"){
        // console.log(event.target.type)
    setPassword(event.target.value)
    };
}
const handleSubmit=(event)=>{
    event.preventDefault();
    const auth= getAuth(app);
    createUserWithEmailAndPassword(auth,email,password)
    .then((user)=>{
        console.log(user);
    }).catch((err)=>{
        console.log(err);
    })
}


  return <section  className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input 
                      type="email" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" 
                      placeholder="name@company.com" 
                      required=""
                      autoComplete="off"
                      value={email}
                      onChange={handleChange} />
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input
                       type="password"
                      placeholder="••••••••"
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" 
                       required=""
                       autoComplete="off"
                      value={password}
                      onChange={handleChange}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-secondary hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  <p className="text-sm font-light text-gray-500">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 ">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>;
};

export default SignIn;
