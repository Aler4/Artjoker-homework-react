export const getApiCurrency = fetch(' https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11', {
    method: 'GET',
}).then(res => res.json()).catch(err => console.log(err))

export function roundingNumber(number, round) {
 const roundNumber = parseFloat(Number(number).toFixed(Number(round)))
    return roundNumber;
}