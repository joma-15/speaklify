import { WrappedImageCard } from "../components/ImageCard";
import { WrappedSidebar } from "../components/Sidebar";
import { SidebarContent } from "../components/Sidebar";
import { ImageCard } from "../components/ImageCard";
import sunny from "../assets/sunny.png";

export function Casualpage() {
  const Sunny = {
    src: sunny,
    alt: "casual image",
    title: "Sunny the Skater",
    description:
      "A fun, energetic teen who loves skating and chill conversations.",
  };

  return (
    <>
      <WrappedSidebar Sidebar={SidebarContent} />

      {/*characters in speaklify */}
      <WrappedImageCard>
        <ImageCard {...Sunny}/>
        <ImageCard {...Sunny}/>
        <ImageCard {...Sunny}/>
        <ImageCard {...Sunny}/>
        <ImageCard {...Sunny}/>
        <ImageCard {...Sunny}/>
      </WrappedImageCard>
    </>
  );
}
