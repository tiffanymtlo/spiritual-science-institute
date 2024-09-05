import React from 'react';
import './MainContent.css';

const displayImg1 = "https://ichingspiritual.com/wp-content/uploads/2024/07/Picture4.jpg";
const displayImg2 = "https://ichingspiritual.com/wp-content/uploads/2024/07/Picture5.jpg";
const displayImg3 = "https://ichingspiritual.com/wp-content/uploads/2024/07/Picture6.jpg";
const displayImg4 = "https://ichingspiritual.com/wp-content/uploads/2024/07/Picture7.jpg";
const displayImg5 = "https://ichingspiritual.com/wp-content/uploads/2024/07/Picture8.jpg";
const displayImg6 = "https://ichingspiritual.com/wp-content/uploads/2024/07/Picture9.jpg";
const displayImg7 = "https://ichingspiritual.com/wp-content/uploads/2024/07/Picture10.jpg";
const displayImg8 = "https://ichingspiritual.com/wp-content/uploads/2024/07/Picture11.jpg";

const MainContent = () => {
  return (
    <main>
      <section class="explanation-section">
        <div class="explanation-display">
          <div>
            <img src={displayImg1} alt="" />
            <img src={displayImg2} alt="" />
            <img src={displayImg3} alt="" />
            <img src={displayImg4} alt="" />
          </div>
          <video
              class="oracle-video"
              src="https://ichingspiritual.com/wp-content/uploads/2024/07/易經塔羅2.0.mp4"
              autoplay=""
              loop=""
              muted="muted"
              controlslist="nodownload"
            ></video>
          <div>
            <img src={displayImg5} alt="" />
            <img src={displayImg6} alt="" />
            <img src={displayImg7} alt="" />
            <img src={displayImg8} alt="" />
          </div>
        </div>
        <div>
          <h2>About The FengShui Oracle</h2>
          <div class="explanation-paragraph">
            <p>
              Many people have experienced the challenge of finding a traditional Feng Shui master
              for Feng Shui consultations, requiring appointments, and often coming at a high cost...
            </p>
            <p>
              Everyone possesses unique energy, and when we gather in shared environments, we influence one another,
              generating new energy. This phenomenon is known as Feng Shui energy, which directly impacts our emotions,
              physical well-being, career success, and overall fortune.
            </p>
            <p>
              Now, we introduce a unique method that utilizes the Fengshui Oracle and energy lamps, allowing you to harness
              the power of Feng Shui energy, promote auspiciousness, and achieve balance in various aspects of your life.
                The best part is, you can do it yourself without relying on others, and it is both effective and affordable.
            </p>
            <p>
              With our Fengshui Oracle and energy lamps, you can now easily enhance the Feng Shui energy of your
              living or working space, leading to an improved quality of life.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Services</h2>
        <p>Details of services offered...</p>
      </section>
    </main>
  );
}

export default MainContent;
