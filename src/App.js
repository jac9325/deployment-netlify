import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/card/Card";

function App() {
  const [data, setData] = useState([]);
  const cardsApi = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then((res) => res.json());
    setData(response);
  };

  useEffect(() => {
    cardsApi();
  });
  return (
    <div className="container">
      {data.map(({ id, title, url }) => (
        <div key={id}>
          <Card id={id} title={title} url={url} />
        </div>
      ))}
    </div>
  );
}

export default App;
