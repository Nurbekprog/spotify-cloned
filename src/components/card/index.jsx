import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
    const navigate = useNavigate()
    const goPlaylist = (playlist, id) => {
        localStorage.setItem("single-playlist", JSON.stringify(playlist))
        navigate(`/playlist/${id}`);
    }
    return (
        <div onClick={() => goPlaylist(item, item.id)} key={item.id} className="text-white p-5 bg-zinc-950 rounded-md cursor-pointer transition-all hover:bg-zinc-900 w-1/4">
            <img src={item.images[0].url} className="w-full h-full rounded-md" alt="" />
            <div className="content mt-6">
                <h2 className="line-clamp-1 text-xl capitalize font-semibold">{item.name}</h2>
                <p className="mt-2 text-zinc-500">{item.owner.display_name}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    item: PropTypes.object
}

export default Card