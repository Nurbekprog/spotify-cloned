import { useState, useEffect } from 'react';

const useTracks = (playlistId) => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                });
                const data = await res.json();
                setTracks(data.tracks.items);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchTracks();
    }, [playlistId]);

    return tracks;
};

export default useTracks;