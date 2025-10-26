"use client"
import Card from "./countrycard"
import { useState } from "react"
import canadaImage from "./assets/pexels-djpetty2-756790.jpg"
import japanImage from "./assets/pexels-bagus41-1440476.jpg"
import franceImage from "./assets/pexels-pixabay-161901.jpg"
import brazilImage from "./assets/pexels-athena-6580703.jpg"
import egyptImage from "./assets/pexels-davidmceachan-71241.jpg"
import australiaImage from "./assets/pexels-patrick-995764.jpg"
import Search from "./searchbar"
import Attraction from "./attractioncard"

import { Roboto } from 'next/font/google';
const customFont = Roboto({
  weight: ['100', '300'], // Specify the weights you plan to use
  subsets: ['latin'],
  display: 'swap', // Recommended for better performance
});


interface AttractionData {
    Title: string;
    Location: string; // Assuming Location exists based on earlier context
    Description: string;
    Tags: string;
    Considerations: string; // Made optional if it's not always returned by the core API
    Hazards: string; // Made optional if it's not always returned by the core API
}

function SelectPage(){
    const [locked, setLocked] = useState<boolean>(false);
    const [selected, setSelected] = useState<string | null>(null);
    const [results, setResults] = useState<AttractionData[]>([]);
    const onCardSelectHandler = (cardName : string) => { 
        setSelected(cardName)
    }

    const setPromptHandler = async(prompt: string)=>{
        try {
            setLocked(true)
            const encodedPrompt = encodeURIComponent(prompt);
            const apiUrl = `https://newhacks-travel-api.vercel.app/testapi/?key_project=${selected}&prompt=${encodedPrompt}`;
            const response = await fetch(apiUrl);
            console.log(response)
            if (!response.ok) {
                // If FastAPI returned 404/500, throw an error
                setLocked(false)
                throw new Error(`API returned status ${response.status}: ${response.statusText}`);
            }

            // Since your backend returns JSON, parse the response
            setResults([]);
            const data = await response.json();
            console.log(data)
            setResults(data)
            console.log(results)
            // Update state with the received list of attractions

        } catch (err) {
            console.error("API Call Failed:", err);
            setLocked(false)
        }
    }

    const headerTextSelect = "Select a country to start:"
    const headerTextSelected = "Great! Now let's build our plan"


    return (<div className="center m-20">
        <h1 className={`${customFont.className} text-5xl m-12`}> {(selected) ? headerTextSelected : headerTextSelect}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            <Card title="Canada" image={canadaImage} tags={["Budget"]} onCardSelect={onCardSelectHandler} selectedCountry={selected}/>
            <Card title="Japan" image={japanImage} tags={["Budget", "Hot", "Crowded", "Urban"]} onCardSelect={onCardSelectHandler} selectedCountry={selected}/>
            <Card title="Egypt" image={egyptImage} tags={["Budget", "Crowded"]} onCardSelect={onCardSelectHandler} selectedCountry={selected}/>
            <Card title="France" image={franceImage} tags={["Hot", "Crowded"]} onCardSelect={onCardSelectHandler} selectedCountry={selected}/>
            <Card title="Australia" image={australiaImage} tags={["Budget"]} onCardSelect={onCardSelectHandler} selectedCountry={selected}/>
            <Card title="Brazil" image={brazilImage} tags={["Rural"]} onCardSelect={onCardSelectHandler} selectedCountry={selected}/>
        </div>
        {(selected)?(<Search setQuery={setPromptHandler} freeze={locked}/>):(<div></div>)}
        {(results)?
            (<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3">           
                {results.map((item , index : number) => (
                    <Attraction key={index} title={item.Title} description={item.Description} tags={item.Tags} advisory={item.Considerations} warnings={item.Hazards}/>
                ))}
            </div>)
            :(<div></div>)}
    </div>)
}
export default SelectPage