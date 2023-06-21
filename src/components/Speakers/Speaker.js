import './Speaker.css';
import SpCard from './SpCard/SpCard';


const Speaker = () => {
    return (
        <div className="containe-fluid speaker">
            <div className="container maxWidth">
                <h2>SPEAKERS</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                <div className="row justify-content-around">
                    {/*-------------card 1-----------*/}
                    <SpCard image="https://inspirothemes.com/polo/images/team/6.jpg" heading="Alea Smith" heading2="Software Developer" para="Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet" />
                    {/*-------------card 2-----------*/}
                    <SpCard image="https://inspirothemes.com/polo/images/team/7.jpg" heading="Ariol Doe" heading2="Software Developer" para="Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet" />
                    {/*-------------card 3-----------*/}
                    <SpCard className="mt-md-5" image="https://inspirothemes.com/polo/images/team/8.jpg" heading="Emma Rose" heading2="Software Developer" para="Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet" />
                    {/*-------------card 4-----------*/}
                    <SpCard className="mt-md-5" image="https://inspirothemes.com/polo/images/team/9.jpg" heading="Victor Loda" heading2="Software Developer" para="Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet" />
                </div>
            </div>
        </div>
    )
}

export default Speaker;