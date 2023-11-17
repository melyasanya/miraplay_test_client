import axios from "axios";

export const registerUser = (data) => {
  return axios.post(
    "https://miraplay-test-server-ppli.onrender.com/api/users/register",
    data
  );
};

export const login = (data) => {
  return axios.post(
    "https://miraplay-test-server-ppli.onrender.com/api/users/login",
    data
  );
};

export const getGames = (page, freshFirst, selectedGenre) => {
  return axios.post("https://api.miraplay.cloud/games/by_page", {
    page,
    isFreshGamesFirst: freshFirst,
    genre: selectedGenre === "ALL" ? false : `${selectedGenre}`,
    gamesToShow: 9,
  });
};
