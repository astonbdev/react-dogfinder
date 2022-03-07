import { useState } from "react";
import axios from "axios";

async function DogList() {
  const [dogList, setDogList] = useState(await getData());

  console.log(dogList);

  async function getData() {
    const result = await axios.get("http://localhost:5001/dogs");
    return result.data;
  }

  return (
    <div className="dogList">
      {
        dogList.map(dog => (
          // <div className="dogList-dog">
          <p>{dog.name}</p>
          // <img src={dog.src} alt="dog" />
          // </div>
        ))}
    </div>
  );

}

export default DogList;