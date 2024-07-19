import salon from "../assets/home/salon.jpg";

//component 3

export default function HomeInfo() {
  return (
    <>
      <section class="homesection">
        <h1 class="titlesalon">Maya's Salon</h1>
        <p>
          Welcome to Maya's Salon. Discover blonde, brunette, or a pop of color.
          Our expert stylists are dedicated to helping you explore a world of
          possibilities. Each visit begins with a personalized consultation to
          enhance your natural beauty. Test.
        </p>
        <div class="homeimgcontainer">
          <img
            class="homeimg"
            src={salon}
            alt="https://www.freepik.com/free-photo/woman-getting-her-hair-cut-beauty-salon_20083222.htm#fromView=search&page=1&position=4&uuid=3c19771f-d6b9-4f59-9815-c0e2b2720090"
          />
        </div>
      </section>
    </>
  );
}

//just needed basic paragraph content to complete 12 component requirement
