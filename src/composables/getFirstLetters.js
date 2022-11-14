const getFirstLetters = (countries) => {
    const firstLetters = [];
    countries.map((country) => {
        var letter = country.name.at(0).toUpperCase()
        letter = (letter === 'Å') ? 'A' : letter;
        if(!firstLetters.includes(letter)) firstLetters.push(letter);
    })
    return firstLetters;
};

export default getFirstLetters;