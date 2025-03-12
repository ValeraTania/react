import { Link } from "react-router";
import NavLabel from "./NavLabel";

export default function Nav(){

return(
    <nav>
        <span>
          <li>
            <Link to="/"> 
            <NavLabel>Home</NavLabel>
            </Link>
          </li>
        </span>
        <li>
          <Link to="/europe">
          <NavLabel>Europe</NavLabel>

          </Link>
        </li>
      </nav>
)
}