import Alert from "./Alert";
import Card from "./Card";
import useFetch from "../../server/useFetch";
import getFirstLetters from "../../composables/getFirstLetters";
import triTable from "../../composables/triBulles";
import Footer from "../footer/Footer";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const url = "https://restcountries.com/v2/all";

const CountriesRender = (props) => {
    const countries = props.countries;
    return (
        countries.map((country, index) => {
            return (
                <Card key={index} item={country} />
            )
        })
    )
};

const RenderCountryByFirstLetter = (props) => {
    const query = props.query
    const countries = query ? props.data.filter((c) => c.name.toLowerCase().includes(query)) : props.data;
    const letters = getFirstLetters(countries);

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
    }, [query]);
    return (
        triTable(letters).map((letter, index) => {
            const count = countries.filter((c) => {
                var currentLetter = (c.name.at(0).toUpperCase() === 'Å') ? 'A' : c.name.at(0).toUpperCase();
                if(currentLetter === letter) return c;
            })
            return (
                <div className="pt-16 relative" key={index}>
                    <hr className="border-semi-gray border-t" />
                    <div className="absolute h-[30px] w-[30px] flex items-center bg-gray rounded-sm top-[50px]">
                        <h1 className="text-skyblue mx-auto block">{ letter }</h1>
                    </div>
                    <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <CountriesRender countries={count} />
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
        })
    )
};

const Loading = () => {
    return (
        <div className="my-16 flex items-center">
            <img className="block mx-auto h-[50vh]" src="https://static.wixstatic.com/media/0190a5_6e9d1dda28e84a64af9894ca3dccd8a5~mv2.gif" alt="" />
        </div>
    )
}

const Container = () => {
    const {data, isLoading} = useFetch(url);
    const query = useOutletContext();

    return (
        <div className='pl-0 mx-10 lg:mx-0 lg:pl-[20rem] text-lightgray' >
            <div className="py-5 max-x-3xl mx-auto">
                <Alert data={data} />
                {
                    isLoading ? <Loading /> : <RenderCountryByFirstLetter query={query} data={data} />
                }
            </div>
            <Footer />
        </div>
    )
};

export default Container;