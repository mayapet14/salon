import PageTitle from "../components/PageTitle";
import NavBar from "../components/NavBar";
import Directions from "../components/Directions";
import Guidance from "../components/Guidance";
import Footer from "../components/Footer";

export default function Location() {
  return (
    <>
      <NavBar />
      <main>
        <PageTitle title="Maya's Salon | Location" />
        <Directions />
        <Guidance />
      </main>
      <Footer />
    </>
  );
}
