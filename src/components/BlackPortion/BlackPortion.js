import './BlackPortion.css'

function BlackPortion() {
    return (
        <div className=" black">
            <div className="container maxWidth">
                <div className="row">
                    <div className="col-lg-3" id='columns'>
                        <div className='info d-flex  mt-5 '>
                            <i className="fa-solid fa-calendar fa-2x  pt-2"></i>
                            <span>
                                <h6>Date</h6>
                                <p>28-31 OCT 2015</p>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3" id='columns'>
                        <div className='info d-flex justify-content-lg-center mt-5 '>
                            <i className="fa-solid fa-location-dot fa-2x  pt-2"></i>
                            <span>
                                <h6>Location</h6>
                                <p>Avda. Reina Maria Cristina, s/n 08004 Barcelona</p>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3" id='columns'>
                        <div className='info d-flex justify-content-lg-center mt-5 '>
                            <span>
                                <h6>Tickets</h6>
                                <p>1800 Tickets</p>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3" id='columns'>
                        <div className="info d-flex mt-5 " id='lastinfo'>
                            <i className="fa-solid fa-microphone fa-2x  pt-2"></i>
                            <span>
                                <h6>Speakers</h6>
                                <p>120 Speakers</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlackPortion;