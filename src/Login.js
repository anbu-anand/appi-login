import React, { useState } from "react";

const Login = ({ loginUserFn, errors }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserFn(details);
  };

  return (
    <div>
      <p>{errors.errors}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email : </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Password : </label>
          <input
            type="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            name="password"
          />
        </div>
        <div className="form-group">
          <input type="submit" onClick={handleSubmit} value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
