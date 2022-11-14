import Alert from "./Alert";
import Card from "./Card";
import useFetch from "../../server/useFetch";
import getFirstLetters from "../../composables/getFirstLetters";
import triTable from "../../composables/triData";
import getSum from "../../composables/getSum";
import Footer from "../footer/Footer";
import StatRow from "./StatRow";

const url = "https://restcountries.com/v2/all";

const RenderCountryByFirstLetter = (props) => {
    const countries = props.data;
    const tenHighest = triTable(countries).reverse();
    const world = {name: "World", population: getSum(countries)};
    return (
        <div className="h-full mx-auto flex items-center w-full text-white">
            <div className="block mx-auto w-full space-y-2">
                <StatRow item={world} world={world.population} />
                {
                    tenHighest.map((item, index) => {
                        return (<StatRow key={index} item={item} world={world.population} />)
                    })
                }
            </div>
        </div>
    )
};

const Loading = () => {
    return (
        <div className="block mx-auto">
            <img className="h-[10vh]" src="https://www.ign.gob.ar/geodesiaapp/ntrip-registro/img/loader.gif" alt="" />
        </div> 
    )
}

const Stats = () => {
    const {data, isLoading} = useFetch(url);
    console.log(useFetch(url));
    return (
        <div className='pl-0 mx-10 lg:mx-0 lg:pl-[20rem] text-lightgray'>
            <div className="py-5 max-x-3xl mx-auto">
                <Alert data={data} />
                <div className="pt-10 relative">
                    <div className="my-5">
                        <div className="h-[55vh] p-5 overflow-auto w-full border rounded-lg items-center flex">
                        {
                            isLoading ? <Loading /> : <RenderCountryByFirstLetter data={data} />
                        }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Stats;