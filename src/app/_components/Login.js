import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error,setError]=useState(false);
  const router=useRouter();

  const handleLogin=async()=>{
    console.log(email,password)
    if(!email || !password){
        setError(true);
        return false;
    }else{
        setError(false);
    }
  let responce=await fetch("http://localhost:3000/api/restaurants",{
    method:"POST",
    body:JSON.stringify({email,password,Login:true})
  });

  responce=await responce.json();
  if(responce.success){
    const{result}=responce;
    delete result.password;
    localStorage.setItem("restaurantUser",JSON.stringify(result));
    router.push("/restaurant/dashboard");



    alert('Login sucessfully')
  }else{
    alert('Login failed')
  }




  }
  return (
    <>
      <h3>Login</h3>
      <div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          {error && !email && <span className="input-error">Credential cannot be Empty</span>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
          />
          {error && !password && <span className="input-error">Credential cannot be Empty</span>}
        </div>
        <div>
          <button onClick={handleLogin} className="button input-wrapper">Login</button>
        </div>
      </div>
    </>
  );
};
export default Login;
