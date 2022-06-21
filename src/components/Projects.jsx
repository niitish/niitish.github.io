const Projects = () => {
  return (
    <div className="container">
      <h2>PROJECTS</h2>
      <ul>
        <li className="col_list">
          <section>
            <h2>
              Weather Alert System: <i>SIH'22 (Ongoing)</i>
            </h2>
          </section>
          <ul className="row_list bg">
            <li>React</li>
            <li>Bootstrap</li>
            <li>Express</li>
            <li>Twitter API</li>
            <li>Twilio API</li>
            <li>Web Scraping</li>
          </ul>
          <p>
            Designed an Early Warning System to alert locals of a area about the
            predicted natural disaster. Used data scraping to get the weather
            data from IMD.
          </p>
          <ul className="row_list">
            <li>
              <a
                href="https://roomtemp.github.io"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer">
                Source
              </a>
            </li>
          </ul>
        </li>
        <li className="col_list">
          <section>
            <h2>CryptoMart</h2>
          </section>
          <ul className="row_list bg">
            <li>React</li>
            <li>Redux-toolkit</li>
            <li>Rapid API</li>
          </ul>
          <p>
            Created a web application to display the current price of crypto
            coins. Used Rapid API to get the data.
          </p>
          <ul className="row_list">
            <li>
              <a
                href="https://niitish.github.io/cryptomart"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
            </li>
            <li>
              <a
                href="https://github.com/niitish/cryptomart"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </li>
          </ul>
        </li>
        <li className="col_list">
          <section>
            <h2>MicroApps</h2>
          </section>
          <ul className="row_list bg">
            <li>React</li>
            <li>ContextAPI</li>
          </ul>
          <p>
            Basic web application with some micro-apps (currently a clock and a
            todo list).
          </p>
          <ul className="row_list">
            <li>
              <a
                href="https://niitish.github.io/microapps"
                target="_blank"
                rel="noreferrer"
              >
                Preview
              </a>
            </li>
            <li>
              <a
                href="https://github.com/niitish/microapps"
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            </li>
          </ul>
        </li>
        <p>
          Other projects can be found on my{" "}
          <a href="https://github.com/niitish" target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </ul>
    </div>
  );
};

export default Projects;
