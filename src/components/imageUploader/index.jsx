import React, { useState, useContext } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import { imageValidation } from "../../utils";
import "./styles.scss";
const ImageUploader = ({
  isImage = true,
  setImage,
  image,
  isOnlyImage = false,
}) => {
  // const { uploadImage } = useContext(GenericContext);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState("");

  const setLoadingToggle = () => {
    setLoading(false);
  };
  const setErrorToggle = (error) => {
    seterror(error);
  };

  const handleChange = (e) => {
    seterror("");
    if (loading) {
      return;
    }
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      // if (imageValidation(file, setErrorToggle, setLoadingToggle, isImage)) {
      //   const data = new FormData();
      //   data.append("file", file);
        // uploadImage(data, (res) => {
        //   setLoading(false);
        //   if (res?.url) {
        //     setImage(`${process.env.REACT_APP_BACKEND_ENV}${res?.url}`);
        //   }
        // });
      // }
    }
  };
  const uploadButton = (
    <div className="upload-txt">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 5,
        }}
      >
        {loading ? "Uploading" : "Upload"}
      </div>
    </div>
  );
  return (
    <>
      <form
        className={`image-uploader-box ${image && "active"}`}
        encType="multipart/form-data"
      >
        {!isOnlyImage && (
          <>
            <input type="file" onChange={handleChange} />
            {uploadButton}
          </>
        )}
        {image && <img src={image} alt="" />}
      </form>
      <p className="errorMessage">{error}</p>
    </>
  );
};

export default ImageUploader;
