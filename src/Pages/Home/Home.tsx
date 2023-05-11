import "./Home.css";
import { useState } from "react";
import useDetail from "../../useDetails";
const Home = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
 
  const {Login} = useDetail()
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    Login(name, password)
    
  };
  return (
    <>
      <div className="container">
        <form>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            {name.length >= 3 && password.length >= 6 && (
              <button type="submit" onClick={handleLogin}>
                Submit
              </button>
            )}
          </div>
        </form>
        <h3>Details to use:</h3>
        <p>Jim: hello235</p>
        <p>Grace: hello5</p>
        <p>Faith: hello25</p>
      </div>
    </>
  );
};
export default Home;
