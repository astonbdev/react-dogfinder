import { Route, Switch, Redirect, useParams } from "react-router-dom";
import DogList from "./DogList";
import DogRoute from "./DogRoute";

/**
 * Props:
 * -dogList: type array like [{dog...}, {dog...},...]
 *  where dog is like {name, src, facts, age}
 *
 * State:
 * -none
 *
 * App -> Nav -> DogList, DogDetails
 */
function Routes({ dogList }) {
  const params = useParams();

  return (
    <Switch>
      <Route exact path="/dogs"><DogList dogList={dogList} /></Route>
      <Route exact path="/dogs/:name">
        <DogRoute dogList={dogList} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  )
}

export default Routes;