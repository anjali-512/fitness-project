import hero2 from "../assets/hero2.jpeg";
import { useNavigate } from "react-router-dom";
function Program() {
  const navigate = useNavigate()
  return (
    <>
      <div className="main">
        <div className="section-img">
          <img className="programimage" src={hero2} alt=""/>
          <div className="text">
            <h1>
              Transform pain <br /> into power
            </h1>
            <p>
              Achieve your fitness goals with expert guidance and <br />
              personalized plans.
            </p>
          </div>
        </div>
        <div className="container-fluid mt-5 ">
          <div className="container">
            <div className="row p-3" style={{ background: "#1B1B1B" }}>
              <p style={{ fontSize: "30px" }}>Weight Loss Program</p>

              <p style={{ fontSize: "30px", color: "#FFC107" }}>
                Tansform Your Body, Elevate Your Life
              </p>
              <p>
                Our weight loss program combines high-intensity workouts with
                targeted nutrition plans to help you burn fat efficiently.
                Whether you're just starting or have been working out for a
                while, this program is designed to deliver sustainable results.
              </p>
              <p>
                Our Weight Loss Program is designed to help you shed excess
                weight effectively and sustainably. Whether you're looking to
                lose a few pounds or make a significant transformation, our
                program combines personalized nutrition, expert training, and
                lifestyle coaching to ensure long-term success.
              </p>

              <br />
              <p style={{ fontSize: "30px", color: "#FFC107" }}>
                What You’ll Get
              </p>

              <p>
                ✅Customized Meal Plans – Nutrient-rich, delicious meals
                tailored to your goals
              </p>
              <p>
                ✅Effective Workouts – Fat-burning routines designed for all
                fitness levels
              </p>
              <p>
                ✅ Expert Guidance – Professional trainers and nutritionists to
                support you
              </p>
              <p>
                ✅ Accountability & Motivation – Regular check-ins to keep you
                on track
              </p>
              <p>
                ✅ Sustainable Results – Learn lifelong habits for maintaining
                your ideal weight
              </p>

              <br />
              <p style={{ fontSize: "30px", color: "#FFC107" }}>
                Who is This Program For?
              </p>
              <p>✔️ Anyone struggling with weight loss</p>
              <p>✔️ Those looking for a structured, science-backed plan</p>
              <p>✔️ Individuals wanting to boost energy and confidence</p>
              <p>✔️ People ready to commit to a healthier lifestyle</p>
              <p>
                💡 Your journey starts today! Commit to a healthier, happier you
                with our proven weight loss program. Let’s achieve your goals
                together! 💪🔥
              </p>
              <div
                className="btn"
                style={{
                  backgroundColor: "#E4B802",
                  width: "10%",
                  borderRadius: "25px",
                }}
                onClick={() => navigate('/join-now')}
              >
                Join Now
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row p-3" style={{ background: "#1B1B1B" }}>
            <p style={{ fontSize: "30px", color: "#FFC107" }}>
              Muscle Building Program
            </p>

            <p>Build Strength, Gain Size, Transform Your Body</p>

            <p>
              Build strength and muscle through a structured training regimen
              focused on resistance exercises. Our program adapts to your
              current fitness level and progressively increases intensity to
              maximize muscle growth.
            </p>

            <p>
              Our Muscle Building Program is designed to help you pack on lean
              muscle, increase strength, and sculpt your physique. Whether
              you're a beginner or an experienced lifter, our program provides
              the right balance of intense training, strategic nutrition, and
              expert coaching to maximize muscle growth.
            </p>

            <p style={{ fontSize: "30px", color: "#FFC107" }}>
              What You’ll Get
            </p>
            <p>
              ✅ Customized Strength Training Plans – Progressive overload
              workouts tailored to your fitness level
            </p>
            <p>
              ✅ Muscle-Building Nutrition Plans – High-protein meal guides to
              fuel growth and recovery
            </p>
            <p>
              {" "}
              Expert Coaching – Guidance from experienced trainers to ensure
              proper form and efficiency
            </p>
            <p>
              ✅ Progress Tracking & Adjustments – Regular assessments to
              optimize your results
            </p>
            <p>
              ✅ Recovery & Injury Prevention – Techniques to enhance muscle
              repair and longevity
            </p>

            <p style={{ fontSize: "30px", color: "#FFC107" }}>
              Who is This Program For?
            </p>
            <p>✔️ Anyone looking to build muscle and increase strength</p>
            <p>✔️ Athletes seeking improved performance and power</p>
            <p>
              ✔️ Individuals wanting a structured, science-based approach to
              muscle growth
            </p>
            <p>
              ✔️ Those committed to transforming their physique with effective
              training and nutrition
            </p>
            <p>
              💡 Stronger, Bigger, Better! Start your journey today and unleash
              your full potential. 💪🔥
            </p>
            <div
              className="btn"
              style={{
                backgroundColor: "#E4B802",
                width: "10%",
                borderRadius: "25px",
              }}
              onClick={() => navigate('/join-now')}
            >
              Join Now
            </div>
          </div>
        </div>
      <div className="container mt-5">
        <div className="row p-3" style={{ background: "#1B1B1B" }}>
          <p style={{ fontSize: "30px", color: "#FFC107" }}>
            Muscle Building Program
          </p>
          <p>
            <p style={{ fontSize: "30px", color: "#FFC107" }}>
              Get Stronger, Healthier, and More Energized!
            </p>
          </p>

          <p>
            Maintain overall health and fitness with our well-rounded program
            that balances cardio, strength, and flexibility. This plan is
            perfect for anyone looking to stay active and improve endurance
          </p>

          <p>
            Our General Fitness Program is designed for anyone looking to
            improve their overall health, strength, and endurance. Whether
            you’re just starting your fitness journey or looking to maintain an
            active lifestyle, this program provides a balanced approach to
            exercise, nutrition, and wellness to help you feel your best every
            day.
          </p>

          <p style={{ fontSize: "30px", color: "#FFC107" }}>What You’ll Get</p>
          <p>
            ✅ Full-Body Workouts – A mix of strength, cardio, and flexibility
            exercises for total fitness
          </p>
          <p>✅ Personalized Plans – Adapted to your fitness level and goals</p>
          <p>
            ✅ Expert Guidance – Professional trainers to keep you motivated and
            on track
          </p>
          <p>
            ✅ Nutrition Support – Healthy meal recommendations to fuel your
            body
          </p>
          <p>
            ✅ Progress Tracking – Regular assessments to measure improvements
          </p>
          <p>
            ✅ Injury Prevention & Recovery Tips – Techniques to stay strong and
            pain-free
          </p>

          <p style={{ fontSize: "30px", color: "#FFC107" }}>
            Who is This Program For?
          </p>
          <p>✔️ Beginners looking to start a consistent fitness routine</p>
          <p>✔️ Individuals aiming to boost energy, endurance, and strength</p>
          <p>
            ✔️ Those seeking a structured, sustainable approach to staying
            active
          </p>
          <p>✔️ Anyone wanting to improve overall health and well-being</p>
          <p>
            💡 Move Better, Feel Stronger, Live Healthier! Start your fitness
            journey today and make every workout count. 💪🔥
          </p>

          <div
            className="btn"
            style={{
              backgroundColor: "#E4B802",
              width: "10%",
              borderRadius: "25px",
            }}
            onClick={() => navigate('/join-now')}
          >
            Join Now
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Program;
