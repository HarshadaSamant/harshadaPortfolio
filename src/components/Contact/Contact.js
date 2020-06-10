import React, { Component, Fragment } from 'react';

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <section id="contact">
                    <div className="row section-head">
                    <div className="columns">
                        <p className="lead">
                            {this.props.portfolioData.thankYouNote}
                        </p>
                    </div>
                    <div className="widget widget_contact">
                            <h4>CONTACT DETAILS</h4>
                            <p className="address">
                                <span>{this.props.portfolioData.name}</span><br />
                                <span>{this.props.portfolioData.address}
                                </span><br />
                                <span>{this.props.portfolioData.mobNumber}</span><br />
                                <span>{this.props.portfolioData.mailId}</span>
                            </p>
                            <h4>Let's connect</h4>
                            <div>
                            <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="harshada-samant"><a class="LI-simple-link" href='https://in.linkedin.com/in/harshada-samant?trk=profile-badge'>Harshada Samant</a></div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Contact;