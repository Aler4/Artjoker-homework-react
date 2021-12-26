
export function roundingNumber(number, round) {
 const roundNumber = parseFloat(Number(number).toFixed(Number(round)))
    return roundNumber;
}