import notFound from "../../assets/error_images/404.svg";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img
        className="max-w-sm lg:max-w-lg object-contain"
        title="image author is storyset"
        src={notFound}
        alt="Not-found this page"
        draggable="false"
      />
      <p className="text-xl text-center font-medium text-primary">
        404, Oops This Page Is Not Found
      </p>
      <button
        onClick={() => window.history.back()}
        className="text-white bg-secondary py-2 px-4 rounded-md my-5 font-bold "
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
