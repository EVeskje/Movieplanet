const queryString = document.location.search;
const params = new URLSearchParams(queryString);
export const id = params.get("id");
