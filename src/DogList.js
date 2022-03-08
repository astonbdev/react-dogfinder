import {v4 as uuid} from "uuid";


/**
 * Props:
 * -dogList: type array like [{dog...}, {dog...},...]
 *  where dog is like {name, src, facts, age}
 *
 * State:
 * -none
 *
 * Routes -> DogList
 */
function DogList({ dogList }) {

  const dogListStyles = {
    height: "200px",
    width: "200px",
  };

  //add links
  return (
    <div className="DogList">
      {
        dogList.map(dog => (
          <div className="dogList-dog" key={uuid()}>
            <p>{dog.name}</p>
            <img
              style={dogListStyles}
              src={`/${dog.src}.jpg`}
              alt={dog.src}
            />
          </div>
        ))}
    </div>
  );

}



export default DogList;