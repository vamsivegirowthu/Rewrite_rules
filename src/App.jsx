import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/test")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Serverless API Data</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default App;