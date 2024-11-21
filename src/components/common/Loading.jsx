import img1 from "/images/loading-1.gif";
import img2 from "/images/loading-2.gif";

const Loading = ({ imageNo = 1 }) => {
   const image = imageNo === 1 ? img1 : img2;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={image} alt="Error" className="w-60 h-60" />
      <p className="text-xl font-bold primary">Loading ...</p>
    </div>
  );
};

export default Loading;