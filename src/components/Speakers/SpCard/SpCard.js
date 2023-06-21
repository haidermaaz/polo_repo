import './SpCard.css';

const SpCard = (props) => {
    return (
        <div className="col-md-3 spPerson">
            <div className="pic">
                <img src={props.image} height="100%" width="100%"/>
            </div>
            <div className="detail">
                <h5>{props.heading}</h5>
                <h6>{props.heading2}</h6>
                <p>{props.para}</p>

                <div className="icons">
                    <a className="circle">
                        <i class="fa-brands fa-facebook-f" id='ico'></i>
                        <span id='ss-media'>Facebook</span>
                    </a>
                    <a className="circle">
                        <i class="fa-brands fa-twitter" id='ico'></i>
                        <span id='ss-media'>Twitter</span>
                    </a>
                    <a className="circle">
                        <i class="fa-brands fa-instagram" id='ico'></i>
                        <span id='ss-media'>Instagram</span>
                    </a>
                    <a className="circle">
                        <i class="fa-regular fa-envelope" id='ico'></i>
                        <span id='ss-media'>Envelope</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SpCard;