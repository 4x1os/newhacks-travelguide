"use client"
import { useState } from "react";

interface searchCallback {
    setQuery: (tag: string) => void;
    freeze: boolean
}

function Search(props : searchCallback){
    const [searchTerm, setSearchTerm] = useState('');
    const handleSubmission = (e : React.FormEvent)=>{
        if (props.freeze){return}
        e.preventDefault();
        if (searchTerm.trim() !== ''){
            const query = searchTerm.trim()          
            props.setQuery(query)
            setSearchTerm('')
        }
    }

    return(<div className="flex flex-1 place-content-stretch m-16 rounded-md">
        <form action="" className="w-full" onSubmit={handleSubmission}>
            <input type="text" id='search' placeholder="Tourist Attractions" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border w-full p-4 rounded-md"/>
        </form>
    </div>)
}

export default Search