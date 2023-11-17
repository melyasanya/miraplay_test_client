import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getLength } from "../../redux/Games/GamesSelectors";
import { addGames, changeArrayLength } from "../../redux/Games/GamesSlice";
import { GamesList } from "../GamesList/GamesList";
import { GamesSort } from "../GamesSort/GamesSort";
import { Loader } from "../Loader/Loader";
import css from "./Games.module.css";

export const Games = () => {
  const [selectedGenre, setSelectedGenre] = useState("ALL");
  const [page, setPage] = useState(1);
  const [freshFirst, setFreshFirst] = useState(true);
  const dispatch = useDispatch();
  const gamesLength = useSelector(getLength);

  const getGames = () => {
    return axios.post("https://api.miraplay.cloud/games/by_page", {
      page,
      isFreshGamesFirst: freshFirst,
      genre: selectedGenre === "ALL" ? false : `${selectedGenre}`,
      gamesToShow: 9,
    });
  };

  const mutation = useMutation(getGames, {
    onSuccess: (data) => {
      dispatch(addGames(data.data.games));
      dispatch(changeArrayLength(data.data.gamesListLength));
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  const handleClickMore = async () => {
    await setPage((prevPage) => prevPage + 1);
    mutation.mutate();
  };

  return (
    <div className={css.content}>
      {mutation.isLoading && <Loader />}
      <GamesSort
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        setPage={setPage}
        mutation={mutation.mutate}
        setFreshFirst={setFreshFirst}
        freshFirst={freshFirst}
      />
      <GamesList />
      {gamesLength > 9 && gamesLength > page * 9 && (
        <button className={css.btnMore} onClick={handleClickMore}>
          Показати ще
        </button>
      )}
    </div>
  );
};
