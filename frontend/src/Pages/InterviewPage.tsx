import { ExtractData } from "../components/ExtractData";

export function InterviewPage() {
  const characters = [
    {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753699840/starkfield_fpqpbu.png",
      alt: "Mr. Starkfield image",
      title: "Mr. Starkfield",
      description:
        "A strict and serious interviewer who asks tough questions.",
    },

    {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753700267/yuki_xeewqh.png",
      alt: "Dr.Yuki image",
      title: "Dr. Yuki",
      description:
        "A kind and supportive HR interviewer who helps you feel at ease.",
    },

    {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753700375/kyle_cjjvve.png",
      alt: "Kyle image",
      title: "Tech Bro Kyle",
      description: "A laid-back startup guy who loves real talk and tech.",
    },

    {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753700606/auntie_florence_cdko5q.png",
      alt: "Auntie Florence image",
      title: "Auntie Florence",
      description: "A traditional, wise interviewer who values honesty and manners.",
    },

    {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753700781/orion_vhhqud.png",
      alt: "Professor Orion image",
      title: "Professor Orion",
      description:
        "A sharp professor who asks thought-provoking questi",
    }, 

     {
      src: "https://res.cloudinary.com/duszepfug/image/upload/v1753701130/vega_q6q0yc.png",
      alt: "CEO Vega",
      title: "CEO Vega – Visionary Leader",
      description:
        "A confident CEO who values bold ideas and creative thinking.",
    }, 
  ];

  return (
    <>
      <ExtractData characters={characters}/>
    </>
  );
}
