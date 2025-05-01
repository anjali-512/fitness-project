import training5 from "../assets/training5.jpg";
import training4 from "../assets/training4.jpg";
import tra from "../assets/tra.jpg";
import training6 from "../assets/training6.jpg";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <>
      <div className="main" style={{ backgroundColor: "black" }}>
        <div className="section-img">
          <img className="programimage3" src={training5} alt="" style={{height:"820px",width:"1680px"}} />
          <div className="text-center program-text">
            <h1>
              Client Success Stories:
              <br /> Real People, Real Results
            </h1>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <p style={{ fontSize: "30px", color: "#FFFFFF" }}>
                Client Stories
              </p>
              <p>See real results from our members</p>

              <p
                style={{
                  backgroundColor: "#292929",
                  padding: "15px",
                  width: "80%",
                }}
              >
                "I’ve always struggled with staying consistent, but Prime Fit
                changed that for me. With their expert guidance and personalized
                workout plan, I’ve lost 20 pounds and built muscle in just 3
                months. I feel stronger, more confident, and more energetic than
                ever before!"
              </p>
            </div>
            <div className="col-6">
              <img
                src={training4}
                alt=""
                style={{ height: "100%", width: "100%", borderRadius: "25px" }}
              />
            </div>
          </div>
          <div className="container">
            <p>
              At [Your Gym Name], we believe that every fitness journey is
              unique, and nothing motivates us more than seeing our members
              achieve their goals. Whether it’s weight loss, muscle building,
              increased endurance, or overall wellness, our clients inspire us
              every day with their dedication and transformation. Here are some
              incredible stories from our community—real people who put in the
              work and saw amazing results!
            </p>
          </div>
          <div className="container mt-5">
            <p style={{ fontSize: "30px", color: "#FFFFFF" }}>
              🏆 Sarah’s 50-Pound Weight Loss Journey
            </p>
            <p>
              "I struggled with my weight for years and never thought I’d find a
              program that worked for me. With the help of my trainer, <br />
              I learned how to exercise effectively and fuel my body with the
              right nutrition. Now, 50 pounds lighter, I feel stronger,
              healthier,
              <br />
              and more confident than ever!"
            </p>

            <div className="row">
              <div className="col-7">
                <p>✅ Training Focus: Weight Loss & Strength Training</p>
                <p>✅ Duration: 8 Months</p>
                <p>✅ Trainer: [David Brown]</p>
                <p>📅 Ready to start your transformation?</p>
                <Link
                  to="/join-now"
                  className="btn"
                  style={{
                    backgroundColor: "#E4B802",
                    width: "25%",
                    borderRadius: "25px",
                  }}
                >
                  Register Now
                </Link>
                <div className="star-icon text-warning mt-3">
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                </div>
              </div>
              <div className="col-5 text-end">
                <img
                  src={tra}
                  alt=""
                  style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-7">
                <p style={{ fontSize: "30px", color: "#FFFFFF" }}>
                  💪 Mark’s Strength & Muscle Gain Transformation
                </p>
                <p>
                  "I always wanted to build muscle but didn’t know where to
                  start. With the expert guidance of my trainer, I gained 15
                  pounds of lean muscle and improved my strength dramatically.
                  The personalized plan made all the difference!"
                </p>
                <p>✅ Training Focus: Muscle Building & Strength Training</p>
                <p>✅ Duration: 6 Months</p>
                <p>✅ Trainer: [Michael Lee]</p>
                <p>📅 Want to build muscle? </p>

                <Link
                  to="/join-now"
                  className="btn"
                  style={{
                    backgroundColor: "#E4B802",
                    width: "25%",
                    borderRadius: "25px",
                  }}
                >
                  Register Now
                </Link>
                <div className="star-icon text-warning mt-3">
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                </div>
              </div>
              <div className="col-5 text-end">
                <img
                  src={training5}
                  alt=""
                  style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="row mt-5">
                <div className="col-7">
                  <p style={{ fontSize: "30px", color: "#FFFFFF" }}>
                    🧘 Emily’s Journey to Flexibility & Pain-Free Movement
                  </p>
                  <p>
                    "As someone who sat at a desk all day, I struggled with
                    stiffness and back pain. Working with my yoga and mobility
                    coach helped me regain flexibility, reduce pain,and feel
                    more energized every day!
                  </p>
                  <p>
                    ✅ Training Focus: Mobility, Flexibility & Injury Prevention
                  </p>
                  <p>✅ Duration: 4 Months</p>
                  <p>✅ Trainer: [Laura Anderson]</p>
                  <p>📅 Want to move better?</p>

                  <Link
                    to="/join-now"
                    className="btn"
                    style={{
                      backgroundColor: "#E4B802",
                      width: "25%",
                      borderRadius: "25px",
                    }}
                  >
                    Register Now
                  </Link>
                  <div className="star-icon text-warning mt-3">
                    <i className="bi bi-star-fill me-2"></i>
                    <i className="bi bi-star-fill me-2"></i>
                    <i className="bi bi-star-fill me-2"></i>
                    <i className="bi bi-star-fill me-2"></i>
                    <i className="bi bi-star-fill me-2"></i>
                  </div>
                </div>
                <div className="col-5 text-end">
                  <img
                    src={training6}
                    alt=""
                    style={{
                      height: "300px",
                      width: "300px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
              <div className="row mt-5">
                <p style={{ fontSize: "30px", color: "#E4B802" }}>
                  Your Story Could Be Next!
                </p>
                <p>
                  These success stories prove that with the right guidance,
                  consistency, and dedication, anything is possible! No matter
                  where you are in your fitness journey, our trainers are here
                  to help you reach your goals
                </p>
                <p style={{ fontSize: "30px", color: "#FFFFFF" }}>
                  📢 Start your transformation today!
                </p>

                <Link
                  to="/join-now"
                  className="btn"
                  style={{
                    backgroundColor: "#E4B802",
                    width: "25%",
                    borderRadius: "25px",
                  }}
                >
                  Register Now
                </Link>
                <div className="star-icon text-warning mt-3">
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                  <i className="bi bi-star-fill me-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;
