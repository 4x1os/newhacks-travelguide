import Tag from "./filtertag";
import { getTagStyle } from "./tagColors";

import { Roboto } from 'next/font/google';
const customFont = Roboto({
  weight: ['100', '300'], // Specify the weights you plan to use
  subsets: ['latin'],
  display: 'swap', // Recommended for better performance
});

import { StaticImageData } from 'next/image';

interface cardProps {
    title: string; 
    image: StaticImageData
    tags: string[];
}

function Card(props : cardProps){
    return <div className="bg-slate-200 shadow-md overflow-hidden">
        <img src={props.image.src} className="object-cover overflow-hidden h-30%"></img>
        <h1 className={`${customFont.className} text-3xl m-3 `}>{props.title}</h1>
        <div className="flex gap-1 pb-2 pl-2">
            {props.tags.map((key, index)=>(
                <Tag key={index} tagName={key} tagStyle={getTagStyle(key)}/>            
            ))}
        </div>
    </div>
}

export default Card;