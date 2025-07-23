import { useEffect, useState } from "react";

export function ImageCard() {
  useEffect(() => {
    console.log(window.innerWidth);
  });
  return (
    <div className="card bg-base-100 shadow-sm border-2 md:w-70 sm:w-65 xl:w-75">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export function WrappedImage() {
  const [Px, setPx] = useState(() => {
    const width = window.innerWidth; 

    if (width === 1325) return "xl:ml-30"; 
    return width >= 1920 ? "xl:ml-150" : "xl:ml-90";
  });

  useEffect(() => {
    const HandleResize = () => {
      const width = window.innerWidth;

      if (width === 1325) {
        setPx("xl:ml-30");
      }else if (width >= 1920) {
        setPx("xl:ml-150");
      }else{
        setPx("xl:ml-90");
      }
    };

    window.addEventListener("resize", HandleResize);
    return () => window.removeEventListener("resize", HandleResize);
  }, []);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-3 gap-10 gap-x-[200px] max-w-[calc(2*24rem)] mx-auto md:place-items-center ${Px}`}
    >
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </div>
  );
}
