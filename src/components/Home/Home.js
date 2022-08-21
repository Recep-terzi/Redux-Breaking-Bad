import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Masonry from "react-masonry-css";
import { fetchCharacters } from "../../redux/charactersSlice";
import "./Home.Module.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { Link } from "react-router-dom";
const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const error = useSelector((state) => state.characters.error);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const nextPage = useSelector((state) => state.characters.page);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }
  return (
    <div>
      <h1>Characters</h1>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to="/character/2">
              <img
                src={character.img}
                alt={character.name}
                className="character-img"
              />
              <p className="character-name">{character.name}</p>
            </Link>
          </div>
        ))}
      </Masonry>
      <div style={{ padding: 30, textAlign: "center" }}>
        {isLoading && <Loading />}
        {hasNextPage && !isLoading && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load More : ({nextPage})
          </button>
        )}
      </div>{" "}
    </div>
  );
};

export default Home;
