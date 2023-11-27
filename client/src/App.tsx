import { useEffect, useState } from "react";
import "./App.css";
import HeaderWrapper from "./wrapper/HeaderWrapper";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <HeaderWrapper />
      {message}
    </>
  );
}

export default App;
