import { WrappedSidebar } from "./Sidebar";
import { SidebarContent } from "./Sidebar";
import { WrappedImageCard } from "./ImageCard";
import { ImageCard } from "./ImageCard";

type CharacterData = {
    src: string; 
    alt: string; 
    title: string; 
    description: string;
}; 

type ExtractCharacterData = {
  characters : CharacterData[];
}

export function ExtractData({characters}: ExtractCharacterData){
    return(<>
    <WrappedSidebar Sidebar={SidebarContent} />
    
          {/*characters in speaklify */}
          <WrappedImageCard>
            {characters.map((character, index) => (
              <ImageCard key={index} {...character} />
            ))}
          </WrappedImageCard>
    </>);
          
}