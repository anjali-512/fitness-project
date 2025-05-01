import "../static/Home.css";
import heroimg from "../assets/heroimg.jpeg";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpeg";
import slidee1 from "../assets/slidee1.jpg";
import slide2 from "../assets/slide2.jpg";
import Training1 from "../assets/Training1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
        <div className="section-img" style={{ position: "relative"}}>
          <div className="hero-img" style={{ position: "absolute" }}>
            {/* swiper start */}
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={heroimg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slidee1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Training1} alt="" />
              </SwiperSlide>
              {/* <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide> */}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
            {/* swiper end */}
          </div>
          {/* <img className="hero-img" src={heroimg} alt="" /> */}
          <div
            className="text"
            style={{ position: "absolute", top: 0, zIndex: 999, width: "100%" }}
          >
            <h1>
              Transform Your <br /> Body Elevate Your <br /> Mind
            </h1>
            <p>
              Achieve your fitness goals with expert guidance and <br />
              personalized plans.
            </p>
          </div>
        </div>
      <div className="main bg-dark" style={{marginTop : "0px", overflow : "hidden"}}>
        

        <div className="container" style={{ marginTop : '950px'}}> 
          <div className="row d-flex justify-content-between text-center">
            <h1>Programs for You</h1>
            <p>Find the perfect fitness plan, tailored to your needs</p>
            <div className="card p-3" style={{ width: "25rem" }}>
              <div className="card-body">
                <h5 className="card-title">Weight Loss Program</h5>
                <p className="card-text">
                  Our weight loss program combines high-intensity workouts with
                  targeted nutrition plans to help you burn fat efficiently.
                  Whether you're just starting or have been working out for a
                  while.
                </p>
                <a href="#" className="btn btn-warning">
                  join now
                </a>
              </div>
            </div>
            <div className="card p-3" style={{ width: "25rem" }}>
              <div className="card-body">
                <h5 className="card-title">Muscle Building Program</h5>
                <p className="card-text">
                  Build strength and muscle through a structured training
                  regimen focused on resistance exercises. Our program adapts to
                  your current fitness level and progressively increases
                  intensity to maximize muscle growth.
                </p>
                <a href="#" className="btn btn-warning">
                  join now
                </a>
              </div>
            </div>
            <div className="card p-3" style={{ width: "25rem" }}>
              <div className="card-body">
                <h5 className="card-title">General Fitness Program</h5>
                <p className="card-text">
                  Maintain overall health and fitness with our well-rounded
                  program that balances cardio, strength, and flexibility. This
                  plan is perfect for anyone looking to stay active and improve
                  endurance.
                </p>
                <a href="#" className="btn btn-warning">
                  join now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-5">
            <h1 style={{ textAlign: "center" }}>Meet Our Trainers</h1>
            <div className="col-6">
              <img src={home1} alt="" style={{ height: "400px" }} />
            </div>
            <div className="col-6">
              <p>Expert coaches to guide and support you</p>
              <p>
                Our team of certified personal trainers is dedicated to helping
                you achieve your fitness goals. Each trainer specializes in
                different areas, from strength training to flexibility and
                conditioning. With their expertise, you’ll get personalized
                coaching, motivation, and support throughout your fitness
                journey.
              </p>

              <h2>Certified Trainers</h2>
              <p>
                All our trainers hold nationally recognized certifications and
                have years of experience in the fitness industry.
              </p>

              <h2>Personalized Support</h2>
              <p>
                Our trainer will work closely with you to monitor your progress,
                adjust your workout plan as needed.
              </p>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row mt-5">
            <h2>Client Stories</h2>
            <div className="col-6">
              <img
                src={home2}
                alt=""
                style={{ height: "400px", width: "600px" }}
              />
            </div>
            <div className="col-6">
              <p>See real results from our members</p>
              <p>
                "I’ve always struggled with staying consistent, but Prime Fit
                changed that for me. With their expert guidance and personalized
                workout plan, I’ve lost 20 pounds and built muscle in just 3
                months. I feel stronger, more confident, and more energetic than
                ever before!"
              </p>
            </div>
          </div>
        </div>

        <div
          className="container-fluid  text-light py-5"
          style={{ backgroundColor: "black" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-7 m-auto">
                <h1 className="text-center">FAQ</h1>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item bg-dark my-3">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed bg-dark text-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        How do I choose the right program?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body text-light">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the first
                        item's accordion body.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed bg-dark text-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Do I need special equipment?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body bg-dark text-light">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second
                        item's accordion body. Let's imagine this being filled
                        with some actual content.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header my-3"
                      id="flush-headingThree"
                    >
                      <button
                        className="accordion-button collapsed bg-dark text-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        How long until I see results?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body text-light bg-dark">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item's accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space
                        to make it look, at least at first glance, a bit more
                        representative of how this would look in a real-world
                        application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
