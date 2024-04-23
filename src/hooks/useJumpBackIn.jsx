import { useState, useEffect } from 'react';
import { JUMP_BACK_IN } from '../db';

const useJumpBackIn = () => {
    const [jumpBackIn, setJumpBackIn] = useState([]);

    useEffect(() => {
        const fetchJumpBackIn = async () => {
            try {
                const res = await fetch(JUMP_BACK_IN, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                });
                const data = await res.json();
                setJumpBackIn(data.playlists.items);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchJumpBackIn();
    }, []);

    return jumpBackIn;
};

export default useJumpBackIn;
