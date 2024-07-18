//component 4
//prop 1
import { TESTIMONIALS } from "../data.js";

export default function HomeInfo() {
  return (
    <>
      <section class="testimonial-section">
        <div class="testimonials-container">
          <div class="testimonial">
            <p class="testimonial-text">{TESTIMONIALS[0].comment}</p>
            <p class="testimonial-author">{TESTIMONIALS[0].name}</p>
          </div>

          <div class="testimonial">
            <p class="testimonial-text">{TESTIMONIALS[1].comment}</p>
            <p class="testimonial-author">{TESTIMONIALS[1].name}</p>
          </div>

          <div class="testimonial">
            <p class="testimonial-text">{TESTIMONIALS[2].comment}</p>
            <p class="testimonial-author">{TESTIMONIALS[2].name}</p>
          </div>
        </div>
      </section>
    </>
  );
}

//used props concept from 4-props the ... doesnt work idk why
