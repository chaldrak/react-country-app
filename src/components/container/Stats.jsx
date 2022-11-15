import Alert from "./Alert";
import Card from "./Card";
import useFetch from "../../server/useFetch";
import getFirstLetters from "../../composables/getFirstLetters";
import triTable from "../../composables/triData";
import getSum from "../../composables/getSum";
import Footer from "../footer/Footer";
import StatRow from "./StatRow";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const url = "https://restcountries.com/v2/all";

const RenderStats = (props) => {
    const countries = props.data;
    const query = props.query;
    const searches = countries.filter((c) => c.name.toLowerCase().includes(query));
    const tenHighest = query ? triTable(searches).reverse() : triTable(countries).reverse();
    const world = {name: "World", population: getSum(countries)};

    useEffect(() => {
        if(query) {
            toast.info(`${countries.length}  satisfied the search criteria`, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [tenHighest]);
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
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
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
    const query = useOutletContext();

    return (
        <div className='pl-0 mx-10 lg:mx-0 lg:pl-[20rem] text-lightgray'>
            <div className="py-5 max-x-3xl mx-auto">
                <Alert data={data} />
                <div className="pt-10 relative">
                    <div className="my-5">
                        <div className="h-[55vh] p-5 overflow-auto w-full border rounded-lg items-center flex">
                        {
                            isLoading ? <Loading /> : <RenderStats query={query} data={data} />
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