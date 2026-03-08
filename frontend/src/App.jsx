import { use, useEffect, useState } from "react";
import axios from 'axios';

import Message from "./Message";

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
    <Message userId={userId}/>
  </>
  );
}

export default App;
