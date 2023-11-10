export default function formatNumberWithSpaces(number: number, currency: string = "USD") {
  return new Intl.NumberFormat("en-In", { style: "currency", currency }).format(number);
}
