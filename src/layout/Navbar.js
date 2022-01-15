import { TopBar } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import main_logo from "../images/main_logo.png";
import avatarBlack from "../images/avatarBlank.png";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = (props) => {
  const navigate = useNavigate();
  const [avatarImg, setAvatarImg] = useState(null);

  useEffect(() => {
    if (props.data.image && Object.keys(props.data.image)?.length) setAvatarImg(props.data.image);
  }, [props.data]);

  return (
    <>
      <TopBar />
      <div className="w-4/5 flex justify-between m-auto absolute inset-x-0 top-3 h-16 items-center z-10">
        <img src={main_logo} alt="main-logo" className="h-30" />

        <div onClick={onClickOfAvatar} className="pointer">
          {avatarImg ? (
            <img src={avatarImg} alt="main-logo" className="w-20 h-20 rounded-full" />
          ) : (
            <img src={avatarBlack} alt="main-logo" className="w-20 h-20 rounded-full" />
          )}
        </div>
      </div>
    </>
  );
  function onClickOfAvatar() {
    navigate("/");
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.userData.data
  };
};

export default connect(mapStateToProps)(NavBar);
