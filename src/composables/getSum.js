const getSum = (tab) => {
    var sum = 0;
    tab.forEach(element => {
        sum += element?.population;
    });

    return sum;
};

export default getSum;