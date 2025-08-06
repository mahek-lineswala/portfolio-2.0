// Links.jsx
import React from 'react';

function Links() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 justify-items-center text-white my-12">
        <a href="https://github.com/mahek-lineswala" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center font-bold hover:scale-110 transition-transform duration-200">
          <img src="/icons/icon_github_light.png" alt="github" className="w-16 h-16 mb-4 shadow-xl"/>
          <code>Github</code>
        </a>
        <a href="https://www.linkedin.com/in/mahek-lineswala-1618b9293/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center font-bold hover:scale-110 transition-transform duration-200">
          <img src="/icons/icon_linkdin_dark.png" alt="linkedin" className="w-16 h-16 mb-4"/>
          <code>Linkedin</code>
        </a>
        <a href="https://www.instagram.com/_.mekss._/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center font-bold hover:scale-110 transition-transform duration-200">
          <img src="/icons/icon_instagram_dark.png" alt="instagram" className="w-16 h-16 mb-4"/>
          <code>Instagram</code>
        </a>
       
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center font-bold hover:scale-110 transition-transform duration-200 mt-2">
          <img src="/icons/icon_twitter_dark.png" alt="twitter" className="w-12 h-12 mb-8"/> 
          <code>Twitter</code>
        </a>
         <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center font-bold hover:scale-110 transition-transform duration-200 mt-2">
          <img src="/icons/icon_discord_dark.png" alt="discord" className="w-16 h-16 mb-4"/>
          <code>Discord</code>
        </a>
        <a href="https://codeforces.com/profile/Mek12" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center font-bold hover:scale-110 transition-transform duration-200 mt-2">
          <img src="/icons/icon_code_dark.png" alt="code" className="w-16 h-16 mb-4"/>
          <code>Code</code>
        </a>
      </div>
    </>
  );
}

export default Links;
