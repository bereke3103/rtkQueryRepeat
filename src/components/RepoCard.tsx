import React, { useState } from 'react';
import { IRepo } from '../models/models';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFavorite, setIsFavorite] = useState<boolean>(
    favourites.includes(repo.html_url)
  );
  function addToFavourite(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFavorite(true);
  }
  function removeFromFavourite(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFavorite(false);
  }

  return (
    <div className="border py-3 px-5 rounded cursor-pointer mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold">{repo.forks}</span>
          <br />
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>

        {!isFavorite && (
          <button
            style={{ color: 'white' }}
            onClick={addToFavourite}
            className="py-2 px-4 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all"
          >
            Add
          </button>
        )}

        {isFavorite && (
          <button
            style={{ color: 'white' }}
            onClick={removeFromFavourite}
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
};

export default RepoCard;
