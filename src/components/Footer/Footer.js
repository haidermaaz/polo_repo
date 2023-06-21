import './Footer.css';
import Copyright from './Copyright/Copyright';
import Btn from '../Button/Button';

const Footer = () => {
    return (
        <footer>
            <div className="container maxWidth">
                <div className="row">
                    <div className="col-lg-4 left-half">
                        <h6>POLO HTML5 TEMPLATE</h6>
                        <p className='mb-5'>Built with love in Fort Worth, Texas, USA All rights reserved. Copyright © 2019. INSPIRO.</p>
                        <Btn text="PURCHASE NOW"/>
                    </div>
                    <div className="col-lg-7 links">
                        <div className="row">
                            <div className="col-md-3">
                                <h6>Discover</h6>
                                <ul>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Layouts</a></li>
                                    <li><a href="#">Corporate</a></li>
                                    <li><a href="#">Updates</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Customers</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h6>Features</h6>
                                <ul>
                                    <li><a href="#">Layouts</a></li>
                                    <li><a href="#">Headers</a></li>
                                    <li><a href="#">Widgets</a></li>
                                    <li><a href="#">Footer</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h6>Pages</h6>
                                <ul>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Shop</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h6>SUPPORT</h6>
                                <ul>
                                    <li><a href="#">Help Us</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright/>
        </footer>
    )
}

export default Footer;