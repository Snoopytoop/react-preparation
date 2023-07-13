import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="user-list">
          {users.map((user, index) => (
            <div className="user" key={index} onClick={() => navigate(`/${user.id}`)}>
              
                <div className="user-card">
                  <div className="user-card__container">
                    <h3>{user.name}</h3>
                    <p>
                      <b>Email:</b> {user.email}
                    </p>
                    <p>
                      <b>Phone:</b> {user.phone}
                    </p>
                    <p>
                      <b>Website:</b>
                      {user.website}
                    </p>
                  </div>
                </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
