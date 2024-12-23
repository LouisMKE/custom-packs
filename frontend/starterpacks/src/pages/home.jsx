import '../App.css';
import monotest from '../assets/monotest.png';
import keyboard from '../assets/keyboard.png';
import tower from '../assets/tower.png';
import speak1 from '../assets/speak1.png';
import speak2 from '../assets/speak2.png';
import mouse from '../assets/mouse.png';
import deskitem1 from '../assets/deskitem1.png';

export function Home() {

  return (
    <>
      <div className="background">
        <div className="maincontainer">
          <div className="sideshelf">
           <p className="section">pack - man</p>
           <p className="section">user / my account</p>
           <p className="section">create a pack</p>
           <p className="section">feed</p>
           <div className="section">
            <img className="tower"src={tower}></img>
           </div>
          </div>
          <div className="deskcontainer">
            <div className="top">
              
                <div className="compslot">
                  <img className="speak1" src={speak1}></img>
                    <div>
                      <div>
                        <div className="screen">
                          
                          <button className="search">search bar</button>
                          <div className="screenbg"></div>
                          <img className="monitor"src={monotest}></img>
                        </div>
                      </div>
                      
                    </div>
                  <img className="speak2" src={speak2}></img>
                </div>
              
            </div>
            <div className="bottom">
              <img className="deskitem1" src={deskitem1}></img>
              <img className="keyboard"src={keyboard}></img>
              <img className="mouse" src={mouse}></img>
            </div>
            
          </div>
          
        </div>

      </div>
    </>
  )
};

export default Home;