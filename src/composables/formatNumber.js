const formatNumber = (number) => {
    return new Intl.NumberFormat('fr-FR').format(number);
};

export default formatNumber;