function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <div className="flex h-10 w-full items-center justify-center bg-primary text-white">
        Developed by Greg Minezzi ©&nbsp;<span>{year}</span>
      </div>
    );
  }
  
  export default Footer;