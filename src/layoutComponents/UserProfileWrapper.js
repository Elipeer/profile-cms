import { Card, Heading, Layout, Stack } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import avatarBlank from "../images/avatarBlank.png";

const UserProfileWrapper = (props) => {
  const [profileImage, setProfileImage] = useState(null);
  const queryString = window.location.pathname;

  useEffect(() => {
    if (Object.keys(props.data).length && props.data.image && queryString !== "/edit-profile") {
      setProfileImage(props.data.image);
    }
  }, [props.data.image]);

  return (
    <div className="mt-24">
      <Layout>
        <Stack distribution="fillEvenly">
          {queryString !== "/edit-profile" && (
            <Card sectioned>
              {profileImage ? (
                <img src={profileImage} className="h-[70px] w-[70px] rounded-full mb-10" alt="main-logo" />
              ) : (
                <img src={avatarBlank} alt="main-logo" />
              )}

              <Heading>Eli Peer</Heading>
              <p className="text-gray-700">elipeer98@gmail.com</p>
            </Card>
          )}

          <div className="mb-28">
            <Card sectioned title="User Profile">
              <div className="user-profile-card">{props.children}</div>
            </Card>
          </div>
        </Stack>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.userData.data
  };
};

export default connect(mapStateToProps)(UserProfileWrapper);
