import Tag from "./filtertag";
import { getTagStyle } from "./tagcolors";

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
        <div className="bg-slate-200 flex p-4 flex-col">
            <h1 className="text-slate-900 text-2xl font-semibold">{props.title}</h1>
            <div className="flex flex-row gap-1 flex-wrap m-2">
            {tagsArray.map((key : string, index : number)=>(
                <Tag key={index} tagName={key} tagStyle={getTagStyle(key)}/>            
            ))}
            </div>
            <p className="flex-1">{props.description}</p>
            <div className="mt-4 md-4 bg-slate-200">
                <h2> TravelAI says: </h2>
                <p>{props.advisory}</p>
            </div>
            <div className="mt-4 md-4 bg-red-50">
                <h2> Warnings: </h2>
                <p>{props.warnings}</p>
            </div>
        </div>
    )
}

export default Attraction