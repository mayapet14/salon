import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import ServiceItems from "../components/ServiceItems";

export default function Services() {
  return (
    <>
      <NavBar />
      <main>
        <PageTitle title="Maya's Salon | Services" />
        <ServiceItems />
      </main>
      <Footer />
    </>
  );
}
