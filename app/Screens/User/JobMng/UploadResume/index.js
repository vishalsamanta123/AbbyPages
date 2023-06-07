import React, { useState } from "react";
import UploadResumeView from "./components/UploadResumeView";

const UploadResume = ({ navigation, route }) => {
  const [uploadData, setUploadData] = useState({});
  const [mediaOpen, setMediaOpen] = useState(false);
  return (
    <UploadResumeView
      uploadData={uploadData}
      setUploadData={setUploadData}
      mediaOpen={mediaOpen}
      setMediaOpen={setMediaOpen}
    />
  );
};

export default UploadResume;
