import { useState, useEffect } from 'react';

const useArtists = (playlistId) => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const res = await fetch(`https://api.spotify.com/v1/artists/${playlistId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                });
                const data = await res.json();
                setArtists(data.tracks.items);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchArtists();
    }, [playlistId]);

    return artists;
};

export default useArtists;