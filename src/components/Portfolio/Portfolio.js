import React, { Component, Fragment } from 'react';

class Portfolio extends Component {

    state = {
        workExamples: [
            { id: '1', name: "Burger Builder", src: "images/portfolio/burger.jpg", href: "#1", description: "ansns", detailLink: "https://github.com/HarshadaSamant/Burger-Builder-App" },
            { id: '2', name: "Electronic Bazar", src: "images/portfolio/electronicBazar.jpg", href: "#2", description: "ansns", detailLink: "https://github.com/HarshadaSamant/ElectronicsBazaar" },
            { id: '3', name: "LinkyPoint", src: "images/portfolio/linkypoint.jpg", href: "#3", description: "ansns", detailLink: "https://github.com/HarshadaSamant/LinkyPoint" },
            { id: '4', name: "Flipbook", src: "images/portfolio/flipbook.jpg", href: "#4", description: "ansns", detailLink: "https://github.com/HarshadaSamant/Flipbook" },
        ]
    }

    render() {
        return (
            <Fragment>
                <section id="portfolio">
                    <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        {/* portfolio-wrapper */}
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {this.state.workExamples.map((work, index ) => {
                            return (
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href={work.href} title>
                                            <img alt="" src={work.src} />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>{work.name}</h5>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus" /></div>
                                        </a>
                                    </div>
                                </div>
                            );
                        })};
                           
                        </div> {/* portfolio-wrapper end */}
                    </div> {/* twelve columns end */}
                        {/* Modal Popup
                        --------------------------------------------------------------- */}
                        
                        {this.state.workExamples.map((work, index ) => {
                            return (
                                <div id={work.id} className="popup-modal mfp-hide" key={work.id} >
                                    <img className="scale-with-grid" src={work.src} alt="" />
                                        <div className="description-box">
                                            <h4>{work.name}</h4>
                                            <p>
                                                {work.description}
                                            </p>
                                        </div>
                                    <div className="link-box">
                                        <a href={work.detailLink}>Details</a>
                                        <a className="popup-modal-dismiss">Close</a>
                                    </div>
                                </div>
                            )                      
                        })}
                    </div> {/* row End */}
                </section>
            </Fragment>
        )
    }
}

export default Portfolio;