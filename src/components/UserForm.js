import { Button, Card, FormLayout, Heading, Select, TextField } from "@shopify/polaris";
import { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { setData } from "../store/reducers/userDataReducer";
import { useNavigate } from "react-router-dom";
import { getAreaCodes, validateMobile, toolbarOptions } from "../utils";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UserForm = (props) => {
  const [profileData, setProfileData] = useState({});
  const [formatErrors, setFormatErrors] = useState({});
  const [quilData, setQuilData] = useState("");

  const memoizedAreaCodes = useMemo(() => getAreaCodes());
  const navigate = useNavigate();

  useEffect(() => {
    if (props.data) {
      setProfileData(props.data);
      setQuilData(props.data.quilData);
    }
  }, [props.data]);

  return (
    <FormLayout>
      <Heading>Job title</Heading>
      <TextField
        maxLength={20}
        autoComplete="off"
        showCharacterCount={props.editProfile}
        onChange={(val) => onChange("title", val)}
        value={profileData.title}
        disabled={props.viewUser}
      />
      <Heading>Current company</Heading>
      <TextField
        maxLength={20}
        autoComplete="off"
        showCharacterCount={props.editProfile}
        onChange={(val) => onChange("currentCompany", val)}
        disabled={props.viewUser}
        value={profileData.currentCompany}
      />
      <Heading>About {props.viewUser ? "myself" : "yourself"}</Heading>
      {props.editProfile ? (
        <ReactQuill
          theme="snow"
          modules={{ toolbar: toolbarOptions }}
          onChange={(val) => {
            setQuilData(val);
          }}
          value={quilData || ""}
        />
      ) : (
        <div className="quill-imput-disabled">
          <ReactQuill theme={null} readOnly value={quilData || ""} />
        </div>
      )}

      <Heading>Phone number</Heading>
      <div className="flex">
        <div className="w-100 mr-[15px]">
          <Select
            options={memoizedAreaCodes}
            condensed
            onChange={(val) => onChange("areaCode", val)}
            value={profileData.areaCode}
            disabled={props.viewUser}
          />
        </div>
        <div className="w-full">
          <TextField
            type="number"
            autoComplete="off"
            onChange={(val) => onChange("mobile", val)}
            value={profileData.mobile}
            disabled={props.viewUser}
            error={formatErrors.mobile ? formatErrors.mobile : false}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="some" id="save_button" onClick={saveUserInfo}>
          {props.editProfile ? "Save" : "Edit"}
        </Button>
      </div>
    </FormLayout>
  );

  function onChange(type, val) {
    const data = { ...profileData };
    const format = { ...formatErrors };
    data[type] = val;
    format[type] = null;
    setProfileData(data);
    setFormatErrors(format);
  }

  function saveUserInfo() {
    if (props.editProfile) {
      if (!validateMobile(profileData.mobile)) {
        const formats = { ...formatErrors };
        formats.mobile = "This phone number is not valid";
        setFormatErrors(formats);
        return;
      } else {
        const data = { ...props.data, ...profileData };
        data.quilData = quilData;
        props.setData(data);
        navigate("/");
      }
    } else {
      navigate("/edit-profile");
    }
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.userData.data
  };
};
const mapDispatchToProps = { setData };

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
