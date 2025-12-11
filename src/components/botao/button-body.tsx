import React from 'react';
import { IoHomeOutline, IoVideocamOutline, IoCameraOutline, IoShareSocialOutline, IoHeartOutline } from 'react-icons/io5';
import Image from "next/image";
import Link from 'next/link';


// Botões do Header
const menuItems = [
  { title: 'Instagram', icon: (<Image src="/assets/ui/insta-branco.png" alt="Instagram" width={24} 
  height={24} />), gradientFrom: '#a955ff', gradientTo: '#ea51ff', url: 'https://www.instagram.com/patosburguer_ofc/?utm_source=ig_web_button_share_sheet&igsh=MTRuY2Q1enU4dmVneA%3D%3D#' },
  { title: 'Facebook', icon: (<Image src="/assets/ui/facebook-branco.png" alt="Facebook" width={24} 
  height={24} />), gradientFrom: '#56CCF2', gradientTo: '#2F80ED', url: 'https://www.facebook.com/patos.burguers.5' },
  { title: 'Whatsapp', icon: (<Image src="/assets/ui/whats-branco.png" alt="Whatsapp" width={24} 
  height={24} />), gradientFrom: '#80FF72', gradientTo: '#7EE8FA', url: 'https://api.whatsapp.com/send/?phone=5521974561305&text&type=phone_number&app_absent=0' },
];

export default function GradientMenuBody() {
  return (
    <div className="flex justify-center items-center bg-dark">
      <ul className="flex gap-6">
        {menuItems.map(({ title, icon, gradientFrom, gradientTo, url }, idx) => (
          <li
            key={idx}
            style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo }}
            className="relative w-[48px] h-[48px] bg-transparent shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[180px] hover:shadow-none group cursor-pointer"
          >
            <Link 
              className="relative w-[48px] h-[48px] bg-transparent shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[180px] hover:shadow-none group cursor-pointer"  
              href={url} // Usa a URL do objeto
            >
              {/* Gradient background on hover */}
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
              {/* Blur glow */}
              <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>
              {/* Icon */}
              <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
                <span className="text-2xl text-gray-500">{icon}</span>
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
