const all = (prom1, prom2) => {
    return new Promise( (resolve, reject) => {
        var counter = 0;
        var datas = {};
        prom1.then( (data) => {
            ++counter;
            datas.prom1 = data;
            if (counter === 2) resolve([datas.prom1, datas.prom2]);
        } );
        prom2.then( (data) => {
            ++counter;
            datas.prom2 = data;
            if (counter === 2) resolve([datas.prom1, datas.prom2]);
        } );
    });
};

all(getPromise1(), getPromise2()).then(console.log);