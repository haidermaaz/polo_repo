import './News.css';
import NsCard from './NsCard/NsCard';

const News = ()=>{
    return(
        <div className="container-fluid news">
            <div className="container maxWidth">
                <h1>LATEST NEWS</h1>
                <h6>Our awesome clients we've had the pleasure to work with!</h6>
                    <NsCard/>
            </div>
        </div>
    )
}

export default News;