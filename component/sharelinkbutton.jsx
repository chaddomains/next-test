'use client'
import { useState } from "react";



export default function ShareLinkButton() {
    const [clicked, setClicked]= useState(false);
    const  handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
        console.log('clicked')
        setClicked(true);
        setTimeout(()=> setClicked(false), 2000)
    };
    return(
        <button onClick={handleClick}
        className="border px-2 py-1 my-2 text-slate-400 rounded hover:shadow-white shadow-md flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 mx-1 h-4">
  <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
  <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
</svg> {clicked ? ' Link coppied': ' Share Link'}
        </button>
    );
};


