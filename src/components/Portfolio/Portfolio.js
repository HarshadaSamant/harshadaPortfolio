import React, { Component, Fragment } from 'react';

class Portfolio extends Component {

    state = {
        workExamples: [
            { id: '1', 
                name: "Burger Builder", 
                src: "images/portfolio/burger.jpg", 
                href: "#1", 
                description: "Built with react for frontend and firebase for backend and axios for api calling. Developed using react concepts like stateful and stateless components, state management, lifecycle hooks and various interesting features.", 
                detailLink: "https://github.com/HarshadaSamant/Burger-Builder-App" 
            },
            { id: '2', 
                name: "Electronic Bazar", 
                src: "images/portfolio/electronicBazar.jpg", 
                href: "#2", 
                description: "Static responsive website using HTML5, css preprocessor sass and jQuery. Used owlcarousel package for carousel animation and selectJs the jQuery replacement for boring html select boxes.", 
                detailLink: "https://github.com/HarshadaSamant/ElectronicsBazaar" 
            },
            { id: '3', 
                name: "LinkyPoint", 
                src: "images/portfolio/linkypoint.jpg", 
                href: "#3", 
                description: "Static responsive website using HTML5, css preprocessor sass and jQuery. Used owlcarousel package for carousel animation and selectJs the jQuery replacement for boring html select boxes and various css animations.", 
                detailLink: "https://github.com/HarshadaSamant/LinkyPoint" 
            },
            { id: '4', 
                name: "buy-products-app", 
                src: "images/portfolio/buyProducts.jpg", 
                href: "#4", 
                description: "Developed in angular 8. User can see details of the selected product as well as user can add product to the cart and view cart", 
                detailLink: "https://github.com/HarshadaSamant/buy-products-app" 
            },
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
                                            <div className="workImage"><img alt="Work sample" src={work.src} /></div>
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
                                    <div className="workImage">
                                        <img className="scale-with-grid" src={work.src} alt="work sample" />
                                    </div>
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