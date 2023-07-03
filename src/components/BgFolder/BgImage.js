import './BgImage.css';
import Btn from '../Button/Button';
import Navbar from './NavFolder/Navbar';

window.addEventListener('scroll', ()=>{
    let navbar = document.getElementById("stky-nav");
    if(window.pageYOffset >= 380){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky')
    }
});
const BgImage = () => {
    return (
        <div className="bg">
            <div className="shed">  
                <div className="mainnav" id='stky-nav'>
                    <div className="container maxWidth">
                        <Navbar />
                    </div>
                </div>
                <div className="container maxWidth">
                    {/*------------banner--------------*/}
                    <div className="banner">
                        <h1>MWC EVENT</h1>
                        <h2>WILL BE OPEN IN:</h2>
                        <div className="boxes">
                            <div className="box">
                                <span className='count'>0</span>
                                <div className="line"></div>
                                <span>Days</span>
                            </div>
                            <div className="box">
                                <span className='count'>00</span>
                                <div className="line"></div>
                                <span>Hours</span>
                            </div>
                            <div className="box">
                                <span className='count'>00</span>
                                <div className="line"></div>
                                <span>Minutes</span>
                            </div>
                            <div className="box">
                                <span className='count'>00</span>
                                <div className="line"></div>
                                <span>Seconds</span>
                            </div>
                        </div>
                        <div className="tbtn-host">
                            <p className='m-t-40'>Mobile World Congress (MWC) is the world’s largest annual gathering for the mobile industry, organised by the GSMA, and held in the Mobile World Capital: Barcelona, Spain.</p>
                            <Btn text="Apply Now"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BgImage; 