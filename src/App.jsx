import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LikedSongs from "./pages/LikedSongs"
import News from "./pages/News"
import SinglePlaylist from "./pages/SinglePlaylist"
import { Provider } from "react-redux";

import { CLIENT_ID, CLIENT_SECRET, TOKEN } from './db/index.js';
import { useEffect } from 'react';
import Library from "./pages/Library.jsx"
import store from "./app/store.js"
import AllPlaylists from "./pages/AllPlaylists.jsx"
import YourPlaylist from "./pages/YourPlaylist.jsx"

const App = () => {
  const getToken = async () => {
    fetch(TOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(CLIENT_ID + ":" + CLIENT_SECRET)}`,
      },
      body: "grant_type=client_credentials",
    })
      .then((res) => res.json()).then((data) => {
        localStorage.setItem("access_token", JSON.stringify(`${data.token_type} ${data.access_token}`));
      }).catch((error) => console.log(error.meassage))
  }
  useEffect(() => {
    getToken()
  }, [])

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked-songs" element={<LikedSongs />} />
          <Route path="/library" element={<Library />} />
          <Route path="/news" element={<News />} />
          <Route path="/playlist/:id" element={<SinglePlaylist />} />
          <Route path="/all-playlists" element={<AllPlaylists />} />
          <Route path="/your-playlist" element={<YourPlaylist />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App