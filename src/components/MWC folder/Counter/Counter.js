import './Counter.css';
import Digit from './Digit/Digit';

const Counter = () => {
    return (
        <div className="row">
            <div className="d-flex justify-content-center divider">
                <div className='l1'> </div> <span className='text'> EVENT INTO NUMBERS </span> <div className='l2'> </div>
            </div>
            <div className="col-lg-3 text-center">
                <Digit start={0} end={12416} />
                <p>LINES OF CODE</p>
            </div>
            <div className="col-lg-3 text-center">
                <Digit start={0} end={365} />
                <p>CUPS OF COFFEE</p>
            </div>
            <div className="col-lg-3 text-center">
                <Digit start={0} end={114} />
                <p>FINSHED PROJECTS</p>
            </div>
            <div className="col-lg-3 text-center">
                <Digit start={0} end={14825} />
                <p>SATISFIED CLIENTS</p>
            </div>
        </div>
    )
}
export default Counter;