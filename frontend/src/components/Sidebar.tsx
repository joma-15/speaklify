import React, { useEffect, useState} from "react";
import { CategoryIcon } from "./Icons";
import { ThemeController } from "./ThemeController";
import { useNavigate } from "react-router-dom";

export function SidebarContent() {
  const navigate = useNavigate();

  return (
    <aside className="flex flex-col w-[40vh] h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-base-100 dark:border-gray-700 border-solid border-2 fixed">
      <div>
        <ThemeController />
      </div>
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
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-950">
          John Doe
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-black-600 dark:text-black-400">
          john@example.com
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <div
            className="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:black-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={() => navigate("/")}
          >
            <CategoryIcon name="Dashboard" icon="twemoji:house" />
          </div>

          <div
            className="flex items-center px-4 py-2 mt-5 text-black-600 transition-colors duration-300 transform rounded-lg dark:black-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            onClick={() => navigate("/speaklify/casual")}
          >
            <CategoryIcon name="Casual" icon="twemoji:speech-balloon" />
          </div>

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

//to wrap components dynamically
type SidebarContentProp = {
  Sidebar: React.ComponentType;
}

export function WrappedSidebar({Sidebar}: SidebarContentProp) {
  const [isMobile, setMobile] = useState(window.innerWidth <= 1325); //it will expect boolean value because of the condition

  useEffect(() => {
    const handleClick = () => {
      setMobile(window.innerWidth <= 1325);
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
            <Sidebar/>
          </div>
        </div>
      </>
    );
  }
  return <Sidebar/>;
}
