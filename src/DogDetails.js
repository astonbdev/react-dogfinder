import {v4 as uuid} from "uuid";


/**
 * Props:
 * -dogList: type array like [{dog...}, {dog...},...]
 *  where dog is like {name, src, facts, age}
 *
 * State:
 * -none
 *
 * Routes -> DogDetails
 */
function DogDetails({ dog }){

  return(
    <div className="Dog">
      <p>Name: {dog.name} Age: {dog.age}</p>
      <img src={`/${dog.src}.jpg`} alt={dog.src}/>
      <ul>
        {
          dog.facts.map(fact => <li key={uuid()}>{fact}</li>)
        }
      </ul>
    </div>
  );

}

export default DogDetails;