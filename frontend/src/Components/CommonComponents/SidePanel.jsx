import React, { useEffect, useState } from 'react';
import { Link, NavLink, useMatches } from 'react-router-dom';
import { AiFillAccountBook, AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai';
import AdminDashboard from '../../Routes/AdminRoutes/AdminDashboard';
import { GrContact, GrDashboard, GrLogout, GrUserWorker } from 'react-icons/gr';
import { IoLogOut } from 'react-icons/io5';
import { MdOutlineSecurity } from "react-icons/md";
import { GiChest, GiDoctorFace, GiPerson, GiPersonInBed, GiSergeant } from 'react-icons/gi';
import { BsPerson } from 'react-icons/bs';
import { IoMdLogOut } from 'react-icons/io';

const SidePanel = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
    setCurrentPath(window.location.pathname);
  };

  const links = [
    { id: 1, text: 'Dashboard', to: '/dashboard', icon: <GrDashboard /> },
    { id: 2, text: 'Doctors', to: '/doctors', icon: <GiDoctorFace /> },
    { id: 2, text: 'Assistant Doctor', to: '/assistantDoctor', icon: <GrUserWorker /> },
    { id: 3, text: 'Patient', to: '/patients', icon: <GiPersonInBed /> },
    { id: 4, text: 'Receptionist', to: '/receptionist', icon: <BsPerson /> },
    { id: 5, text: 'Consultant', to: '/consultant', icon: <AiOutlineMail /> },
    { id: 6, text: 'Enqiury', to: '/enquiry', icon: <GrContact /> },
    { id: 7, text: 'Income & Expn', to: '/income_expenses', icon: <AiFillAccountBook /> },
    { id: 8, text: 'Inventory', to: '/main/inventory/inventory/addNew', icon: <GiChest /> },
    { id: 9, text: 'Permissions', to: '/permissions', icon: <MdOutlineSecurity /> },
  ];

  return (
    <div className={`SidePanel bg-blue-400 h-full text-black transition-all duration-300 ${isCollapsed ? 'w-14' : 'w-48'} overflow-hidden flex flex-col items-center shadow-md rounded`}>
      <button onClick={toggleCollapse} className="p-2">
        {isCollapsed ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        )}
      </button>
      <ul className={`${isCollapsed && 'flex flex-col'}`}>
        {links.map((link) => (
          <li key={link.id} className="flex items-center rounded-md w-100">
            <NavLink to={link.to} className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-gray-50 rounded-md w-full' : '')}>
              <div className="flex items-center p-2 rounded-md">
                {link.icon}
                {!isCollapsed && <span className="ml-3">{link.text}</span>}
              </div>
            </NavLink>
          </li>
        ))}
        <li className="flex items-center rounded-md w-100 mt-10">
          <button
            onClick={(e) => {
              window.sessionStorage.clear();
              window.location.reload();
            }}
            className="p-1 flex items-center px-2 rounded-md text-white bg-red-500 font-bold"
          >
            <IoMdLogOut />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

// Your Main and AllRoutes components here...

export default SidePanel;
