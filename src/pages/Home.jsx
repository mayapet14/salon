import React from "react";
import PageTitle from "../components/PageTitle";
import NavBar from "../components/NavBar";
import HomeInfo from "../components/HomeInfo";
import Testimonials from "../components/Testimonials";
import Hours from "../components/Hours";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeInfo />
      <Hours />
      <Testimonials />
      <Footer />

      <main>
        <PageTitle title="Maya's Salon | Home" />
      </main>
    </>
  );
}
