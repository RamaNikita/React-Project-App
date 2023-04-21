export default function About() {
  return (
    <>
      <div>
        <h3>Contact information</h3>
        <h4>Email:-xyz@examplemail.com</h4>
        <h4>Phone:-555-555-1234</h4>
      </div>
      <h3>Follow us on </h3>
      <div className="icon">
        <a href="https://www.facebook.com">
          <img className="logo" src="Images/fb.jpg"></img>
        </a>
        <a href="https://www.instagram.com">
          {" "}
          <img className="logo" src="Images/is.jpg"></img>
        </a>
      </div>
    </>
  );
}
