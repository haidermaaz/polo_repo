import './Buy.css';
import Bttn from '../Button/Button';

const Buy = () => {
    return (
        <div className='buy'>
            <div className="container maxWidth">
                <div className="row">
                    <div className="col-md-10">
                        <h3>Ready to buy POLO Template?</h3>
                        <p>This is a simple hero unit, a simple call-to-action-style component for calling extra attention to featured content.</p>
                    </div>
                    <div className="col-md-2 btn-host">
                        <Bttn text="BUY POLO"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy;