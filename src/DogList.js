function DogList({ dogList }) {

  const dogListStyles = {
    height: "200px",
    width: "200px",
  };

  return (
    <div className="dogList">
      {
        dogList.map(dog => (
          <div className="dogList-dog">
            <p>{dog.name}</p>
            <img
              style={dogListStyles}
              src={`${dog.src}.jpg`}
              alt={dog.src}
            />
          </div>
        ))}
    </div>
  );

}



export default DogList;