import me from "../assets/about/me.png";

export default function Owner() {
  return (
    <div>
      <h1 class="ownerheader">About Us</h1>
      <div class="owner">
        <div className="ownercontainer">
          <div className="aboutimage">
            <img src={me} alt="i took this picture" />
          </div>
          <div className="ownertext">
            <p>
              Maya is the owner of Maya's Salon. Her journey started at The
              School of Hair. Then, she moved onto her first job. Then she got a
              second job.
            </p>
            <p>
              After two jobs, she started Maya's Salon. In addition to the
              salon, she also runs a stamp licking business and teaches basil
              planting. She hopes to do hair forever. Hair is her passion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//just needed basic paragraph content to complete 12 component requirement
