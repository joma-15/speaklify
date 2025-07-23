import { useEffect, useState } from "react";
import { CategoryIcon } from "./Icons";
import { ThemeController } from "./ThemeController";

function SidebarContent() {
  return (
    <aside
      className="flex flex-col w-[40vh] h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-base-100 dark:border-gray-700 border-solid border-2"
    >
      <ThemeController/>
      <a href="#" className="mx-auto">
        <img
          className="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/full-logo.svg"
          alt="logo"
        />
      </a>

      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
          John Doe
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-black-600 dark:text-black-400">
          john@example.com
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <a
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
            href="#"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mx-4 font-medium">Dashboard</span>
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:black-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <CategoryIcon name="Casual" icon="twemoji:speech-balloon" />
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:black-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <CategoryIcon name="Interview" icon="twemoji:briefcase" />
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:black-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <CategoryIcon name="Therapy" icon="twemoji:brain" />
          </a>

          <a
            className="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:black-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <CategoryIcon name="Custom" icon="twemoji:gear" />
          </a>

          {/* Add more links here, all with strokeWidth, strokeLinecap, strokeLinejoin fixed */}
        </nav>
      </div>
    </aside>
  );
}

// export function Sidebar() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//       console.log("Window width:", window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (width <= 822) {
//     return (
//       <div className="drawer">
//         <button className="drawer-toggle">open drawer</button>
//         <SidebarContent />
//       </div>
//     );
//   }

//   return <SidebarContent />;
// }

// export function Sidebar() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 822);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 822);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (isMobile) {
//     // Drawer layout for mobile
//     return (
//       <div className="drawer">
//         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content">
//           {/* Main page content goes here */}
//           <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
//             Open drawer
//           </label>
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer" className="drawer-overlay"></label>
//           <SidebarContent />
//         </div>
//       </div>
//     );
//   }

//   // Static sidebar layout for desktop
//   return (
//     <aside className="w-80 min-h-screen">
//       <SidebarContent />
//     </aside>
//   );
// }

export function Sidebar() {
  const [isMobile, setMobile] = useState(window.innerWidth <= 822); //it will expect boolean value because of the condition

  useEffect(() => {
    const handleClick = () => {
      setMobile(window.innerWidth <= 822);
      console.log(isMobile);
    };

    window.addEventListener("resize", handleClick);
    return () => window.removeEventListener("resize", handleClick); //for unmount clean-up
  }, []);

  if (isMobile) {
    return (
      <>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/*to toggle to the drawer element */}
            <label
              htmlFor="my-drawer"
              className="flex flex-col justify-between w-8 h-6 p-1 group drawer-button"
            >
              <span className="block h-1 bg-gray-800 rounded group-hover:bg-blue-500 transition-all duration-300"></span>
              <span className="block h-1 bg-gray-800 rounded group-hover:bg-blue-500 transition-all duration-300"></span>
              <span className="block h-1 bg-gray-800 rounded group-hover:bg-blue-500 transition-all duration-300"></span>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <SidebarContent />
          </div>
        </div>
      </>
    );
  }
  return <SidebarContent />;
}
