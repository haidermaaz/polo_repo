import './register.css';

const REGISTER = () => {
    return (
        <div className="event-register">
            <h2 >Event <br /> Register</h2>
            <p>Create amam ipsum dolor sit amet, Beautiful nature, and rare feathers!.</p>
            <form action="#">
                <input class="form-control" type="text" placeholder='Your Name*' />
                <input class="form-control" type="text" placeholder='Your Phone Number*' />
                <input class="form-control" type="text" placeholder='Your Email' />

                <select name="ticket" id="tkt">
                    <option value="type" selected>Ticket Type</option>
                    <option value="vip">Vip</option>
                    <option value="elite">Elite</option>
                    <option value="standard">Standard</option>

                </select>

                <select name="pass" id="pass">
                    <option value="day-pass" selected>Day Pass</option>
                    <option value="vip">1</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <button id='btn'><i class="fa-sharp fa-solid fa-paper-plane"></i> APPLY NOW</button>
                <div className="para-host">
                <span className="note">Note: </span>
                    <span className="para">
                         Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                    </span>
                </div>
            </form>
        </div>)
}


export default REGISTER;