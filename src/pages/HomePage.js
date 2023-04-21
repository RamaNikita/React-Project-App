import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <div>
        <h2>WelCome To Tours and Travels</h2>
      </div>
      <div className="img">
        <img className="img1" src="Images/Resort1.jpg" />
        <img className="img2" src="Images/Resort2.jpg" />
        <img className="img3" src="Images/Resort3.jpg" />
        <img className="img4" src="Images/Resort4.jpg" />
      </div>
      <footer>
        <div className="footer">
          <Link to="/AboutUs">About</Link>
          <Link to="/ContactUs">Contact</Link>
        </div>
        <div></div>
      </footer>
    </>
  );
}
