import { Icon } from "@iconify/react";

//   const categories = [
//     { name: "Casual", icon: "twemoji:speech-balloon" },
//     { name: "Interview", icon: "twemoji:briefcase" },
//     { name: "Therapy", icon: "twemoji:thought-balloon" },
//     { name: "Custom", icon: "twemoji:gear" },
//   ];

// export function CasualIcon(){
//     return(
//         <div className='flex flex-col'>
//             <Icon icon={categories[0].icon}/>
//             <span className="mt-2 text-sm font-medium">{categories[0].name}</span>
//         </div>
//     );
// }

// export function InterviewIcon(){
//     return(
//         <div className='flex flex-col'>
//             <Icon icon={categories[1].icon}/>
//             <span className="mt-2 text-sm font-medium">{categories[1].name}</span>
//         </div>
//     );
// }

// export function TherapyIcon(){
//     return(
//         <div className='flex flex-col'>
//             <Icon icon={categories[2].icon}/>
//             <span className="mt-2 text-sm font-medium">{categories[2].name}</span>
//         </div>
//     );
// }

// export function CustomIcon(){
//     return(
//         <div className='flex flex-col'>
//             <Icon icon={categories[3].icon}/>
//             <span className="mt-2 text-sm font-medium">{categories[3].name}</span>
//         </div>
//     );
// }

type CategoryProp = {
  name: string;
  icon: string;
};

export function CategoryIcon({ name, icon }: CategoryProp) {
  return (
    <div className="flex flex-row gap-5">
      <Icon icon={icon} width="35" />
      <span className="mt-2 text-sm font-medium">{name}</span>
    </div>
  );
}
