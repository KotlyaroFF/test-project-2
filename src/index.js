const main = (operations) => {
    const buy = 'BUY';
    const afks = 'AFKS';
    let AFKS = 0;
    let GAZP = 0;
    const gazp = 'GAZP';
    let SBER = 0;
    const sber = 'SBER';

    operations.forEach((element) => {

        if (element.ticker === afks) {
            if (element.type === buy) {
                AFKS = AFKS - (element.qnt * element.price);
            } else {
                AFKS = AFKS + (element.qnt * element.price) 
            };
        };

        if (element.ticker === gazp) {
            if (element.type === buy) {
                GAZP = GAZP - (element.qnt * element.price);
            } else {
                GAZP = GAZP + (element.qnt * element.price) 
            };
        }

        if (element.ticker === sber) {
            if (element.type === buy) {
                SBER = SBER - (element.qnt * element.price);
            } else {
                SBER = SBER + (element.qnt * element.price) 
            };
        }

    });

    const absProfit = AFKS + GAZP + SBER;

     return {
        absProfit:  absProfit,
        portfolio: {AFKS, GAZP, SBER}
    };
}

module.exports = main;


