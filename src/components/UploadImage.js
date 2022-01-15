import { Caption, Card, DropZone, Stack, Thumbnail } from "@shopify/polaris";
import { setData } from "../store/reducers/userDataReducer";
import { useCallback, useState } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

const UploadImage = (props) => {
  const [file, setFile] = useState();
  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

  const handleDropZoneDrop = useCallback((_dropFiles, acceptedFiles, _rejectedFiles) => {
    if (!validImageTypes.includes(acceptedFiles[0].type) || _rejectedFiles[0])
      return Swal.fire("Whoops", "The format is not good", "warning");
    let obj = { ...props.data };
    var file = acceptedFiles[0];
    var reader = new FileReader(file);
    reader.onloadend = function () {
      obj.image = reader.result;
      props.setData(obj);
    };
    reader.readAsDataURL(file);
    setFile(acceptedFiles[0]);
  });

  return (
    <div className="mb-24">
      <Card sectioned title="Profile picture">
        <DropZone allowMultiple={false} onDrop={handleDropZoneDrop}>
          {file && (
            <Stack>
              <Thumbnail size="small" alt={file.name} source={validImageTypes.includes(file.type) && window.URL.createObjectURL(file)} />
              <div>
                {file.name} <Caption>{file.size} bytes</Caption>
              </div>
            </Stack>
          )}
          {!file && <DropZone.FileUpload />}
        </DropZone>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.userData.data
  };
};
const mapDispatchToProps = { setData };

export default connect(mapStateToProps, mapDispatchToProps)(UploadImage);
