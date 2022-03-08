import DogDetails from "./DogDetails";
import { useParams, Redirect } from "react-router-dom";

function DogRoute({ dogList }) {
  const params = useParams();
  const dog = dogList.find(dog => dog.name.toLowerCase() === params.name);

  if (dog === undefined) {
    return <Redirect to={"/dogs"} />
  }

  return (
    <DogDetails dog={dog} />
  );
}

export default DogRoute;