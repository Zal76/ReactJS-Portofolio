import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false); // untuk animasi muncul/hilang
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // CEK DEVICE MOBILE
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // < md
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (!isMobile) return; // desktop tidak terpengaruh

      setActive(true); // muncul saat scroll

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setActive(false); // hilang saat stop scroll
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <div className="Navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-4xl font-bold text-white">Portofolio</h1>
      </div>

      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed 
        left-1/2 -translate-x-1/2 md:translate-x-0 
        bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl
        md:bg-transparent transition-all duration-300 z-40

        ${
          isMobile
            ? active
              ? "top-0 opacity-100"
              : "-top-10 opacity-0"
            : "top-0 opacity-100" // DESKTOP TETAP TERLIHAT
        }
      `}
      >
        <li>
          <a href="#beranda" className="sm:text-lg font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#tentang" className="sm:text-lg font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#Tech Stack" className="sm:text-lg font-medium">
            Tech Stack
          </a>
        </li>
        <li>
          <a href="#proyek" className="sm:text-lg font-medium">
            Proyek
          </a>
        </li>
        <li>
          <a href="#kontak" className="sm:text-lg font-medium">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
