import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";
import List from "./component/List";
import WithListLoading from "./component/WithListLoading";
import axios from 'axios';

function App() {
  
  const ListLoad = WithListLoading(List);
  const [appState, setAppState] = useState({ loading: false, repos: null });

  useEffect(async () =>{
    
    setAppState({loading : true})
    
    const apiUrl = 'https://api.github.com/users/saltnlight/repos';
    await fetch(apiUrl)
    .then((response) => response.json())
    .then((repos) => {
      setAppState({loading : false, repos : repos });
    })
  }, [setAppState]);

  //Make GET request
  // axios( {
  //   method : 'get',
  //   url : 'https://...'
  // }

  // axios( {
  //   method : 'post',
  //   url : '/login',

  //   data : {
  //     userName : 'tosin',
  //     password : 'sinto'
  //   }
  // }

  return (
    <div className="App">
      <div className="container">
        <h1>My Repositories</h1>
      </div>

      <div className="repo-container ">
        <ListLoad isLoading={appState.loading} repos = {appState.repos} />   
      </div>

    </div>
  );
}

export default App;
