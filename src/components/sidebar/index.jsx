import { NavLink } from "react-router-dom"
import { PanelLeftOpen, PanelRightOpen } from "lucide-react"
import useFeaturedPlaylists from "../../hooks/useFeaturedPlaylists";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleLeftSidebar } from '../../app/appSlice';
import "./style.scss"

const Sidebar = () => {
    const dispatch = useDispatch();
    const isLeftSidebarOpen = useSelector((state) => state.app.isLeftSidebarOpen);

    const handleLeftSidebarToggle = () => {
        dispatch(toggleLeftSidebar());
    };

    const featuredPlaylist = useFeaturedPlaylists();
    const navigate = useNavigate()
    const goPlaylist = (playlist, id) => {
        localStorage.setItem("single-playlist", JSON.stringify(playlist))
        navigate(`/playlist/${id}`);
    }

    return (
        <aside className={`h-full w-1/6 bg-black p-2 flex flex-col gap-2 transition-all fixed top-0 left-0 ${isLeftSidebarOpen ? "" : "w-28"}`}>
            
            <div className={`top bg-zinc-900 rounded-lg p-4 ${isLeftSidebarOpen ? "w-full" : "w-full py-4 px-0"}`}>
                <ul className="flex flex-col gap-5">
                    <li className="w-full menu-item">
                        <NavLink to={"/"} className={`w-full flex items-center gap-4 text-zinc-500 transition-all ${isLeftSidebarOpen ? "" : "justify-center"}`}>
                            <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.9167 27.9136V10.3487L16.5036 4.25261L6.08333 10.3948V27.9136H11.6389V21.0368C11.6389 19.3084 13.038 17.9072 14.7639 17.9072H18.2361C19.962 17.9072 21.3611 19.3084 21.3611 21.0368V27.9136H26.9167ZM27.9583 30C28.5336 30 29 29.5329 29 28.9568V9.75018C29 9.37949 28.8036 9.03665 28.484 8.84957L17.0275 2.14259C16.7018 1.95191 16.2986 1.95251 15.9734 2.14417L4.51329 8.89932C4.19525 9.08679 4 9.42878 4 9.79835V28.9568C4 29.5329 4.46637 30 5.04167 30H12.6805C13.2558 30 13.7222 29.5329 13.7222 28.9568V21.0368C13.7222 20.4606 14.1886 19.9936 14.7639 19.9936H18.2361C18.8114 19.9936 19.2778 20.4606 19.2778 21.0368V28.9568C19.2778 29.5329 19.7442 30 20.3195 30H27.9583Z" fill="rgb(113, 113, 113)" />
                            </svg>
                            <span className={`font-semibold hover:text-white ${isLeftSidebarOpen ? "" : "hidden"}`}>Home</span>
                        </NavLink>
                    </li>
                    <li className="w-full menu-item">
                        <NavLink to={"/library"} className={`w-full flex items-center gap-4 text-zinc-500 transition-all ${isLeftSidebarOpen ? "" : "justify-center"}`}>
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="3" width="3" height="26" rx="1.5" fill="rgb(113, 113, 113)" />
                                <rect x="11" y="3" width="3" height="26" rx="1.5" fill="rgb(113, 113, 113)" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5 6.67524V26.5191H26.5V9.76681L21.5 6.67524ZM20.5288 3.1517C19.8627 2.73984 19 3.21512 19 3.99394V28.0076C19 28.5557 19.4477 29 20 29H28C28.5523 29 29 28.5557 29 28.0076V8.94045C29 8.59781 28.8219 8.2794 28.5288 8.09821L20.5288 3.1517Z" fill="rgb(113, 113, 113)" />
                            </svg>
                            <span className={`font-semibold hover:text-white ${isLeftSidebarOpen ? "" : "hidden"}`}>Your Library</span>

                        </NavLink>
                    </li>
                    <li className="w-full menu-item">
                        <NavLink to={"/your-playlist"} className={`w-full flex items-center gap-4 text-zinc-500 transition-all ${isLeftSidebarOpen ? "" : "justify-center"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-music"><path d="M21 15V6" /><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /><path d="M12 12H3" /><path d="M16 6H3" /><path d="M12 18H3" /></svg>
                            <span className={`font-semibold hover:text-white ${isLeftSidebarOpen ? "" : "hidden"}`}>Your Playlist</span>
                        </NavLink>
                    </li>
                    <li className="w-full menu-item">
                        <NavLink to={"/liked-songs"} className={`w-full flex items-center gap-4 text-zinc-500 transition-all ${isLeftSidebarOpen ? "" : "justify-center"}`}>
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="2" fill="url(#paint0_linear_416_1905)" />
                                <path d="M16.0006 10.158C17.6448 8.56071 20.1858 8.61373 21.7699 10.3307C23.3532 12.0484 23.4078 14.784 21.9351 16.5684L15.9992 23L10.0647 16.5684C8.59191 14.784 8.64721 12.0439 10.2299 10.3307C11.8154 8.616 14.3514 8.55844 16.0006 10.158Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_416_1905" x1="1" y1="1" x2="32" y2="30.5" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3822EA" />
                                        <stop offset="1" stopColor="#C7E9D7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className={`font-semibold hover:text-white ${isLeftSidebarOpen ? "" : "hidden"}`}>Liked Songs</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={`bottom bg-zinc-900 rounded-lg p-2 pt-3 overflow-auto ${isLeftSidebarOpen ? "w-" : "w-full py-4 px-0"} h-screen flex items-end justify-start flex-col`}>
                <button onClick={handleLeftSidebarToggle} className={`w-full flex justify-end ${isLeftSidebarOpen ? "" : "justify-center"}`}>
                    {isLeftSidebarOpen ? <PanelRightOpen color="gray" size={26} /> : <PanelLeftOpen color="gray" size={26} />}
                </button>
                <ul className="flex flex-col w-full mt-3">
                    {featuredPlaylist.map((item) => (
                        <div onClick={() => goPlaylist(item, item.id)} to={"/playlist"} className={`text-white flex items-center gap-4 capitalize font-medium p-2 cursor-pointer rounded-md hover:bg-zinc-800 ${isLeftSidebarOpen ? "" : "flex items-center justify-center"}`} key={item.id}>
                            {isLeftSidebarOpen ? item.name : ""}
                        </div>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar