const UploadForm = () => {
  return (
    <div className='text-center mt-7'>
      <form className='flex items-center flex-col gap-8'>
        <input
          type='file'
          className='file-input file-input-bordered file-input-md w-full max-w-xs'
        />
        <button className='btn btn-neutral'>
          Upload <span>🚀</span>
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
