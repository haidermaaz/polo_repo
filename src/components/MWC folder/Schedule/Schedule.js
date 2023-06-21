import './Schedule.css';

const Schedule = () => {
  return (
    <div className="container-fluid schedule">
      <h2>Event Schedule</h2>
      <h6>Create amam ipsum dolor sit amet, Beautiful nature, and rare feathers</h6>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {/*--------------tab_link 1--------------*/}
          <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#tab-one" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              <span class="day">Day 01</span>
              <p class="date">17.10.2015</p>
          </button>
        </li>
        {/*--------------tab_link 2--------------*/}
          <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#tab-two" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
              <span class="day">Day 02</span>
              <p class="date">18.10.2015</p>
          </button>
        </li>
        {/*--------------tab_link 3--------------*/}
          <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#tab-three" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
              <span class="day">Day 03</span>
              <p class="date">19.10.2015</p>
          </button>
        </li>
        {/*--------------tab_link 4--------------*/}
          <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#tab-four" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
              <span class="day">Day 04</span>
              <p class="date">20.10.2015</p>
          </button>
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        {/* ---------------tab_Content 1------------------- */}
        <div class="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="pills-home-tab">
          <span class="clock"><i class="fa-regular fa-clock"></i> 09:00 - 10:45</span>
          <h5 class="session-by">Juna Doe</h5>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi</p>
          <hr />
          <span class="clock"><i class="fa-regular fa-clock"></i> 11:00 - 11:45</span>
          <h5 class="session-by">Alea Grande</h5>
          <p>Et harum quidem rerum facilis est et expedita distinctio. At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis</p>
          <hr />
          <span class="clock"><i class="fa-regular fa-clock"></i> 08:00 - 08:45</span>
          <h5 class="session-by">John Smith</h5>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
        {/* ---------------tab_Content 2------------------- */}
        <div class="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="pills-profile-tab">
          <span class="clock"><i class="fa-regular fa-clock"></i> 11:00 - 11:45</span>
          <h5 class="session-by">Alea Grande</h5>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi</p>
          <hr />
          <span class="clock"><i class="fa-regular fa-clock"></i> 08:00 - 08:45</span>
          <h5 class="session-by">John Smith</h5>
          <p>Et harum quidem rerum facilis est et expedita distinctio. At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis</p>
          <hr />
          <span class="clock"><i class="fa-regular fa-clock"></i> 09:00 - 10:45</span>
          <h5 class="session-by">Juna Doe</h5>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
        {/* ---------------tab_Content 3------------------- */}
        <div class="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="pills-contact-tab">
          <span class="clock"><i class="fa-regular fa-clock"></i> 08:00 - 08:45</span>
          <h5 class="session-by">John Smith</h5>
          <p>Et harum quidem rerum facilis est et expedita distinctio. At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis</p>
          <hr />
          <span class="clock"><i class="fa-regular fa-clock"></i> 11:00 - 11:45</span>
          <h5 class="session-by">Alea Grande</h5>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi</p>
          <hr />
          <span class="clock"><i class="fa-regular fa-clock"></i> 08:00 - 08:45</span>
          <h5 class="session-by">John Smith</h5>
          <p>Et harum quidem rerum facilis est et expedita distinctio. At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis</p>
          <hr />
          <span class="clock"><i class="fa-regular fa-clock"></i> 09:00 - 10:45</span>
          <h5 class="session-by">Juna Doe</h5>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
        {/* ---------------tab_Content 4------------------- */}
        <div class="tab-pane fade" id="tab-four" role="tabpanel" aria-labelledby="pills-contact-tab">
          <span class="clock"><i class="fa-regular fa-clock"></i> 11:00 - 11:45</span>
          <h5 class="session-by">Alea Grande</h5>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi</p>
          <hr />
          <span class="clock"><i class="fa-regular fa-clock"></i> 08:00 - 08:45</span>
          <h5 class="session-by">John Smith</h5>
          <p>Et harum quidem rerum facilis est et expedita distinctio. At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis</p>
          <hr />
          <span class="clock"><i class="fa-regular fa-clock"></i> 09:00 - 10:45</span>
          <h5 class="session-by">Juna Doe</h5>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
      </div>
    </div >
  )
}

export default Schedule;