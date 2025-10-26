import Tag from "./filtertag";
import { getTagStyle } from "./tagcolors";
import { Roboto } from 'next/font/google';
const customFont = Roboto({
  weight: ['100', '300'], // Specify the weights you plan to use
  subsets: ['latin'],
  display: 'swap', // Recommended for better performance
});


interface attractionProps{
    key : number;
    title : string;
    description : string;
    tags : string;
    advisory : string;
    warnings : string;
}
function Attraction(props : attractionProps){
    console.log(props)
    const tagsArray = props.tags
    ? props.tags.split(/[\s,]+/).filter(Boolean)
    : [];
    
    return (
        <div className="bg-slate-100 flex p-4 flex-col">
            <h1 className={`${customFont.className} text-slate-900 text-2xl font-semibold`}>{props.title}</h1>
            <div className="flex flex-row gap-1 flex-wrap m-2">
            {tagsArray.map((key : string, index : number)=>(
                <Tag key={index} tagName={key} tagStyle={getTagStyle(key)}/>            
            ))}
            </div>
            <p className="flex-1 text-lg font-medium mt-2 md-2">{props.description}</p>
            <div className="mt-4 md-4 border center p-2 rounded-md">
                <h2 className="font-bold"> TravelAI says: </h2>
                <p>{props.advisory}</p>
            </div>
            <div className="mt-4 md-4 bg-red-100 p-4">
                <h2 className="font-bold"> Warnings: </h2>
                <p>{props.warnings}</p>
            </div>
        </div>
    )
}

export default Attraction