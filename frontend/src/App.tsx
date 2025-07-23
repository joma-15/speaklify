import { Sidebar } from "./components/Sidebar";
import { ImageCard } from "./components/ImageCard";

export default function App() {
  return (
    <>
      <Sidebar/>
      
      <div className="px-6 pt-10 sm:px-12 md:px-20 lg:px-32 xl:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-[calc(2*24rem)] mx-auto">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </>
  );
}
