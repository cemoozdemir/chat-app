import { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:3001/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("File uploaded successfully:", data);
        })
        .catch((error) => console.error("Error uploading file:", error));
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && <p>File selected: {file.name}</p>}
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
