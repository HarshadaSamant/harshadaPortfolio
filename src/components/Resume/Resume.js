import React, { Component, Fragment } from 'react';
import Skills from '../../PortfolioData/Skills';

class Resume extends Component {
    render() {
        return (
            <Fragment>
                <section id="resume">
                    {/* Education
                ----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>{this.props.portfolioData.collegeName}</h3>
                            <p className="info"> from {this.props.portfolioData.universityName} <span>•</span> {this.props.portfolioData.courseName} <em className="date">{this.props.portfolioData.collegeDuration}</em></p>
                            <p>
                                {this.props.portfolioData.collegeExperience}
                            </p>
                        </div>
                        </div> {/* item end */}
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>{this.props.portfolioData.jrCollegeName}</h3>
                            <p className="info"> from {this.props.portfolioData.jrUniversityName} <span>•</span> {this.props.portfolioData.stream} <em className="date">{this.props.portfolioData.jrCollegeDuration}</em></p>
                            <p>
                                {this.props.portfolioData.jrCollegeExperience}
                            </p>
                        </div>
                        </div> {/* item end */}
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>{this.props.portfolioData.schoolName}</h3>
                            <p className="info"> from {this.props.portfolioData.schoolBoard} <span>•</span> <em className="date">{this.props.portfolioData.schoolDuration}</em></p>
                            <p>
                                {this.props.portfolioData.schoolExperience}
                            </p>
                        </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
                ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>{this.props.portfolioData.work1}</h3>
                            <p className="info">{this.props.portfolioData.work1Role} <span>•</span> <em className="date">{this.props.portfolioData.work1Duration}</em></p>
                            <p>
                                {this.props.portfolioData.work1Description}
                            </p>
                        </div>
                        </div> {/* item end */}
                        <div className="row item">
                        <div className="twelve columns">
                            <h3>{this.props.portfolioData.work2}</h3>
                            <p className="info">{this.props.portfolioData.work2Role} <span>•</span> <em className="date">{this.props.portfolioData.work2Duration}</em></p>
                            <p>
                                {this.props.portfolioData.work2Description}
                            </p>
                        </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
                ----------------------------------------------- */}
                    <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>
                            <Skills/>
                        </p>
                        <div className="bars">
                        <ul className="skills">
                            <li><span className="bar-expand html-css" /><em>HTML5, CSS3</em></li>
                            <li><span className="bar-expand css-prepocessor" /><em>CSS PREPROCESSING</em></li>
                            <li><span className="bar-expand js-jq" /><em>JAVASCRIPT/JQUERY</em></li>
                            <li><span className="bar-expand frameworks" /><em>CSS AND JAVASCRIPT FRAMEWORKS</em></li>
                            <li><span className="bar-expand vc" /><em>VERSION CONTROL/GIT</em></li>
                            <li><span className="bar-expand responsive" /><em>RESPONSIVE DESIGN</em></li>
                            <li><span className="bar-expand browser-dev" /><em>BROWSER DEVELOPER TOOLS</em></li>
                        </ul>
                        </div>{/* end skill-bars */}
                    </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section>                
            </Fragment>
        )
    }
}

export default Resume;