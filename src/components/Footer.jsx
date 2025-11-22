const Footer = () => {
  return (
  <div className="mt-10 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
    <h1 className="text-2xl font-bold">Portfolio</h1>
    <div className="flex gap-7">
      <a href="#beranda">Beranda</a>
      <a href="#tentang">Tentang</a>
       <a href="#Tech Stack">Tech Stack</a>
      <a href="#proyek">Proyek</a>
    </div>
    <div className="flex items-center gap-3">
      <a href="https://github.com/Zal76">
        <i className="ri-github-fill ri-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/muhammadrizalramdhani/">
        <i className="ri-linkedin-fill ri-2x"></i>
      </a>
      <a href="https://www.instagram.com/rizal.rmd_/">
        <i className="ri-instagram-fill ri-2x"></i>
      </a>
      <a href="https://www.tiktok.com/@rizal.rmd_">
        <i className="ri-tiktok-fill ri-2x"></i>
      </a>
    </div>
  </div>
  )
}

export default Footer