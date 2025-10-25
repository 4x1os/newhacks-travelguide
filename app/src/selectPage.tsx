import Card from "./countrycard"

import canadaImage from "./assets/pexels-djpetty2-756790.jpg"
import japanImage from "./assets/pexels-bagus41-1440476.jpg"
import franceImage from "./assets/pexels-pixabay-161901.jpg"
import brazilImage from "./assets/pexels-athena-6580703.jpg"
import egyptImage from "./assets/pexels-davidmceachan-71241.jpg"
import australiaImage from "./assets/pexels-patrick-995764.jpg"

function SelectPage(){
    return (<div className="center m-20">
        <h1 className="text-black-500 mb-10 ">Select a country to start: </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            <Card title="Canada" image={canadaImage} tags={["Budget"]}/>
            <Card title="Japan" image={japanImage} tags={["Budget", "Hot", "Crowded", "Urban"]}/>
            <Card title="Egypt" image={egyptImage} tags={["Budget", "Crowded"]}/>
            <Card title="France" image={franceImage} tags={["Hot", "Crowded"]}/>
            <Card title="Australia" image={australiaImage} tags={["Budget"]}/>
            <Card title="Brazil" image={brazilImage} tags={["Rural"]}/>
        </div>
    </div>)
}

export default SelectPage