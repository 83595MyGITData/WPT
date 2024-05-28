import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/admin";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailEmpty,setEmailEmpty]=useState(false);
  const [isPasswordEmpty,setPasswordEmpty]=useState(false)

  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length == 0) {
      toast.error("Please enter email");
    } else if (password.length == 0) {
      toast.error("Please enter Password");
    } else {
      console.log(`email=${email}`);
      console.log(`password=${password}`);
      const result= await login(email,password)
      if(result['status']=='success')
        {
          const data = result['data']
          sessionStorage['name']= data['name']
          sessionStorage['token']= data['token']
          navigate("/home");

          console.log(data)
          
        }
        else{

            console.log("error")
            toast.error(result['error'])
        }
    }
  };
  return (
    <div>
      <h2 className="page-header">Login</h2>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                onChange={
                  (e) => {
                    if(e.target.value==0)
                      {
                        setEmailEmpty(true)
                      }
                      else{
                        setEmailEmpty(false)
                      }
                    setEmail(e.target.value)}}
                type="email"
                className="form-control"
              />
              {isEmailEmpty && <p style={{color:'red'}}>Email is Mandatory</p>}
            </div>

            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) =>{ 
                  if(e.target.value.length ==0)
                    {
                      setPasswordEmpty(true)
                    }
                    else{
                      setEmailEmpty(false)
                    }
                  setPassword(e.target.value)}}
                type="password"
                className="form-control"
              />
              {isPasswordEmpty &&(<p style={{color:'red'}}>Password is Mandatory</p>)}
            </div>
            <div className="mb-3">
              <div>
                <div className="mb-3">
                  Dont have account <Link to="/register">Register</Link>
                </div>
                <button onClick={onLogin} className="btn btn-success me-2">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
export default Login;
