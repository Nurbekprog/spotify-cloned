import { useState, useEffect } from 'react';
import { TOP_MIXES } from '../db';

const useTopMixes = () => {
    const [topMixes, setTopMixes] = useState([]);

    useEffect(() => {
        const fecthTopMixes = async () => {
            try {
                const res = await fetch(TOP_MIXES, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                });
                const data = await res.json();
                setTopMixes(data.playlists.items);
            } catch (error) {
                console.log(error.message);
            }
        };
        fecthTopMixes();
    }, []);

    return topMixes;
};

export default useTopMixes;