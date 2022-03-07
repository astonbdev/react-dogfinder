import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function Routes({ dogList }) {
  return (
    <Switch>
      <Route exact path="/dogs"><DogList dogList={dogList}/></Route>
      <Route exact path="/dogs/:name"><DogDetails dogList={dogList}/></Route>
      <Redirect to="/dogs" />
    </Switch>
  )
}

export default Routes;