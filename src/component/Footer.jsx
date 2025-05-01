function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light py-5">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-3">
              <h1 style={{ color: "yellow" }}>
                Fitness <span className="text-light"> Fuel </span>
              </h1>
              <div className="d-flex">
                <button className="btn">
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="bi bi-instagram fs-2 text-light"></i>
                  </a>
                </button>
                <button className="btn">
                  <a href="https://x.com/" target="_blank">
                    {" "}
                    <i className="bi bi-twitter-x fs-2 text-light"></i>
                  </a>
                </button>
                <button className="btn">
                  <a href="https://www.facebook.com/" target="_blank">
                    {" "}
                    <i className="bi bi-facebook fs-2 text-light"></i>
                  </a>
                </button>
                <button className="btn" target="_blank">
                  <a href="https://www.linkedin.com/login">
                    <i className="bi bi-linkedin fs-2 text-light"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="col-2">
              <h3 style={{ color: "yellow" }}>Quick Link</h3>
              <ul style={{ lineHeight: "40px" }}>
                <li>Home</li>
                <li>Programs</li>
                <li>trainers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="col-2">
              <h3 style={{ color: "yellow" }}>Resources</h3>
              <ul style={{ lineHeight: "40px" }}>
                <li>Fitnss tips</li>
                <li>nutrition guides</li>
                <li>workout plans</li>
                <li>sucess stories</li>
                <li>FAQS</li>
              </ul>
            </div>
            <div className="col-2">
              <h3 style={{ color: "yellow" }}>Join Our Team</h3>
              <ul style={{ lineHeight: "40px" }}>
                <li>job openings</li>
                <li>internships</li>
                <li>trainer applications</li>
              </ul>
            </div>
            <div className="col-2">
              <h3 style={{ color: "yellow" }}>Legal</h3>
              <ul style={{ lineHeight: "40px" }}>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">123 Fit Street, Wellness City, 56789</div>
            <div className="col-4">support@primefit.com</div>
            <div className="col-4">+123 456 7890</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
