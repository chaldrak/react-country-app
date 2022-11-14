const triTable = (tab) => {
    for (let i = tab.length -1; i > 0; i--) {
        var check = true;
        for (let j = 0; j < i; j++) {
            if(tab[j+1] < tab[j]) {
                let temp = tab[j];
                tab[j] = tab[j+1];
                tab[j+1] = temp;
                check = false;
            }
        }
        if(check) break;
    }
    return tab;
};

export default triTable;