export const countries = [
  { _id: "5b21ca3eeb7f6fbccd471822", name: "China" },
  { _id: "5b21ca3eeb7f6fbccd471828", name: "France" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Great Britain" },
  { _id: "5b21ca3eeb7f6fbccd471826", name: "Japan" },
  { _id: "5b21ca3eeb7f6fbccd471834", name: "South Korea" },
  { _id: "5b21ca3eeb7f6fbccd471824", name: "Turkey" },
  { _id: "5b21ca3eeb7f6fbccd471818", name: "United States" }
];

export function getCountries() {
  return countries.filter(c => c);
}
