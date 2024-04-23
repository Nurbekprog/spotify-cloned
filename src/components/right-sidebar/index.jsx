import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { toggleRightSidebar } from '../../app/appSlice';
import { PanelLeftOpen, PanelRightOpen } from "lucide-react"
import sidebarImg from "../../assets/Frame 6.png";
const RightSidebar = () => {
    const dispatch = useDispatch();
    const isRightSidebarOpen = useSelector((state) => state.app.isRightSidebarOpen);

    const handleRightSidebarToggle = () => {
        dispatch(toggleRightSidebar());
    };
    return (
        <aside className={`h-full w-1/6 bg-black p-2 flex flex-col gap-2 transition-all fixed top-0 right-0 ${isRightSidebarOpen ? "" : "w-28"}`}>

            <div>
            <img src={sidebarImg} alt="" />
                    
                    
                    
            </div>
            <div className={`bottom bg-zinc-900 rounded-lg p-2 pt-3 overflow-auto ${isRightSidebarOpen ? "w-full" : "w-full py-4 px-0"} h-screen flex items-start justify-start flex-col`}>
                <button onClick={handleRightSidebarToggle} className={`w-full flex justify-start ${isRightSidebarOpen ? "" : "justify-center"}`}>
                    {isRightSidebarOpen ? <PanelLeftOpen color="gray" size={26} /> : <PanelRightOpen color="gray" size={26} />}
                </button>
            </div>
        </aside>
    )
}

RightSidebar.propTypes = {
    rightSidebar: PropTypes.bool,
    setRightSidebar: PropTypes.func,
}

export default RightSidebar