import React from "react";
import BookingLogo from "../../Assets/media/booking.svg";
import AgodaLogo from "../../Assets/media/agoda.svg";
import ExpediaLogo from "../../Assets/media/expedia.svg";
import HotelsLogo from "../../Assets/media/hotels.svg";

function Footer() {
    return (
        <footer className="container border">
            <div className="row valign-wrapper center-align">
                <img src={ExpediaLogo}  alt="Expedia Logo" className="col s2"></img>
                <img src={BookingLogo} style={{paddingLeft:5 }}alt="Booking.com Logo" className="col s2"></img>
                <img src={HotelsLogo} style={{paddingLeft:5 }}alt="Hotels.com Logo" className="col s2"></img>
                <img src={AgodaLogo} style={{paddingLeft:5 }}alt="agoda Logo" height={30} className="col s2"></img>
            </div>
        </footer>
    );
}

export default Footer;
