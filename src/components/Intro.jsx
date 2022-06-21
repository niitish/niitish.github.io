import { Profile, Twitter, LinkedIn, Mail, Github } from "./images";

const Intro = () => {
  return (
    <div className="intro">
      <img src={Profile} alt="profile_photo" className="profile_img"></img>
      <div className="profile_name">
        <span>NITISH</span>
        <span>KUSHWAHA</span>
      </div>
      <p>I’m available for freelance and intern positions.</p>
      <div className="socials">
        <a href="https://github.com/niitish" target="_blank" rel="noreferrer">
          <img src={Github} alt="github" />
        </a>
        <a href="https://twitter.com/niitishh" target="_blank" rel="noreferrer">
          <img src={Twitter} alt="twitter" />
        </a>
        <a
          href="https://linkedin.com/in/nitish-kk"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="linkedin" />
        </a>
        <a href="mailto://2f08wxryn@mozmail.com">
          <img src={Mail} alt="mail" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
