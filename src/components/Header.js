import Hotels from "../pages/Hotels";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Link to="/Hotels">Hotel</Link>
      <Link to="/">Home</Link>
      {/* <div>this is Header tab</div> */}
    </>
  );
}
