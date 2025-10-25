import { TagStyle } from "./tagColors";


interface tagProps{
    tagName : string;
    tagStyle : TagStyle;
}

function Tag(props : tagProps){
    return <>
        <button className={`${props.tagStyle.textColor} ${props.tagStyle.bgColor} pl-1.25 pr-1.25 pt-1 pb-1 rounded-sm`}>
            {props.tagName}
        </button>
    </>
}

export default Tag