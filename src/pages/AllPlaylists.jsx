import { useNavigate } from "react-router-dom";

const AllPlaylists = () => {
    const navigate = useNavigate()

    const goPlaylist = (playlist, id) => {
        localStorage.setItem("single-playlist", JSON.stringify(playlist))
        navigate(`/playlist/${id}`);
    }
    const allPlaylists = JSON.parse(localStorage.getItem("all-playlists"));
    return (
        <div className="flex flex-col gap-3">
            {allPlaylists.map((playlist, i) => (
                <div className="text-white bg-red-500 p-2 w-40" key={i} onClick={() => goPlaylist(playlist, playlist.id)}>{playlist.name}</div>
            ))}
        </div>
    )
}

export default AllPlaylists