import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/user/101")   // 👈 dynamic route
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Dynamic Routing</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default App;