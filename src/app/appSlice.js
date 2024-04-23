import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likedSongs: JSON.parse(localStorage.getItem("likedSongs")) || [],
    library: JSON.parse(localStorage.getItem("library")) || [],
    playlist: JSON.parse(localStorage.getItem("playlist")) || [],
    isLeftSidebarOpen: true,
    isRightSidebarOpen: true,
    activeSong: null,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addToLibrary(state, action) {
            state.library.push(action.payload);
            localStorage.setItem("library", JSON.stringify(state.library));
        },
        removeFromLibrary(state, action) {
            state.library = state.library.filter(item => item.id !== action.payload);
            localStorage.setItem("library", JSON.stringify(state.library));
        },
        addToLikedSongs(state, action) {
            state.likedSongs.push(action.payload);
            localStorage.setItem("likedSongs", JSON.stringify(state.likedSongs));
        },
        removeFromLikedSongs(state, action) {
            state.likedSongs = state.likedSongs.filter(song => song.id !== action.payload);
            localStorage.setItem("likedSongs", JSON.stringify(state.likedSongs));
        },
        addToPlaylist(state, action) {
            state.playlist.push(action.payload);
            localStorage.setItem("playlist", JSON.stringify(state.playlist));
        },
        removeFromPlaylist(state, action) {
            state.playlist = state.playlist.filter(song => song.id !== action.payload);
            localStorage.setItem("playlist", JSON.stringify(state.playlist));
        },
        toggleLeftSidebar(state) {
            state.isLeftSidebarOpen = !state.isLeftSidebarOpen;
        },
        toggleRightSidebar(state) {
            state.isRightSidebarOpen = !state.isRightSidebarOpen;
        },
        setActiveSong(state, action) {
            state.activeSong = action.payload;
        }
    },
});

export const { addToLibrary, removeFromLibrary, addToLikedSongs, removeFromLikedSongs, addToPlaylist, removeFromPlaylist, toggleLeftSidebar, toggleRightSidebar, setActiveSong } = appSlice.actions;
export const appReducer = appSlice.reducer;