import trainers1 from "../assets/trainers1.jpg";
import training1 from "../assets/training1.jpg";
import training2 from "../assets/training2.jpg";
import training3 from "../assets/training3.jpg";
import "../static/trainer.css";
import { Link } from "react-router-dom";
function Trainers() {
  return (
    <>
      <div className="main " style={{ backgroundColor: "black" }}>
        <div className="section-img">
          <img className="programimage2" src={trainers1} alt="" style={{height : "900px"}}/>
          <div className="text-center program-text">
            <h1 style={{ color: "white" }}>
              Your Goals, Our Mission.<br></br>Let’s Train!
            </h1>
            <p>Meet Our Expert Gym Trainers: Your Guides to Fitness Success</p>
          </div>
        </div>
        <div className="container" style={{ backgroundColor: "#14181C" }}>
          <p style={{}}>
            At [Your Gym Name], our trainers are dedicated to helping you
            achieve your fitness goals with expert guidance, personalized
            coaching, and motivation. Each trainer brings unique skills,
            experience, and passion to ensure you get the best results possible.
          </p>
        </div>
        <div className="container">
          <p style={{ fontSize: "30px", color: "#FFC107" }}>
            Why Work with a Personal Trainer?
          </p>
          <p>
            A personal trainer does more than just count your reps; they
            provide:
          </p>
          <p>
            {" "}
            ✅ Expert guidance – Ensuring proper technique and injury prevention
          </p>
          <p>
            {" "}
            ✅ Customized workout plans – Designed specifically for your fitness
            level and goals
          </p>
          <p>
            {" "}
            ✅ Motivation & accountability – Keeping you on track and pushing
            you beyond limits
          </p>
          <p>
            {" "}
            ✅ Faster results – Optimizing your training efficiency for maximum
            progress Now, let’s introduce some of our amazing trainers!
          </p>

          <p style={{ fontSize: "30px", color: "#FFC107" }}>
            Meet Our Trainers
          </p>
          <p style={{ color: "#E4B802" }}>
            Expert coaches to guide and support you
          </p>

          <p>
            Our team of certified personal trainers is dedicated to helping you
            achieve your fitness goals. Each trainer specializes in different
            areas, from strength training to flexibility and conditioning. With
            their expertise, you’ll get personalized coaching, motivation, and
            support throughout your fitness journey.
          </p>

          <p>Certified trainers</p>
          <p>
            All our trainers hold nationally recognized certifications and have
            years of experience in the fitness industry.
          </p>

          <p>Personalized Support</p>
          <p>
            Our trainer will work closely with you to monitor your progress,
            adjust your workout plan as needed.
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <p style={{ fontSize: "30px", color: "#FFC107" }}>
                🏋️Michael Lee –
              </p>
              <p style={{ fontSize: "30px", color: "#FFFFFF" }}>
                Functional Fitness & Mobility Expert
              </p>
              <p>
                Michael Lee – Functional Fitness & Mobility Expert With over 7
                years of experience in the fitness industry, Michael Lee
                specializes in functional movement, mobility training, and
                injury prevention. His approach focuses on helping clients move
                better, feel stronger, and improve overall performance in
                everyday life. Michael focuses on functional movement, mobility
                training, and injury prevention, helping clients move better and
                perform at their best. His training style is perfect for anyone
                looking to improve strength, endurance, and flexibility for
                daily life and sports performance.
              </p>
              <p style={{ color: "yellow" }}>
                💡 “Fitness isn’t just about lifting weights—it’s about moving
                with purpose and strength for life.
              </p>
              <div className="trainer-btn d-flex" style={{ gap: "20px" }}>
                <p style={{ color: "#FFFFFF" }}>📅 Train with us</p>
                <Link
                  to="/join-session"
                  className="btn"
                  style={{
                    backgroundColor: "#E4B802",
                    width: "25%",
                    borderRadius: "25px",
                  }}
                >
                  click here
                </Link>
              </div>
            </div>
            <div className="col-6">
              <img src={training1} alt="" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6">
              <img src={training2} alt="" style={{ width: "100%" }} />
            </div>
            <div className="col-6">
              <p style={{ fontSize: "30px", color: "#E4B802" }}>
                🧘‍♀️Laura Anderson –
              </p>
              <p style={{ fontSize: "30px", color: "#FFFFFF" }}>
                Yoga & Flexibility Coach | Mind-Body Specialist
              </p>

              <p>
                With over 8 years of experience, Laura Anderson blends yoga,
                flexibility training, and mindfulness to help clients achieve
                balance, strength, and mobility. She specializes in Vinyasa and
                Hatha yoga, breathwork, and stress relief techniques, guiding
                individuals toward a stronger body and a calmer mind. Laura
                blends yoga, flexibility training, and mindfulness to help
                clients achieve balance, strength, and mobility. She believes in
                a holistic approach that not only improves movement but also
                enhances overall well-being.
              </p>

              <p style={{ color: "yellow" }}>
                💡 “Strength and flexibility start from within—breathe, move,
                and{" "}
              </p>
              <p style={{ fontSize: "30px", color: "#FFFFFF" }}>
                📅 Join ours next yoga class
              </p>
              <Link
                to="/join-session"
                className="btn"
                style={{
                  backgroundColor: "#E4B802",
                  width: "25%",
                  borderRadius: "25px",
                }}
              >
                click here
              </Link>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6">
              <p style={{ fontSize: "30px", color: "#E4B802" }}>
                💪 David Brown –{" "}
              </p>
              <p style={{ fontSize: "30px", color: "#FFFFFF" }}>
                CrossFit Level 2 Coach & Strength Specialist
              </p>

              <p>
                A CrossFit Level 2 Coach with over 10 years of experience, David
                Brown is passionate about helping clients build strength
                endurance, and resilience. With 10+ years of experience, David
                specializes in high-intensity training, Olympic lifting, and
                functional strength. His coaching philosophy is all about
                pushing past mental and physical limits to unlock your full
                potential.
              </p>

              <p style={{ color: "yellow" }}>
                💡 “Train with purpose, push past limits, and embrace the
                grind.”
              </p>

              <p style={{ fontSize: "30px", color: "#FFFFFF" }}>
                💡 “Train with purpose, push past limits, and embrace the
                grind.”
              </p>
              <div className="trainer-btn d-flex" style={{ gap: "20px" }}>
                <p style={{ color: "#FFFFFF" }}>📅 Book a session with us</p>

                <Link
                  to="/join-session"
                  className="btn"
                  style={{
                    backgroundColor: "#E4B802",
                    width: "25%",
                    borderRadius: "25px",
                  }}
                >
                  click here
                </Link>
              </div>
            </div>
            <div className="col-6">
              <img src={training3} alt="" />
            </div>
          </div>
          <div
            className="row
           mt-5"
          >
            <p style={{ fontSize: "40px", color: "#FFC107" }}>
              Start Your Fitness Journey Today!
            </p>

            <p>
              No matter your fitness level or goal, our expert trainers at [Your
              Gym Name] are here to guide you every step of the way. Whether you
              want to build muscle, lose weight, improve flexibility, or just
              get stronger, we have the perfect trainer for you.
            </p>

            <p>
              📢 Book a free consultation or a training session today!to get
              started.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Trainers;
