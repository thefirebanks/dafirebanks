export function convertToDate(dateLike) {
  return (new Date(dateLike)).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })
}