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


// type ImageCardWrapperProp = {
//   children : React.ReactNode;
// }
// //this function is to make the cardcomponent responsive in any screen
// export function WrappedImageCard({children} : ImageCardWrapperProp) {
//   const [Px, setPx] = useState(() => {//to resize the component dynamically
//     const width = window.innerWidth;

//     if (width === 1325) return "xl:ml-30";
//     return width >= 1920 ? "xl:ml-150" : "xl:ml-90";
//   });

//   const [Col, SetCol] = useState(() => {
//     const width = window.innerWidth; 

//     if (width === 798) {
//       return "sm:grid-cols-2";
//     }
//   }); 

//   useEffect(() => {
//     const HandleResize = () => {
//       const width = window.innerWidth;

//       if (width === 1325) {
//         setPx("xl:ml-30");
//       } else if (width >= 1920) {
//         setPx("xl:ml-150");
//       } else {
//         setPx("xl:ml-90");
//       }
//     };

//     window.addEventListener("resize", HandleResize);
//     return () => window.removeEventListener("resize", HandleResize);
//   }, []);

//   return (
//     <div className="px-6 pt-10 sm:px-12 md:px-20 lg:px-32 xl:px-40">
//       <div
//         className={`grid grid-cols-1 sm:grid-cols-3 gap-10 gap-x-[200px] max-w-[calc(2*24rem)] mx-auto md:place-items-center ${Px}`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }
type ImageCardWrapperProp = {
  children: React.ReactNode;
};

export function WrappedImageCard({ children }: ImageCardWrapperProp) {
  const [px, setPx] = useState("");
  const [cols, setCols] = useState("grid-cols-3");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Margin-left adjustments
      if (width === 1325) {
        setPx("xl:ml-30");
      } else if (width >= 1920) {
        setPx("xl:ml-150");
      } else {
        setPx("xl:ml-90");
      }

      // Column layout
      if (width <= 645) {
        setCols("grid-cols-1"); // Phones & very small devices
      } else if (width <= 796) {
        setCols("grid-cols-2"); // Small tablets
      } else {
        setCols("grid-cols-3"); // Laptops/desktops
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="px-6 pt-10 sm:px-12 md:px-20 lg:px-32 xl:px-40">
      <div
        className={`grid ${cols} gap-10 gap-x-[200px] max-w-[calc(2*24rem)] mx-auto md:place-items-center ${px}`}
      >
        {children}
      </div>
    </div>
  );
}
