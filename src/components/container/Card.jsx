const Card = (props) => {
    const country = props.item
    const name = country.name;
    const capital = country.capital;
    const population = country.population;
    const flag = country.flags["png"];
    const languages = [];
    country.languages.filter((lang) => {languages.push(lang.name)});
    const currencies = [];
    country.currencies?.filter((cur) => {currencies.push(cur.name)});
    return (
        <div className="h-auto group">
            <div className="h-full border bg-gray group-hover:bg-dark-light cursor-default group-hover:shadow-md group-hover:shadow-skyblue group-hover:border-light rounded-lg shadow-lg">
                <div className="p-10 md:p-5">
                    <div className="mx-auto bg-white group-hover:rounded-lg flex overflow-hidden items-center h-auto md:h-[100px] w-full ">
                        <img className="block h-full w-full" src={flag} alt="" />
                    </div>
                    <h2 className="text-center text-skyblue my-4 group-hover:underline">{ name.toUpperCase() }</h2>
                    <div className="text-white">
                        <p>
                            Capital : <span className="text-lightgray">{ capital }</span>
                        </p>
                        <p>
                            Languages : <span className="text-lightgray">{ languages.join(', ') }</span>
                        </p>
                        <p>
                            Population : <span className="text-lightgray">{ population }</span>
                        </p>
                        <p>
                            Currency : <span className="text-lightgray">{ currencies.join(', ') }</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;