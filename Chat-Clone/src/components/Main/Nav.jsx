import { assets } from "../../assets/assets";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Chatbox</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Avoy</span>
          </p>
          <p>How Can i Help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Best places near guwahati to see</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest some movies to watch</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Top ten games play and win money</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>How to build house with brick</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Chatbox may provide inaccurate solution or info, including about people or information so please double check the solution
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
