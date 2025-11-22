import DataImage, { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 p-4 rounded-2xl w-fit"
          id="tentang">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <p>Bisa Karena Terbiasa</p>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi!, Saya Muhammad Rizal Ramdhani
          </h1>
          <p className="text-base/loose mb-6 opacity-80">
            Mahasiswa Pendidikan Teknik Informatika yang memiliki ketertarikan
            pada pengembangan aplikasi berbasis web dan mobile. Menguasai dasar
            HTML, CSS, JavaScript, PHP, dan MySQL, serta memiliki pengalaman
            dalam membangun antarmuka web dan mengelola data. Berkomitmen untuk
            terus belajar teknologi modern dan berkembang sebagai Full-Stack
            Developer.{" "}
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/cv/CV_Muhammad_Rizal_Ramdhani.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-900 p-4 rounded-2xl hover:bg-green-700 mr-4"
            >
              Download CV
              <i className="ri-download-line ri-lg"></i>
            </a>

            <a
              href="#proyek"
              className="bg-green-900 p-4 rounded-2xl hover:bg-green-700"
            >
              View Project
              <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* Tools Section */}
      <div className="tools mt-25" id="tools">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          id="Tech Stack"
        >
          Tech Stack
        </h1>

        <p
          className="text-justify leading-relaxed opacity-80
             w-full max-w-[900px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Saya menggunakan tools, framework, dan bahasa pemrograman ini untuk
          membangun aplikasi web yang responsive, scalable, dan mudah
          dikembangkan. Selain itu, saya juga memakai software desain untuk
          membuat UI sebelum proses development.
        </p>

        {/* Loop Kategori */}
        {Object.entries(listTools).map(([category, items]) => (
          <div key={category} className="mt-10">
            <h3
              className="text-2xl font-semibold capitalize mb-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-once="true"
            >
              {category.replace(/([A-Z])/g, " $1")}
            </h3>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {items.map((tool) => (
                <div
                  key={tool.id}
                  className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group transition"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-14 bg-zinc-800 p-1 rounded group-hover:bg-zinc-900"
                    loading="lazy"
                  />
                  <h4 className="font-bold">{tool.nama}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proyek Section */}
      <div
        className="proyek mt-15 py-10"
        id="proyek"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          Berikut ini beberapa proyek yang telah saya buat.
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-all flex flex-col"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img
                src={proyek.gambar}
                alt="Proyek Image"
                className="rounded-md mb-3"
                loading="lazy"
              />
              <h1 className="text-2xl font-bold my-3">{proyek.nama}</h1>
              <p className="text-base/loose mb-4 opacity-80">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proyek.tools.map((tool, index) => (
                  <span
                    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold text-sm"
                    key={index}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Tombol Lihat Proyek */}
              {proyek.link && (
                <a
                  href={proyek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all text-center w-full mt-auto"
                >
                  {proyek.type === "prototype"
                    ? "Lihat Prototype"
                    : "Lihat Proyek"}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Kontak Section */}
      <div
        className="kontak mt-10 sm:p-10 p-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        data-aos-once="true"
        id="kontak"
      >
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/rizalbwg123@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="10"
                placeholder="Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-800 p-3 w-full cursor-pointer rounded-lg border border-zinc-600 hover:bg-green-700"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
