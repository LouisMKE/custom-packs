import '../App.css';
import monotest from '../assets/monotest.png';
import keyboard from '../assets/keyboard.png';
import tower from '../assets/tower.png';

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
              
                
                  <img className="monitor"src={monotest}>
                    
                  </img>
                
              
            </div>
            <div className="bottom">
              <img className="keyboard"src={keyboard}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;