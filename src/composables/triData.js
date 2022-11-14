const triTable = (tab) => {
    for (let i = tab.length -1; i > 0; i--) {
        var check = true;
        for (let j = 0; j < i; j++) {
            if(tab[j+1].population < tab[j].population) {
                let temp = tab[j];
                tab[j] = tab[j+1];
                tab[j+1] = temp;
                check = false;
            }
        }
        if(check) break;
    }
    return tab.length > 10 ? tab.slice(tab.length - 10, tab.length + 1) : tab;
};

export default triTable;