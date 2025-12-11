import React from 'react';
import { IoHomeOutline, IoAddCircleOutline, } from 'react-icons/io5';
import { HiOutlineBookOpen } from "react-icons/hi2";
import Link from 'next/link';


// Botões do Header
const menuItems = [
  { title: 'Início', icon: <IoHomeOutline />, gradientFrom: '#a955ff', gradientTo: '#ea51ff', url: '/' },
  { title: 'Trabalhe Conosco', icon: <IoAddCircleOutline />, url: '/TrabalheConosco'
, gradientFrom: '#56CCF2', gradientTo: '#2F80ED' },
  { title: 'Sobre Nós', icon: <HiOutlineBookOpen />, gradientFrom: '#FF9966', gradientTo: '#FF5E62', url: '/Sobre' },
];

export default function GradientMenu() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-dark">
      <ul className="flex gap-6">
        {menuItems.map(({ title, icon, gradientFrom, gradientTo, url }, idx) => (
          <li
            key={idx}
            style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo }}
            className="relative w-[32px] h-[32px] bg-transparent shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[180px] hover:shadow-none group cursor-pointer"
          >
            <Link 
              className="relative w-[32px] h-[32px] bg-transparent shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[180px] hover:shadow-none group cursor-pointer"
              href={url}>
              {/* Gradient background on hover */}
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
              {/* Blur glow */}
              <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>
              {/* Icon */}
              <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
                <span className="text-2xl text-gray-50">{icon}</span>
              </span>
              {/* Title */}
              <span className="absolute text-white uppercase tracking-wide text-sm transition-all duration-500 scale-0 group-hover:scale-100 delay-150">
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

