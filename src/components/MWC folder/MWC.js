import './MWC.css';
import Rgs from './Register/register';
import Count from './Counter/Counter';
import Schedule from './Schedule/Schedule';


const MWC = () => {
    return (
        <>
        <div className="MWC">
            <div className="container maxWidth">
                <div className="row">
                    <div className="col-lg-8">
                            <h2 className='text-center'>MWC EVENT</h2>
                            <h6 className='text-center'>Create amam ipsum dolor sit amet, Beautiful nature, and rare feathers!.</h6>
                        <p>
                            The most happiest time of the day!. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.</p>
                        <p>
                            Ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor. Morbi sagittis, sem quis lacinia faucibus.</p>
                            <Count/>
                    </div>
                    <div className="col-lg-4">
                        <Rgs />
                    </div>
                </div>
                <Schedule/>
            </div>
        </div>
        </>
    )
}

export default MWC;