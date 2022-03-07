
function DogList({ dogList }) {



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