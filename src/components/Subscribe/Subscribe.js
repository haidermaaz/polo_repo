import './Subscribe.css';

const Subs = () => {
    return (

        <div className="container-fluid subs">
            <div className="subs-shed">
                <div className="row">
                    <h1>SUBSCRIBE</h1>
                    <form action="#">
                        <div className='d-flex inp-host'>
                            <input type="text" className='form-control' placeholder='Enter Your Email' />
                            <button type='submit'>
                                <i class="fa-sharp fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                        <span>Stay informed on our latest news!</span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Subs;