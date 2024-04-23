import Header from "../components/header"
import Sidebar from "../components/sidebar"
import RightSidebar from "../components/right-sidebar";
import useTopMixes from "../hooks/useTopMixes";
import useMadeForYou from "../hooks/useMadeForYou";
import useRecentlyPlayed from "../hooks/useRecentlyPlayed";
import useJumpBackIn from "../hooks/useJumpBackIn";
import useUniquelyYours from "../hooks/useUniquelyYours";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Card from "../components/card";

const Home = () => {
  const navigate = useNavigate()
  const topMixes = useTopMixes();
  const madeForYou = useMadeForYou();
  const recentlyPlayed = useRecentlyPlayed();
  const jumpBackIn = useJumpBackIn();
  const uniquelyYours = useUniquelyYours();
  const isLeftSidebarOpen = useSelector((state) => state.app.isLeftSidebarOpen);
  const isRightSidebarOpen = useSelector((state) => state.app.isRightSidebarOpen);

  const goAllPlaylist = (allPlaylist) => {
    localStorage.setItem("all-playlists", JSON.stringify(allPlaylist));
    navigate(`/all-playlists`);
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className={`m-2 bg-zinc-950 ${isLeftSidebarOpen ? "w-4/6 ml-80 mx-auto" : "w-5/6 ml-28 mx-auto"} ${isRightSidebarOpen ? "w-4/6 mr-80 mx-auto" : "w-5/6 mr-28 mx-auto"} ${!isLeftSidebarOpen && !isRightSidebarOpen ? "w-11/12" : ""}`}>
        <Header />
        <div className="playlists flex flex-col gap-14">
          <div className="top-mixes flex flex-col gap-4 px-5">
            <div className="top-heading flex items-center justify-between">
              <h1 className="text-white font-semibold text-3xl">Top Mixes</h1>
              <button className="text-zinc-500 font-semibold uppercase" onClick={() => goAllPlaylist(topMixes)}>See all</button>
            </div>
            <div className="cards flex items-center gap-6">
              {isRightSidebarOpen && isLeftSidebarOpen ? (topMixes.slice(0, 4).map((item) => (
                <Card key={item.id} item={item} />
              ))) : (topMixes.slice(0, 6).map((item) => (
                <Card key={item.id} item={item} />
              )))}
            </div>
          </div>
          <div className="made-for-you flex flex-col gap-4 px-5">
            <div className="top-heading flex items-center justify-between">
              <h1 className="text-white font-semibold text-3xl">Made for you</h1>
              <button className="text-zinc-500 font-semibold uppercase" onClick={() => goAllPlaylist(madeForYou)}>See all</button>
            </div>
            <div className="cards flex items-center gap-6">
              {isRightSidebarOpen && isLeftSidebarOpen ? (madeForYou.slice(0, 4).map((item) => (
                <Card key={item.id} item={item} />
              ))) : (madeForYou.slice(0, 6).map((item) => (
                <Card key={item.id} item={item} />
              )))}
            </div>
          </div>
          <div className="recently-played flex flex-col gap-4 px-5">
            <div className="top-heading flex items-center justify-between">
              <h1 className="text-white font-semibold text-3xl">Recently played</h1>
              <button className="text-zinc-500 font-semibold uppercase" onClick={() => goAllPlaylist(recentlyPlayed)}>see all</button>
            </div>
            <div className="cards flex items-center gap-6">
              {isRightSidebarOpen && isLeftSidebarOpen ? (recentlyPlayed.slice(0, 4).map((item) => (
                <Card key={item.id} item={item} />
              ))) : (recentlyPlayed.slice(0, 6).map((item) => (
                <Card key={item.id} item={item} />
              )))}
            </div>
          </div>
          <div className="jump-back-in flex flex-col gap-4 px-5">
            <div className="top-heading flex items-center justify-between">
              <h1 className="text-white font-semibold text-3xl">Jump back in</h1>
              <button className="text-zinc-500 font-semibold uppercase" onClick={() => goAllPlaylist(jumpBackIn)}>see all</button>
            </div>
            <div className="cards flex items-center gap-6">
              {isRightSidebarOpen && isLeftSidebarOpen ? (jumpBackIn.slice(0, 4).map((item) => (
                <Card key={item.id} item={item} />
              ))) : (jumpBackIn.slice(0, 6).map((item) => (
                <Card key={item.id} item={item} />
              )))}
            </div>
          </div>
          <div className="uniquely-yours flex flex-col gap-4 px-5">
            <div className="top-heading flex items-center justify-between">
              <h1 className="text-white font-semibold text-3xl">Uniquely yours</h1>
              <button className="text-zinc-500 font-semibold uppercase" onClick={() => goAllPlaylist(uniquelyYours)}>see all</button>
            </div>
            <div className="cards flex items-center gap-6">
              {isRightSidebarOpen && isLeftSidebarOpen ? (uniquelyYours.slice(0, 4).map((item) => (
                <Card key={item.id} item={item} />
              ))) : (uniquelyYours.slice(0, 6).map((item) => (
                <Card key={item.id} item={item} />
              )))}
            </div>
          </div>
        </div>
      </main>
      <RightSidebar />
    </div>
  )
}

export default Home