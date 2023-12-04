import React, { useState, useEffect } from "react";

 function User() {
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then(res => res.json())
      .then(data => {
        setUser(data.results)
        console.log(data);
      }
      )
      .catch(err => {
        console.log("My catch" + err)
      })
  }, []);

  //main jsx
  return (
    <div className="userInfo">
      
      {user && user.map((item) => (
        <div className="container">
          <div className="pic">
          <img src={item.picture.large} alt="Myimage" />
          </div>
          <div className="info">
          <h1>Name: {item.name.first} {item.name.last}</h1>
          <h1>Gender: {item.gender}</h1>
          <h1>Phone Number: {item.phone}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default User;