// export default function formatNumberWithSpaces(number: number): string {
//   try {
//     const parts = number.toFixed(2).toString().split(".");
//     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
//     return parts.join(".");
//   } catch (err) {
//     return "";
//   }
// }
export default function formatNumberWithSpaces(number: number, currency: string = "USD") {
  return new Intl.NumberFormat("en-In", { style: "currency", currency }).format(number);
}
