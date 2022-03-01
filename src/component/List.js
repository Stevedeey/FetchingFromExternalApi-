import React from "react";

const List = (props) => {
  const { repos } = props;

  if (!repos || repos.length === 0) return <p>No response, sorry!</p>;

  return (
    <ul>
      <h2>Available public repositories</h2>

      {repos.map((repo) => {
        return (
          <li key={repo.id}>
            <span>{repo.name}</span>
            <span>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
