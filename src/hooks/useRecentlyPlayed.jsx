import { useState, useEffect } from 'react';
import { RECENTLY_PLAYED } from '../db';

const useRecentlyPlayed = () => {
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);

    useEffect(() => {
        const fetchMadeForYou = async () => {
            try {
                const res = await fetch(RECENTLY_PLAYED, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                });
                const data = await res.json();
                setRecentlyPlayed(data.playlists.items);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchMadeForYou();
    }, []);

    return recentlyPlayed;
};

export default useRecentlyPlayed;
