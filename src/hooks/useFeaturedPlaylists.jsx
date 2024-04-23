import { useState, useEffect } from 'react';
import { FEATURED_PLAYLIST } from '../db';

const useFeaturedPlaylists = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchFeaturedPlaylists = async () => {
            try {
                const res = await fetch(FEATURED_PLAYLIST, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                });
                const data = await res.json();
                setPlaylists(data.playlists.items);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchFeaturedPlaylists();
    }, []);

    return playlists;
};

export default useFeaturedPlaylists;
