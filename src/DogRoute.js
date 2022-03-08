import DogDetails from "./DogDetails";
import { useParams } from "react-router-dom";

function DogRoute({dogList}){
  const params = useParams();
  const dog = dogList.find(dog => dog.name.toLowerCase() === params.name);


  return(
    <DogDetails dog={dog}/>
  );
}

export default DogRoute;