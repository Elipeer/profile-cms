import UploadImage from "../components/UploadImage";
import UserForm from "../components/UserForm";
import UserProfileWrapper from "../layoutComponents/UserProfileWrapper";

const EditProfileCont = (props) => {
  return (
    <UserProfileWrapper>
      <UploadImage />
      <UserForm editProfile />
    </UserProfileWrapper>
  );
};

export default EditProfileCont;
