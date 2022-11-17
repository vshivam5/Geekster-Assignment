import React, { Fragment } from "react";
import Room from "../../Pages/RoomPage";

function Main() {
    return (
        <Fragment>
            <div className="card" style={{ padding: "10px 10px", margin: "0px 30px", borderRadius: "20px" }}>
                <form className="" style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems:"center", marginBottom:"0.5em"}} className="border-1">
                        <label htmlFor="cityInput">
                            <i className="material-icons">add_location</i>
                        </label>
                        <input type={"search"} placeholder="Type city, place name or city name" className="border-1" name="cityInput">
                        </input>
                    </div>
                    <div style={{display:"flex"}} className="border-1">
                        <input className="border-1" type={"date"} name="StartDateInput"></input>
                        <span >|</span>
                        <input className="border-1" type={"date"} name="EndDateInput"></input>
                    </div>
                    <a className="wave-effect wave-light modal-trigger" href="#modal1"> <i className="material-icons">group</i>
                    </a>
                    <button id = "btn" className="btn waves-ripple" style={{ borderRadius: "15px", backgroundColor: "DodgerBlue"}}>Search</button>
                </form>
            </div>
            <div id="modal1" className="modal modal-content">
                <div className="modal-content">
                    <Room />
                </div>
            </div>
        </Fragment>
    );
}

export default Main;
