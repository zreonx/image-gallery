import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { startUpload, progress } = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      // start upload the image
      startUpload(selectedFile);
    }

    setSelectedFile(null);
  };
  return (
    <div className='text-center mt-7'>
      <form
        onSubmit={handleSubmit}
        className='flex items-center flex-col gap-8 px-7'
      >
        <input
          type='file'
          onChange={handleFileChange}
          accept='image/*'
          className='file-input file-input-bordered file-input-md w-full max-w-xs'
        />
        <button className={`btn btn-neutral`} disabled={!selectedFile}>
          {Boolean(progress) && (
            <span className='loading loading-spinner'></span>
          )}
          Upload <span>🚀</span>
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
