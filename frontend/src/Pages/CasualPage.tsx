import { WrappedImageCard } from "../components/ImageCard";
import { WrappedSidebar } from "../components/Sidebar";
import { SidebarContent } from "../components/Sidebar";
import { ImageCard } from "../components/ImageCard";
import sunny from "../assets/sunny.png";
import auntie from "../assets/auntie.png"; 

export function Casualpage() {

  const characters = [
    {
      src: sunny,
      alt: "sunny image",
      title: "Sunny the Skater", 
      description: "A fun, energetic teen who loves skating and chill conversations.",
      
    },

    {
      src: auntie, 
      alt: "casual image", 
      title: "Auntie Meili",
      description: "A loud, dramatic shop owner who yells about discounts, judges your choices, and secretly gives extra pearls when she likes you."
    }
  ]; 

  return (
    <>
      <WrappedSidebar Sidebar={SidebarContent} />

      {/*characters in speaklify */}
      <WrappedImageCard>
        {characters.map((character, index) => (
          <ImageCard key={index} {...character}/>
        ))}
      </WrappedImageCard>
    </>
  );
}
