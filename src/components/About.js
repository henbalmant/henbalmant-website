import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.png" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Languages and Tools</h2>
                <ul className="social-links">
                  {resumeData.languagesAndTools &&
                    resumeData.languagesAndTools.map((item) => {
                      return (
                        <li>
                          <img
                            src={item.url}
                            alt={item.name}
                            width="26px"
                            align="left"
                            className="languageImg"
                          />
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="columns contact-details">
                <h2>Resume</h2>
                <a href={resumeData.resumeUrl} download="resume.pdf">
                  📎 resume.pdf
                </a>
              </div>
            </div>

            <section id="about-contact">
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact</h2>
                  <p>
                    <a href={resumeData.emailLink}>{resumeData.email}</a> <br />
                    <a
                      href={resumeData.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resumeData.phone}
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
