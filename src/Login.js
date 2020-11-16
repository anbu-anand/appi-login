import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";
const Login = ({ loginUserFn, errors }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserFn(details);
  };

  return (
    <Container>
      <ErrorMessage>{errors.errors}</ErrorMessage>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email : </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className="form-control">
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
        <div className="form-control">
          <input type="submit" onClick={handleSubmit} value="Login" />
        </div>
      </form>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
const ErrorMessage = styled.div`
  color: red;
  padding: 0;
  align-self: flex-end;
  font-family: "Post Grotesk Light", "Helvetica Neue", "Arial", "Serif";
`;

export default Login;
