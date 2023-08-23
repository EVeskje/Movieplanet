export const baseApiUrl = "https://eirikveskje.com/wp-json/wc/store";
export const endpointApiUrl = "/products";

export async function getData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    if (json) {
      return json;
    }
  } catch (error) {
    console.log("Ooops! An error occurred...", error);
    throw new Error(error);
  }
}

