import {v4 as uuid} from "uuid";
import { NavLink } from "react-router-dom";

/**
 * Props:
 * -dogList: type array like [{dog...}, {dog...},...]
 *  where dog is like {name, src, facts, age}
 *
 * State:
 * -none
 *
 * App -> Nav
 */
function Nav({ dogList }){

  return(
    <div className="Nav">
      {
        dogList.map(dog => (
          <NavLink
            key={uuid()}
            to={`/dogs/${dog.src}`}>{dog.name}</NavLink>))
      }
    </div>
  );

}

export default Nav;