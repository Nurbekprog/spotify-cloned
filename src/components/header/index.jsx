import { ChevronLeft, ChevronRight, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import DropDown from "../ui/dropdown";
import useFeaturedPlaylists from "../../hooks/useFeaturedPlaylists";
import playIcon from "/play.svg";
import { useNavigate } from "react-router-dom";
import "./style.scss"

const Header = () => {

    const navigate = useNavigate()
    const goPlaylist = (playlist, id) => {
        localStorage.setItem("single-playlist", JSON.stringify(playlist))
        navigate(`/playlist/${id}`);
    }
    const featuredPlaylist = useFeaturedPlaylists();

    return (
        <header className="text-white py-3 bg-gradient-to-b from-indigo-800 pt-3 px-5 pb-20 rounded-md">
            <div className="top flex justify-between">
                <div className="left flex items-center gap-3">
                    <button className="bg-zinc-800 p-1 flex justify-center items-center transition-all rounded-full hover:scale-110">
                        <ChevronLeft color="white" className="mx-auto" size={26} />
                    </button>
                    <button className="bg-zinc-800 p-1 flex justify-center items-center transition-all rounded-full hover:scale-110">
                        <ChevronRight color="white" className="mx-auto" size={26} />
                    </button>
                </div>
                <div className="right flex items-center gap-4">
                    <button className="bg-white text-black px-3 py-1 rounded-2xl font-semibold transition-all hover:scale-105">Explore Premium</button>
                    <button className="bg-black text-white px-3 py-1 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        Install App
                    </button>
                    <Link to={"/news"} className="bg-zinc-800 p-1.5 flex justify-center items-center transition-all rounded-full hover:scale-110 hover:text-white">
                        <Bell size={24}/>
                    </Link>
                    <DropDown />
                </div>
            </div>
            <div className="bottom mt-20">
                <h1 className="text-5xl font-semibold">Good Afternoon</h1>
                <div className="cards grid grid-cols-3 mt-8 gap-4">
                    {featuredPlaylist.slice(0, 6).map((item) => (
                        <div onClick={() => goPlaylist(item, item.id)} key={item.id} className="flex items-center cursor-pointer bg-slate-600 rounded-md gap-5 relative w-full card transition-all">
                            <img src={item.images[0].url} alt="" className="w-16 h-16 rounded-s-md" />
                            <span className="capitalize font-semibold line-clamp-1">{item.name}</span>
                            <button className="header-playlist-play-btn absolute right-0 hidden transition-none hover:scale-110">
                                <img width="50px" height="50px" src={playIcon} alt="" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header