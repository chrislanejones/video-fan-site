import React from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const UploadButton = () => {
  const handleUpload = () => {
    // Add your upload logic here
    console.log("Upload button clicked");
  };

  return (
    <Button size="sm" variant="secondary" onClick={handleUpload}>
      <Upload size={16} />
    </Button>
  );
};

export default UploadButton;
