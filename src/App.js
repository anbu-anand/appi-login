import React, { useEffect, useState } from "react";
import Login from "./Login";
import datas from "./data";

function App() {
  const loginUser = {
    username: "hruday@gmail.com",
    password: "hruday123"
  };

  const [user, setUser] = useState({ email: "" });
  const [errors, setError] = useState("");
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    // fetch("data.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    setEmps(datas);
    // });
  }, []);

  const loginUserFn = (details) => {
    if (
      details.email === loginUser.username &&
      details.password === loginUser.password
    ) {
      setUser({
        email: details.email
      });
      console.log(user);
    } else {
      setError({
        errors: "Invalid username!."
      });
    }
  };

  return (
    <div className="App">
      {user.email ? (
        <div>
          <h2>Employees List</h2>
          <table border={1} cellPadding={7}>
            <tbody>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>age</td>
                <td>gender</td>
                <td>email</td>
                <td>phoneNo</td>
              </tr>
              {datas.user.map((user, idx) => {
                return (
                  <tr key={idx}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <Login loginUserFn={loginUserFn} errors={errors} />
      )}
    </div>
  );
}

export default App;
