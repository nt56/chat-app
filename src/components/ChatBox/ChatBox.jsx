import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="user-img" />
        <p>
          John Doe{" "}
          <img src={assets.green_dot} className="dot" alt="green-dot" />
        </p>
        <img src={assets.help_icon} className="help" alt="help-icon" />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">Hello there welcome to the chat app</p>
          <div>
            <img src={assets.profile_img} alt="user-img" />
            <p>2:30 PM</p>
          </div>
        </div>

        <div className="s-msg">
          <img src={assets.pic1} className="msg-img" />
          <div>
            <img src={assets.profile_img} alt="user-img" />
            <p>2:30 PM</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">Hello there welcome to the chat app</p>
          <div>
            <img src={assets.profile_img} alt="user-img" />
            <p>2:30 PM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send Message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="gallery-img" />
        </label>
        <img src={assets.send_button} alt="send-img" />
      </div>
    </div>
  );
};

export default ChatBox;
