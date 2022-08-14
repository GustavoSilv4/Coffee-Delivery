export function convertNumberToStringWithComma(number: number): string {
  const numberToString = String(number.toFixed(2))
  return numberToString.replace('.', ',')
}
