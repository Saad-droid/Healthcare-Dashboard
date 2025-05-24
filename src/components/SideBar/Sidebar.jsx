import { navigationItems } from '../../data/navigationData';
import './Sidebar.css';
import { MdDashboardCustomize } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaCalendarPlus } from "react-icons/fa";

import { IoSettingsOutline } from "react-icons/io5";







const iconMap = {
  dashboard: <MdDashboardCustomize/>,
  history: <FaHistory/>, 
  calendar: <FaCalendarAlt/>,
  chart: <TfiStatsUp/>,
  appointment: <FaCalendarPlus />
  
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
          <div className="logo">
                <span className="logo-health">Health</span>
                <span className="logo-care">care.</span>
              </div>
      <div className="sidebar-content">
        <h3 className="sidebar-title">
          General
        </h3>
        
        <nav className="nav-menu">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href="/#"
              className='nav-item'
            >
              <span className="nav-icon">{iconMap[item.icon] || '📋'}</span>
              <span>{item.title}</span>
            </a>
          ))}
           <a  href="/#" className='nav-item'>Tools</a>
          <a   href="/#" className='nav-item'>  <IoChatbubbleEllipsesSharp /> Chat  </a>
          <a   href="/#" className='nav-item'> <FaPhone />  support</a>
        </nav>
        <span className='set'>  <IoSettingsOutline /> Setting</span>
      </div>
    </aside>
  );
};

export default Sidebar;
