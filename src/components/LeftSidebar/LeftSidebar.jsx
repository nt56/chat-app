import "./LeftSidebar.css";
import assets from "../../assets/assets";

const LeftSidebar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img alt="logo" src={assets.logo} className="logo" />
          <div className="menu">
            <img alt="menu-icon" src={assets.menu_icon} />
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img alt="search-logo" src={assets.search_icon} />
          <input type="text" placeholder="search here...." />
        </div>
      </div>

      <div className="ls-list">
        {Array(10)
          .fill("")
          .map((item, index) => (
            <div key={index} className="friends">
              <img src={assets.profile_img} alt="user-img" />
              <div>
                <p>John Doe</p>
                <span>Hello, How are you ? </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
