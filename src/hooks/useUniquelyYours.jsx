import { useState, useEffect } from 'react';
import { UNIQUELY_YOURS } from '../db';

const useUniquelyYours = () => {
    const [uniquelyYours, setUniquelyYours] = useState([]);

    useEffect(() => {
        const fetchUniquelyYours = async () => {
            try {
                const res = await fetch(UNIQUELY_YOURS, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                });
                const data = await res.json();
                setUniquelyYours(data.playlists.items);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchUniquelyYours();
    }, []);

    return uniquelyYours;
};

export default useUniquelyYours;
