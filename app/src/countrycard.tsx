"use client"
import Tag from "./filtertag";
import { getTagStyle } from "./tagColors";
import { useState } from "react";
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
    onCardSelect: (countryName : string) => void;
    selectedCountry: string | null
}

function Card(props : cardProps){
    const validateClick = () =>{
        if (props.selectedCountry) return
        props.onCardSelect(props.title)
    }
    
    const unlockedState = "bg-slate-200 shadow-md overflow-hidden hover:scale-[1.02] ease-out transition-all duration-300 hover:shadow-2x1";
    const lockedState = "bg-slate-200 shadow-md overflow-hidden brightness-90";
    return(
        <>
            <button onClick={validateClick} className={(!props.selectedCountry || props.selectedCountry === props.title) ? unlockedState : lockedState}>
            <img src={props.image.src} className="object-cover overflow-hidden h-30%"></img>
            <h1 className={`${customFont.className} text-3xl m-3 `}>{props.title}</h1>
            <div className="flex gap-1 pb-2 pl-2">
                {props.tags.map((key, index)=>(
                    <Tag key={index} tagName={key} tagStyle={getTagStyle(key)}/>            
                ))}
            </div>
            </button>
        </>);
}

export default Card;