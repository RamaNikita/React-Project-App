import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="nav">
        <Link to="/HomePage">Home</Link>
        <Link to="/Hotels">Hotel</Link>
        <Link to="/Airbnb">Airbnb</Link>
        <Link to="/Flights">Flights</Link>
      </div>

      {/* <div>this is Header tab</div> */}
    </>
  );
}
