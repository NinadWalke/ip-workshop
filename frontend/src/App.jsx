import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [counter, setCounter] = useState(0);
  const [userId, setUserId] = useState("");
  function modifyCounter() {
    setCounter(counter + 1);
  }
  useEffect(() => {
    async function getUserId() {
      const response = await axios.get("http://localhost:3000/user");
      setUserId(response.data.userId);
    }
    getUserId();
  }, []);
  return (
  <>
    <button onClick={modifyCounter}>
      Count {counter}
    </button>
    <p>User ID fetched from the server: {userId}</p>
  </>
  );
}

export default App;
