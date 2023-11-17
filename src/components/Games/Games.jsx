import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { addGames } from "../../redux/Games/GamesSlice";
import { GamesList } from "../GamesList/GamesList";
import { GamesSort } from "../GamesSort/GamesSort";
import css from "./Games.module.css";

export const Games = () => {
  const [selectedGenre, setSelectedGenre] = useState("ALL");
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const getGames = () => {
    return axios.post("https://api.miraplay.cloud/games/by_page", {
      page,
      isFreshGamesFirst: true,
      genre: false,
      gamesToShow: 9,
    });
  };

  const mutation = useMutation(getGames, {
    onSuccess: (data) => {
      dispatch(addGames(data.data.games));
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  const handleClickMore = async () => {
    await new Promise((resolve) => {
      setPage((prevPage) => {
        resolve(prevPage);
        return prevPage + 1;
      });
    });

    mutation.mutate();
  };

  return (
    <div className={css.content}>
      <GamesSort
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <GamesList />
      <button className={css.btnMore} onClick={handleClickMore}>
        Показати ще
      </button>
    </div>
  );
};
