import UserForm from "../components/UserForm";
import Footer from "../layout/Footer";
import UserProfileWrapper from "../layoutComponents/UserProfileWrapper";

const ViewProfileCont = () => {
  return (
    <>
      <UserProfileWrapper>
        <UserForm viewUser />
      </UserProfileWrapper>
      <Footer />
    </>
  );
};

export default ViewProfileCont;
