import React from "react";

function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <div className="flex h-10 w-full items-center justify-center bg-primary text-white">
        Developed by <a href="http://www.github.com/minezzig">Greg Minezzi</a> ©&nbsp;<span>{year}</span>
      </div>
    );
  }
  
  export default Footer;