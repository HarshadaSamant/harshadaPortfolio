import React, { Component, Fragment } from 'react';
import axios from '../../axios';
import Loader from '../../Loader/Loader';

class Contact extends Component {
    state = {
        name: '',
        message: '',
        loading: false,
        nameError: null,
        messageError: null,
        successMassage: null
    }

    contactDataHandler = (ev) => {
        ev.preventDefault();
        this.setState({loading: true});
        const contactData = {
            name: this.state.name,
            message: this.state.message
        };
        if(this.state.name === '') {
            this.setState({nameError: <span className="errorMsg">Please enter name</span>})
            this.setState({loading: false});
        } else if(this.state.message === '') {
            this.setState({messageError: <span className="errorMsg">Please enter message</span>})
            this.setState({loading: false});
        } else {
            axios.post('/contact.json', contactData)
            .then(response => {
                this.setState({loading: false, successMassage: <span className="successMsg">Your message has been sent successfully</span>});
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false, successMassage: <span className="errorMsg">Sorry, Failed to send your message</span>});
            });
        }
    }

    render() {

        let contactDataPost = null;
        if(this.state.loading) {
            contactDataPost = <Loader/>;
        }

        return (
            <Fragment>
                <section id="contact">
                    <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">
                            {this.props.portfolioData.thankYouNote}
                        </p>
                    </div>
                    </div>
                    <div className="row">
                    <div className="eight columns">
                        {/* form */}
                        <form id="contactForm">
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                <input type="text"  size={35} value={this.state.name} onChange={(event) => this.setState({name: event.target.value, nameError: null })}/>
                                {this.state.nameError}
                            </div>
                            <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea cols={50} rows={15} value={this.state.message} onChange={(event) => this.setState({message: event.target.value, messageError: null})}/>
                                {this.state.messageError}
                            </div>
                            <div>
                            <button className="send" onClick={this.contactDataHandler}>Submit</button>
                            <span>
                                {contactDataPost}
                                {this.state.successMassage}
                            </span>
                            </div>
                        </fieldset>
                        </form> {/* Form End */}
                    </div>
                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4>CONTACT DETAILS</h4>
                            <p className="address">
                                <span>{this.props.portfolioData.name}</span><br />
                                <span>{this.props.portfolioData.address}
                                </span><br />
                                <span><a href={this.props.portfolioData.mailHref}>{this.props.portfolioData.mailId}</a></span>
                            </p>
                        </div>
                        <h4>Let's connect</h4>
                        <div>
                            <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="harshada-samant"><a class="LI-simple-link" href='https://in.linkedin.com/in/harshada-samant?trk=profile-badge'>Harshada Samant</a></div>
                        </div>
                    </aside>
                    </div>
                </section>
                </Fragment>
        )
    }
}

export default Contact;