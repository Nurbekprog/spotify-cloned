import { useState, useEffect } from 'react';
import { MADE_FOR_YOU } from '../db';

const useMadeForYou = () => {
    const [madeForYou, setMadeForYou] = useState([]);

    useEffect(() => {
        const fetchMadeForYou = async () => {
            try {
                const res = await fetch(MADE_FOR_YOU, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                });
                const data = await res.json();
                setMadeForYou(data.playlists.items);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchMadeForYou();
    }, []);

    return madeForYou;
};

export default useMadeForYou;
