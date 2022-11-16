import formatNumber from "../../composables/formatNumber";

const StatRow = (props) => {
    const country = props.item;
    const worldPopulation = props.world;
    return (
        <div className="grid grid-cols-6 gap-2 items-center">
            <div className="col-span-2">
                <p className="text-right">
                    {country?.name === 'United States of America' ? 'USA' : country?.name}
                </p>
            </div>
            <div 
                className="h-5 col-span-3 bg-skyblue rounded-sm" 
                style={{width: `${country?.population * 100/worldPopulation}%`}}
            />
            <div className="col-span-1">
                <p>{ formatNumber(country?.population) }</p>
            </div>
        </div>
    )
};

export default StatRow;