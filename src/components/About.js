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
                <p>
                  <a href={resumeData.resumeUrl}>📎 resume.pdf</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
