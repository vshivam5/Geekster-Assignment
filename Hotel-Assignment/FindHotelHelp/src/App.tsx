import React, { useState} from 'react';
import GuestRoomDialog from './components/GuestRoomDialog';
import { pushState } from './base/pushState';
import { Button } from './components/Button';
import FindHotel from "./Assets/media/FindHotel.svg";
import Footer from './Layouts/Footer';
import './App.css';
import background from "./Assets/media/homepage_background.svg"

function App() {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", width: '100vw', height: "100vh" }} >
      <div className={""}>
        <header>
          <img src={FindHotel} alt="Find Hotel Logo"></img>
        </header>
        <h1> Find the perfect deal, always</h1>
        <div>
          <form>
            <div>
              <input type={"search"} placeholder="Type city, place or hotel name"></input>
            </div>
            <div>
            <input type={"date"} placeholder="Check-in"></input>
            <input type={"date"} placeholder="Check-Out"></input>
            </div>
            <div>
              <button id='btn' type='submit'>Search</button>
            </div>
            <div>
      <Footer />
    </div>
          </form>
          <Button onClick={openDialog}>Rooms</Button>
        </div>
      </div>
      <GuestRoomDialog onClose={closeDialog} open={open} onSearch={pushState} />
    </div>
    
  );
}

export default App;
