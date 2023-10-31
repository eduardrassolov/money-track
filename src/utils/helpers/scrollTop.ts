export default function scrollTop() {
  document.querySelector("section")?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
