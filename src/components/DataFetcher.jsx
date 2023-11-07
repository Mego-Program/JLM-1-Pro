import React, { useState, useEffect } from "react";
import AvatarComponent from "./Avatar";

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("ERROR!!!");
      }
    }
    
    fetchData();
  }, []);

  return (
    <div>
      {data.map((noteData) => (
        <AvatarComponent title={noteData.title} id={noteData.id} key={noteData.id} />
      ))}
    </div>
  );
}

export default DataFetcher;






