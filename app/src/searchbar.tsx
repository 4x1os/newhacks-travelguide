"use client"
import { useState } from "react";

interface searchCallback {
    setQuery: (tag: string) => void;
    freeze: boolean
}

function Search(props : searchCallback){
    const [searchTerm, setSearchTerm] = useState('');
    const lockedCSS = "border w-full p-4 rounded-md brightness 90%"

    const handleSubmission = (e : React.FormEvent)=>{
        if (props.freeze){return}
        e.preventDefault();
        if (searchTerm.trim() !== ''){
            const query = searchTerm.trim()          
            props.setQuery(query)
            setSearchTerm('')
        }
    }

    const placeHolderText = (props.freeze)? "Please wait..." : "tourist attractions"
    console.log(props.freeze)
    return(<div className="flex flex-1 place-content-stretch m-16 rounded-full">
        <form action="" className="w-full" onSubmit={handleSubmission}>
            <input type="text" id='search' placeholder={placeHolderText} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border w-full p-4 rounded-full" disabled={props.freeze}/>
        </form>
    </div>)
}

export default Search