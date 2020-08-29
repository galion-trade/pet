import React, {Component} from "react";
import "../App.css"

export default class Footer extends Component{
    render() {
        return (
            <footer className="footer">
                <div className='container'>
                    <div className="footer__body">

                        <div className="page-block footer__block flex-row-column">

                            <div className="page-block__column">
                                <div className="title page-block__title page-block__title_color_white">
                                    For questions <br/>
                                    and suggestions
                                </div>
                                <div className="footer__content-row flex-row">
                                    <img src="/img/icons/mail.png" alt="" className="footer__img"/>
                                        <span className="footer__text">email@shelter.com</span>
                                </div>
                                <div className="footer__row flex-content-row">
                                    <img src="/img/icons/phone.png" alt="" className="footer__img"/>
                                        <span className="footer__text">+ 375 (29) 729-99-10</span>
                                </div>

                            </div>


                            <div className="page-block__column ">
                                <div className="title page-block__title page-block__title_color_white">We are
                                    waiting <br/>
                                    for your visit
                                </div>
                                <div className="footer__content-row flex-row">
                                    <img src="/img/icons/marker.png" alt="" className="footer__img"/>
			<span className="footer__text">Boston, Central Street, 1st</span>
                                </div>
                                <div className="footer__content-row flex-row">
                                    <img src="/img/icons/marker.png" alt="" className="footer__img"/>
                                        <span className="footer__text">London, South Park, 18st</span>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </footer>
        );
    }
}
