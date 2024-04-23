import useTracks from "../hooks/useTracks";
import { useDispatch, useSelector } from "react-redux";
import { addToLikedSongs, removeFromLikedSongs,  setActiveSong } from "../app/appSlice";
import Sidebar from "../components/sidebar";
import RightSidebar from "../components/right-sidebar";
import DropDown from "../components/ui/dropdown";
import { ChevronLeft, ChevronRight, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const SinglePlaylist = () => {
  const playlistInfo = JSON.parse(localStorage.getItem("single-playlist"));
  const tracks = useTracks(playlistInfo.id);
  const dispatch = useDispatch();
  const likedSongs = useSelector(state => state.app.likedSongs);
  const activeSong = useSelector(state => state.app.activeSong);
  const isLeftSidebarOpen = useSelector((state) => state.app.isLeftSidebarOpen);
  const isRightSidebarOpen = useSelector((state) => state.app.isRightSidebarOpen);


  const addToLikedSongsHandler = (track) => {
    dispatch(addToLikedSongs(track));
  };

  const removeFromLikedSongsHandler = (trackId) => {
    dispatch(removeFromLikedSongs(trackId));
  };
  const setActiveTrack = (trackUri) => {
    dispatch(setActiveSong(trackUri));
  }



  return (
    <div className="flex justify-center">
      <Sidebar />
      <main className={`m-2 bg-zinc-950 mb-20 ${isLeftSidebarOpen ? "w-4/6 ml-80 mx-auto" : "w-5/6 ml-28 mx-auto"} ${isRightSidebarOpen ? "w-4/6 mr-80 mx-auto" : "w-5/6 mr-28 mx-auto"} ${!isLeftSidebarOpen && !isRightSidebarOpen ? "w-11/12" : ""}`}>
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
                <Bell size={24} />
              </Link>
              <DropDown />
            </div>
          </div>
          <div className="bottom mt-20 flex items-end gap-6">
            <div className="image">
              <img src={playlistInfo.images[0].url} alt="" className="rounded-xl" />
            </div>
            <div className="content flex flex-col">
              <span className="uppercase font-semibold">Public playlist</span>
              <h1 className="capitalize font-bold text-7xl mt-7 mb-10">{playlistInfo.name}</h1>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-xl">Julia Wolf, ayokay, Khalid <span className="text-zinc-500 text-xl font-semibold">and more</span></p>
                <p className="font-semibold text-xl text-zinc-500"><span className="text-white text-xl font-semibold">Made for you</span> | <span className="text-zinc-500 text-xl font-semibold">{tracks.length} songs, 7hr 17 min</span></p>
              </div>
            </div>
          </div>
        </header>
        <div className="top px-5">
          <div className="left flex items-center gap-5">
            <button>
              <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_131_2989)">
                  <circle cx="52" cy="48" r="36" fill="#65D36E" />
                  <path d="M65.2865 48.5123C66.1517 48.0266 66.1517 46.8122 65.2865 46.3264L45.8178 35.3968C44.9525 34.911 43.8709 35.5182 43.8709 36.4898V58.349C43.8709 59.3205 44.9525 59.9277 45.8178 59.442L65.2865 48.5123Z" fill="black" />
                </g>
                <defs>
                  <filter id="filter0_d_131_2989" x="0" y="0" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_131_2989" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_131_2989" result="shape" />
                  </filter>
                </defs>
              </svg>

            </button>
            <button>
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_131_2995)">
                  <circle cx="26" cy="26" r="17.75" stroke="white" strokeWidth="2.5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M34.8388 28.9289L26.8839 36.8839C26.3957 37.372 25.6043 37.372 25.1161 36.8839L17.1612 28.9289C16.673 28.4408 16.673 27.6493 17.1612 27.1612C17.6493 26.673 18.4408 26.673 18.9289 27.1612L24.75 32.9822L24.75 17C24.75 16.3096 25.3096 15.75 26 15.75C26.6904 15.75 27.25 16.3096 27.25 17L27.25 32.9822L33.0711 27.1612C33.5592 26.673 34.3507 26.673 34.8388 27.1612C35.327 27.6493 35.327 28.4408 34.8388 28.9289Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_131_2995">
                    <rect width="52" height="52" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_131_2994)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.5715 22C12.5715 23.7358 11.1644 25.1429 9.42862 25.1429C7.69287 25.1429 6.28577 23.7358 6.28577 22C6.28577 20.2643 7.69287 18.8572 9.42862 18.8572C11.1644 18.8572 12.5715 20.2643 12.5715 22ZM25.1429 22C25.1429 23.7358 23.7358 25.1429 22.0001 25.1429C20.2643 25.1429 18.8572 23.7358 18.8572 22C18.8572 20.2643 20.2643 18.8572 22.0001 18.8572C23.7358 18.8572 25.1429 20.2643 25.1429 22ZM34.5715 25.1429C36.3072 25.1429 37.7143 23.7358 37.7143 22C37.7143 20.2643 36.3072 18.8572 34.5715 18.8572C32.8357 18.8572 31.4286 20.2643 31.4286 22C31.4286 23.7358 32.8357 25.1429 34.5715 25.1429Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_131_2994">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </button>
          </div>
        </div>
        <div className="px-5 mt-10 flex flex-col gap-4">
          {tracks.map((item, i) => {
            const isTrackInLikedSongs = likedSongs.some(song => song.id === item.track.id);
            return (
              <div key={i} className="text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <img src={item.track.album.images[0].url} alt="" width={60} height={60} className="rounded-md" />
                  </div>
                  <div className="flex flex-col">
                    <span onClick={() => setActiveTrack(item.track.preview_url)} className="font-semibold hover:underline cursor-pointer">{item.track.name}</span>
                    <span className="text-zinc-500">{item.track.artists[0].name}</span>
                  </div>
                </div>
                <span className="text-zinc-500">{item.track.album.name}</span>
                <span className="text-zinc-500">{item.added_at.split("T")[0]}</span>
                <div className="actions flex items-center gap-2">
                  {isTrackInLikedSongs ? (
                    <button onClick={() => removeFromLikedSongsHandler(item.track.id)} className="text-white"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_3494_1070)">
                        <path d="M14.0009 6.03963C16.4673 3.74352 20.2787 3.81973 22.6548 6.28786C25.0299 8.75708 25.1118 12.6895 22.9026 15.2546L13.9988 24.5L5.09703 15.2546C2.88787 12.6895 2.97082 8.75055 5.34482 6.28786C7.72303 3.823 11.5271 3.74025 14.0009 6.03963Z" fill="#63CF6C" />
                      </g>
                      <defs>
                        <clipPath id="clip0_3494_1070">
                          <rect width="28" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    </button>
                  ) : (
                    <button onClick={() => addToLikedSongsHandler(item.track)} className="text-white">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_3494_1070)">
                          <path d="M14.0009 6.03963C16.4673 3.74352 20.2787 3.81973 22.6548 6.28786C25.0299 8.75708 25.1118 12.6895 22.9026 15.2546L13.9988 24.5L5.09703 15.2546C2.88787 12.6895 2.97082 8.75055 5.34482 6.28786C7.72303 3.823 11.5271 3.74025 14.0009 6.03963Z" fill="gray" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3494_1070">
                            <rect width="28" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  )}
                  
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <RightSidebar />
      <audio controls autoPlay className={`fixed w-75 bottom-0 ${activeSong ? "fixed w-75 bottom-0" : "fixed w-75 bottom-0"}`}>
        <source src="" type="audio/mpeg" />
        {activeSong && <source src={activeSong} type="audio/mpeg" />}
      </audio>
    </div>
  );
};

export default SinglePlaylist;
