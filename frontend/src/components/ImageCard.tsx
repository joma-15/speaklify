import React, { useEffect, useState } from "react";

type ImageProp = {
  src: string; 
  alt: string;
  title: string; 
  description: string;
}

export function ImageCard({src,alt,title,description}: ImageProp) {
  useEffect(() => {
    console.log(window.innerWidth);
  });
  return (
    <div className="card bg-base-100 shadow-sm border-2 md:w-70 sm:w-65 xl:w-75">
      <figure>
        <img
          src={src}
          alt={alt ?? "Failed to Load"}
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="overflow-auto max-h-[40px] text-sm">
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Talk</button>
        </div>
      </div>
    </div>
  );
}


type ImageCardWrapperProp = {
  children : React.ReactNode;
}

export function WrappedImageCard({children} : ImageCardWrapperProp) {
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
      } else if (width >= 1920) {
        setPx("xl:ml-150");
      } else {
        setPx("xl:ml-90");
      }
    };

    window.addEventListener("resize", HandleResize);
    return () => window.removeEventListener("resize", HandleResize);
  }, []);

  return (
    <div className="px-6 pt-10 sm:px-12 md:px-20 lg:px-32 xl:px-40">
      <div
        className={`grid grid-cols-1 sm:grid-cols-3 gap-10 gap-x-[200px] max-w-[calc(2*24rem)] mx-auto md:place-items-center ${Px}`}
      >
        {children}
      </div>
    </div>
  );
}
