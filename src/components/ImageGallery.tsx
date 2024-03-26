import useFireStore from "../hooks/useFireStore";

const ImageGallery = () => {
  const { docs: images, isLoading } = useFireStore("images");

  if (isLoading) {
    return (
      <div className='text-center mt-10'>
        <progress className='progress w-56'></progress>
      </div>
    );
  }

  return (
    <div className='grid md:grid-cols-3 justify-center gap-6 mt-7 max-md:px-5 max-lg:px-5 mb-10'>
      {images.map((image) => (
        <div
          key={image.imageUrl}
          className='card card-compact w-full max-sm:w-full bg-base-100 shadow-xl '
        >
          <figure>
            <img src={image.imageUrl} className='w-full h-60 object-cover' />
          </figure>
          <div className='card-body w-full h-20 truncate '>
            <p>Upload By: {image.userEmail}</p>
            <span className='text-ellipses'>
              Created On: {image.createdAt.toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
