function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <div className="flex h-10 w-full items-center justify-center bg-primary text-white">
        Developed by&nbsp;<a href="http://www.github.com/minezzig" className="underline">Greg Minezzi</a>&nbsp;©&nbsp;<span>{year}</span>
      </div>
    );
  }
  
  export default Footer;