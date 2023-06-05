import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9090/admin/users");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {users.map((item, index) => (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
