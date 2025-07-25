import { Sidebar } from "../components/Sidebar";
import { WrappedImage } from "../components/ImageCard";

export function Casualpage() {
  return (
    <>
      <Sidebar/>
      <div className="px-6 pt-10 sm:px-12 md:px-20 lg:px-32 xl:px-40">
        <WrappedImage />
      </div>
    </>
  );
}
