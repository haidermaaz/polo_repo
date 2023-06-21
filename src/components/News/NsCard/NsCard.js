import './NsCard.css';
import LfBtn from './LfBtn/LfBtn'

const NsCard = () => {
    const Nsarr = [
        {
            image: "https://inspirothemes.com/polo/images/blog/12.jpg",
            lfbtn: "Lifestyle",
            date: "jan21,2017",
            comments: "33 Comments",
            heading: "Standard post with a single image",
            para: "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.",
            btn: "READ MORE ",
            icon: "fa-solid fa-arrow-right",
        },
        {
            image: "https://inspirothemes.com/polo/images/blog/17.jpg",
            lfbtn: "Science",
            date: "jan21,2017",
            comments: "33 Comments",
            heading: "Standard post with a single image",
            para: "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.",
            btn: "READ MORE ",
            icon: "fa-solid fa-arrow-right",
        },
        {
            image: "https://inspirothemes.com/polo/images/blog/18.jpg",
            lfbtn: "Science",
            date: "jan21,2017",
            comments: "33 Comments",
            heading: "Standard post with a single image",
            para: "Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.",
            btn: "READ MORE ",
            icon: "fa-solid fa-arrow-right",
        }
    ]

    return (
        <div className="row Ns-row">
            {
                Nsarr.map((item) => {
                    return (
                        <>
                            <div className="col-md-4 nscard">
                                <div className="pic">
                                    <LfBtn text={item.lfbtn}/>
                                    <img src={item.image} alt="no" height="100%" width="100%" />
                                </div>
                                <div className="details">
                                    <span>{item.date}</span>
                                    <span>{item.comments}</span>
                                    <h2>{item.heading}</h2>
                                    <p>{item.para}</p>
                                    <button className='btn-more'><a href="#">READ MORE <i class="fa-solid fa-arrow-right"></i></a></button>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default NsCard;