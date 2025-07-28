import { ExtractData } from "../components/ExtractData";

export function InterviewPage() {
  const characters = [
    {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753674771/sunny_uyaubf.png",
      alt: "sunny image",
      title: "Sunny",
      description:
        "A fun, energetic teen who loves skating and chill conversations.",
    },

    {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753674778/auntie_ovlrwz.png",
      alt: "auntie image",
      title: "Auntie Meili",
      description:
        "A loud, dramatic shop owner who yells about discounts.",
    },

    {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753674771/raj_fzbsvs.png",
      alt: "Raj image",
      title: "Raj the Chatty Foodie 🇮🇳",
      description: "A friendly Indian guy who makes every chat fun and spicy.",
    },

    {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753674774/lulu_iqenfa.png",
      alt: "Lulu image",
      title: "Lulu the Chill Musician",
      description: "A calm, creative soul who speaks like a song.",
    },

    {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753674775/milo_pdkelb.png",
      alt: "Milo image",
      title: "Milo the Gamer",
      description:
        "A fast-talking gamer who loves jokes and memes.",
    }, 

     {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753674769/tia_woszxn.png",
      alt: "Tia image",
      title: "Tia the Trendy Blogger",
      description:
        "A stylish blogger who’s great at fun and expressive chats.",
    }, 
  ];

  return (
    <>
      <ExtractData characters={characters}/>
    </>
  );
}
