import PageTitle from "../components/PageTitle";
import NavBar from "../components/NavBar";
import Owner from "../components/Owner";
import Mission from "../components/Mission";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <NavBar />
      <main>
        <PageTitle title="Maya's Salon | About" />
        <Owner />
        <Mission />
        <Footer />
      </main>
    </>
  );
}
