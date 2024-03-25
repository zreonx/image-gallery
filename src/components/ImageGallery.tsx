const ImageGallery = () => {
  return (
    <div className='grid md:grid-cols-3 justify-center gap-4 mt-7'>
      <div className='card card-compact w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src='' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <p>Upload By:</p>
          <span>Created On:</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
