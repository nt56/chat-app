import "./ProfileUpdate.css";
import assets from "../../assets/assets";
import { useState } from "react";

const ProfileUpdate = () => {
  const [image, setImage] = useState(false);

  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg, .PNG, .JPG, .JPEG"
              hidden
            />
            <img
              src={
                image ? window.URL.createObjectURL(image) : assets.avatar_icon
              }
              alt=""
            />
            upload profile image
          </label>
          <input type="text" placeholder="your name" required />
          <textarea placeholder="your bio" required></textarea>
          <button type="submit">Save</button>
        </form>
        <img
          className="profile-pic"
          src={image ? URL.createObjectURL(image) : assets.logo_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
