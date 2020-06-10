import React, { Component, Fragment } from 'react';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer>
                    <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="https://www.linkedin.com/in/harshada-samant/"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="https://github.com/HarshadaSamant"><i className="fa fa-github" /></a></li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default Footer;