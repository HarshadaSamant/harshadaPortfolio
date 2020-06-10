import React, { Component, Fragment } from 'react';

class About extends Component {
    render() {
        return (
            <Fragment>
                <section id="about">
                    <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpeg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            {this.props.portfolioData.aboutDescription}
                        </p>
                        <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                            <span>{this.props.portfolioData.name}</span><br />
                            <span>{this.props.portfolioData.address}
                            </span><br />
                            <span><a href={this.props.portfolioData.mobHref}>{this.props.portfolioData.mobNumber}</a></span><br />
                            <span><a href={this.props.portfolioData.mailHref}>{this.props.portfolioData.mailId}</a></span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                            <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                            </p>
                        </div>
                        </div> {/* end row */}
                    </div> {/* end .main-col */}
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default About;