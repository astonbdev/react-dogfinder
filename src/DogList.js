import axios from "axios";

function DogList(){
  const results = axios.get("http://localhost:5000/dogs");
  const dogs = results.data;

  return(
    <div className="dogList">
      {
        dogs.map(dog => (
          <div className="dogList-dog">
            <p>{dog.name}</p>
            <img src={dog.src} alt="dog" />
          </div>
          ))}
    </div>
  );

}

export default DogList;