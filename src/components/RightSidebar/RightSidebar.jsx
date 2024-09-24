import "./RightSidebar.css";
import assets from "../../assets/assets";
import { logout } from "../../config/firebase";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

const RightSidebar = () => {
  const { chatUser, messages } = useContext(AppContext);

  const [msgImg, setMsgImg] = useState([]);

  useEffect(() => {
    let tempVar = [];
    messages.map((msg) => {
      if (msg.image) {
        tempVar.push(msg.image);
      }
    });
    setMsgImg(tempVar);
  }, [messages]);

  const handleLogout = () => {
    logout();
  };

  return chatUser ? (
    <div className="rs">
      <div className="rs-profile">
        <img src={chatUser.userData.avatar} alt="" />
        <h3>
          {Date.now() - chatUser.userData.lastSeen <= 70000 ? (
            <img src={assets.green_dot} className="dot" alt="green-dot" />
          ) : null}
          {chatUser.userData.name}
        </h3>
        <p>Hey, I am {chatUser.userData.name}</p>
      </div>

      <hr />

      <div className="rs-media">
        <p>Media</p>
        <div>
          {msgImg.map((url, i) => (
            <img onClick={() => window.open(url)} key={i} src={url} alt="" />
          ))}
        </div>
      </div>

      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div className="rs">
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default RightSidebar;
