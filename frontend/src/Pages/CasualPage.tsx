import { WrappedImageCard } from "../components/ImageCard";
import { WrappedSidebar } from "../components/Sidebar";
import { SidebarContent } from "../components/Sidebar";
import { ImageCard } from "../components/ImageCard";
import sunny from "../assets/sunny.png";
import auntie from "../assets/auntie.png";
import raj from "../assets/raj.png";
import lulu from "../assets/lulu.png";
import milo from "../assets/milo.png";
import tia from "../assets/tia.png";

export function Casualpage() {
  const characters = [
    {
      src: sunny,
      alt: "sunny image",
      title: "Sunny",
      description:
        "A fun, energetic teen who loves skating and chill conversations.",
    },

    {
      src: auntie,
      alt: "auntie image",
      title: "Auntie Meili",
      description:
        "A loud, dramatic shop owner who yells about discounts, judges your choices, and secretly gives extra pearls when she likes you.",
    },

    {
      src: raj,
      alt: "Raj image",
      title: "Raj the Chatty Foodie 🇮🇳",
      description: "A friendly Indian guy who makes every chat fun and spicy.",
    },

    {
      src: lulu,
      alt: "Lulu image",
      title: "Lulu the Chill Musician",
      description: "A calm, creative soul who speaks like a song.",
    },

    {
      src: milo,
      alt: "Milo image",
      title: "Milo the Gamer",
      description:
        "A fast-talking gamer who loves jokes and memes.",
    }, 

     {
      src: tia,
      alt: "Tia image",
      title: "Tia the Trendy Blogger",
      description:
        "A stylish blogger who’s great at fun and expressive chats.",
    }, 
  ];

  // const Sunny =  {
  //     src: sunny,
  //     alt: "sunny image",
  //     title: "Sunny the Skater",
  //     description: "A fun, energetic teen who loves skating and chill conversations.",

  //   };

  return (
    <>
      <WrappedSidebar Sidebar={SidebarContent} />

      {/*characters in speaklify */}
      <WrappedImageCard>
        {characters.map((character, index) => (
          <ImageCard key={index} {...character} />
        ))}
        {/* <ImageCard {...Sunny}/>
        <ImageCard {...Sunny}/>
        <ImageCard {...Sunny}/>
        <ImageCard {...Sunny}/>
        <ImageCard {...Sunny}/>
        <ImageCard {...Sunny}/> */}
      </WrappedImageCard>
    </>
  );
}
