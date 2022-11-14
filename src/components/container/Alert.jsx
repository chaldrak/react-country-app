const Alert = (props) => {
    const countries = props.data;
    return (
        <div className="h-16 z-40 max-w-max px-5 sticky top-[105px] flex mx-auto items-center border rounded-lg shadow-lg shadow-gray bg-dark-light" >
            <p className="text-center mx-auto text-2xl block">
                Currently, we have <b className="text-skyblue">{countries.length}</b> countries
            </p>
        </div>
    )
};

export default Alert;