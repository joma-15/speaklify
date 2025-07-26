import { WrappedImage } from "../components/ImageCard";
import { WrappedSidebar } from "../components/Sidebar";
import sunny from "../assets/sunny.png";
import { SidebarContent } from "../components/Sidebar";

export function Casualpage() {
  const Content = {
    image: sunny,
    alt: "casual image",
    title: "Sunny the Skater",
    description:
      "A fun, energetic teen who loves skating and chill conversations.",
  };

  return (
    <>
    <WrappedSidebar Sidebar={SidebarContent}/>
      <WrappedImage
        src={Content.image}
        alt={Content.alt}
        title={Content.title}
        description={Content.description}
      />
    </>
  );
}
