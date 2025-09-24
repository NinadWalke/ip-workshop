import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });
  const [updateData, setUpdateData] = useState({
    oldusername: "",
    newusername: ""
  })

  useEffect(() => {
    async function getUsers() {
      const res = await axios.get("http://localhost:8080/users");
      setUsers(res.data);
    }
    getUsers();
  }, [])

  function handleChange(e) {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }
  function handleUpdateChange(e) {
    setUpdateData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const res = await axios.post('http://localhost:8080/signup', formData);
    setUsers(res.data);
    alert("sign up successful!");
  }
  async function handleUpdate(e) {
    e.preventDefault();
    const res = await axios.put(`http://localhost:8080/update`, updateData);
    setUsers(res.data);
    alert("update successful!")
  }
  async function handleDelete(username) {
    const res = await axios.delete(`http://localhost:8080/users/${username}`);
    setUsers(res.data);
    alert('delete successful!');
  }
  
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>Count {count}</button>
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSignUp}>
        <input type="text" name="username" placeholder="username" onChange={handleChange}/> <br />
        <br />
        <input type="text" name="email" placeholder="email" onChange={handleChange}/>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h1>Update Page</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" name="oldusername" placeholder="username" onChange={handleUpdateChange}/> <br />
        <br />
        <input type="text" name="newusername" placeholder="new username" onChange={handleUpdateChange}/>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <h1>Users</h1>
      {users.map((user, idx) => (
        <div key={idx}>
          <hr />
          <p>{user.email}</p>
          <p>{user.username}</p>
          <button onClick={() => {handleDelete(user.username)}}>Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
}

export default App;
