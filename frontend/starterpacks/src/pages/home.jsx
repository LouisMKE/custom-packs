import '../App.css';
import monotest1 from '../assets/monotest1.png';
import keyboard from '../assets/keyboard.png';
import tower from '../assets/tower.png';
import speak1 from '../assets/speak1.png';
import speak2 from '../assets/speak2.png';
import mouse from '../assets/mouse.png';
import deskitem1 from '../assets/deskitem1.png';
import shelf1 from '../assets/shelf1.png';
import shelf2 from '../assets/shelf2.png';
import shelf3 from '../assets/shelf3.png';
import shelf4 from '../assets/shelf4.png';
import packmanlogo from '../assets/packmanlogo.png'

export function Home() {

  return (
    <>
      <div className="background">
        <div className="maincontainer">
          <div className="sideshelf">
            
           <div className="section">
            <img className="shelf" src={shelf3}></img>
            <button className="buttons"> sign in / sign up </button>
            </div>
           <div className="section">
            <img className="shelf" src={shelf1}></img><button className="buttons"> how to use ! </button></div>
           <div className="section">
            <img className="shelf" src={shelf2}></img><button className="buttons"> my feed </button></div>
           <div className="section">
            <img className="shelf" src={shelf4}></img><button className="buttons"> random suggestions </button></div>
            <div className="info"> 
              <h1>~~ HOW DO I USE THIS? ~~</h1>
              <p> PACK-MAN is a starter pack based art discovery app! Users can create packs consisting of music, books, and movies realting how the creator sees fit! Browse packs to find new things, or create your own to send to friends!</p>
            </div>
          </div>
          <div className="deskcontainer">
            <div className="top">
            <img className="logo" src={packmanlogo}></img>
                <div className="compslot">
                  <img className="speak1" src={speak1}></img>
                    <div>
                      <div>
                        <div className="screen">
                          <form className="search">
                            <input type="text" placeholder="Search up a pack..."></input>
                          </form>
                          
                          <div className="screenbg"></div>
                          <img className="monitor"src={monotest1}></img>
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