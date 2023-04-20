import Footer from "./Footer";
import Header from "./Header";
export default function Body() {
  return (
    <>
      <Header />
      <h1>Main Page</h1>
      <div>
        <input type="text" placeholder="Search Destinations" />
      </div>
      <Footer />
    </>
  );
}
