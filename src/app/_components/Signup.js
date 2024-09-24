import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const router = useRouter();
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setPassError(true);
      return false;
    } else {
      setPassError(false);
    }
    if (!name || !email || !password || !confirmPassword || !city || !contactNumber) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    
    console.log(name, email, password, city, contactNumber);
    let responce = await fetch("http://localhost:3000/api/restaurants", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        city,
        contactNumber,
      }),
    });
    responce = await responce.json();

    if (responce.success == true) {
      alert("Restaurant Registered Sucessfully");
    }
    if (responce.success) {
      const { result } = responce;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
    }
  };

  return (
    <>
      <h3>Sign Up</h3>
      <div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Restaurant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && !name && <span className="input-error">Name cannot be Empty</span>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && !email && <span className="input-error">Email cannot be Empty</span>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && !password && <span className="input-error">You Must Provide a password</span>}
          {passError && <span className="input-error">did not match</span>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && !confirmPassword && <span className="input-error">Confirm password cannot be Empty</span>}
          {passError && <span className="input-error">did not match</span>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {error && !city && <span className="input-error">You Must select your region</span>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          {error && !contactNumber && <span className="input-error">Please Provide your contact Number</span>}
        </div>
        <div>
          <button onClick={handleSignUp} className="button input-wrapper">
            Done
          </button>
        </div>
      </div>
    </>
  );
};
export default Signup;
