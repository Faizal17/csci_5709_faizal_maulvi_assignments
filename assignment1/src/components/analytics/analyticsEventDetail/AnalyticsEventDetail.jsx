import React, { Component } from 'react';

class AnalyticsEventDetail extends Component {
    state = {  }
    render() {
        return (<React.Fragment>
            <h3 className='text-center py-2'>Event Name</h3>
            <div className='eventDetails row pt-2'>
                <div className="col-md-7"><img className='w-100' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU27aTt-oAnv0u2YzYPH88lGABKFtPInHIhA&usqp=CAU"}></img></div>
                <div className="col-md-5 my-auto">
                    <div className="d-flex flex-column justify-content-start text-start">
                        <span className="mb-1"><b>Event created date:</b> 05/25/23</span>
                        <span className="mb-1"><b>Event Date:</b> 05/31/23</span>
                        <span className="mb-1"><b>No of people viewed:</b> 1000</span>
                        <span className="mb-1"><b>No of people joined:</b> 205</span>
                        <span className="mb-1"><b>Event type:</b> Sports</span>
                        <span className="mb-1"><b>Tags:</b> Badminton, Sports, Indoors, College</span>
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}

export default AnalyticsEventDetail;
