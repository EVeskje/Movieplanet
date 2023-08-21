import { url } from "./apiService.js";
import { id } from "./const.js";

const prodUrl = url + id;

export async function getMovie() {
  try {
    const answer = await fetch(prodUrl);
    const result = await answer.json();
    return result;
  } catch (error) {
    console.log("Oops! An error occurred...", error);
    throw new Error(error);
  }
}

getMovie();


