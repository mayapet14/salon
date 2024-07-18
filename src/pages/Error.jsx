import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";

//component12

export default function ErrorPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageTitle title="Error" />
        <div class="error">
          <h2>Error!</h2>
          <p>Page not found</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
