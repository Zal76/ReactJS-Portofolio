import HeroImage from "/assets/hero-img.webp";

const DataImage = {
  HeroImage,
};

export default DataImage;

// ======================= TOOLS =======================
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/PHP.png";
import Tools13 from "/assets/tools/HTML.png";
import Tools14 from "/assets/tools/MYSQL.png";
import Tools15 from "/assets/tools/Laravel.png";
import Tools16 from "/assets/tools/CSS.png";
import Tools17 from "/assets/tools/VITE.png";
import Tools18 from "/assets/tools/JAVA.png";

export const listTools = {
  "Programming Languages": [
    { id: 12, nama: "PHP", gambar: Tools12 },
    { id: 18, nama: "Java", gambar: Tools18 },
    { id: 1, nama: "JavaScript", gambar: Tools6 },
  ],

    "Markup & Styling": [
    { id: 13, nama: "HTML", gambar: Tools13 },
    { id: 16, nama: "CSS", gambar: Tools16 },
    { id: 4, nama: "Tailwind CSS", gambar: Tools4 },
     { id: 5, nama: "Bootstrap", gambar: Tools5 },
  ],

  "Framework & Libraries": [
    { id: 2, nama: "React JS", gambar: Tools2 },
    { id: 3, nama: "Next JS", gambar: Tools3 },
    { id: 15, nama: "Laravel", gambar: Tools15 },
  ],

  "Build & Tooling": [
    { id: 6, nama: "Visual Studio Code", gambar: Tools1 },
    { id: 8, nama: "GitHub", gambar: Tools8 },
     { id: 17, nama: "Vite", gambar: Tools17 }
  ],

  design: [
    { id: 10, nama: "Canva", gambar: Tools10 },
    { id: 11, nama: "Figma", gambar: Tools11 },
  ],

    "Database & Storage": [
    { id: 14, nama: "MySQL", gambar: Tools14 },
  ],
  
};

// ======================= PROYEK =======================
import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "SPK AHP-TOPSIS: Pemilihan Bimbel",
    desk: "Aplikasi web untuk membantu siswa memilih bimbingan belajar terbaik menggunakan metode AHP dan TOPSIS.",
    tools: ["Laravel", "HTML", "TailwindCSS", "Javascript", "PHP", "MySQL", "Vite"],
    link: "https://github.com/Zal76/SPK-AHP-TOPSIS.git",
    dad: "100",
    type: "code"
  },

  {
    id: 2,
    gambar: Proyek2,
    nama: "Laporku: Aplikasi Pengaduan Fasilitas Publik",
    desk: "Aplikasi Mobile yang digunakan sebagai Platfom Aduan Fasilitas Publik oleh Masyarakat.",
    tools: ["Figma"],
    link: "https://www.figma.com/proto/keYZgo8Fn87n4I4Y6BvXwT/Low-And-High-FIdelity?page-id=13%3A15&node-id=17-124&p=f&       viewport=-771%2C237%2C0.36&t=hS3orzZmm2EfqOAB-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=34%3A21",
    dad: "200",
    type: "prototype"
  },

  {
    id: 3,
    gambar: Proyek3,
    nama: "Sistem Manajemen Data Siswa (SIMSIS)",
    desk: "Aplikasi CRUD berbasis web untuk mengelola biodata, nilai, dan data akademik siswa.",
    tools: ["HTML", "CSS", "MySQL", "PHP", "Bootstrap"],
    link: "https://github.com/Zal76/PendataanSiswa.git",
    dad: "300",
    type: "code"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "ApotekKu,Sistem Informasi Apotek",
    desk: "Aplikasi manajemen apotek untuk transaksi, data pelanggan, dan stok obat berbasis PHP native dan MySQL.",
    tools: ["HTML", "CSS", "PHP", "MySQL"],
    link: "https://github.com/Zal76/apotekku",
    dad: "400",
    type: "code"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "To-Do List",
    desk: "Website To-Do List yang memungkinkan pengguna menambahkan, menandai selesai, mengedit, dan menghapus tugas .",
    tools: ["HTML", "Tailwind", "CSS", "Javascript"],
    link: "https://github.com/Zal76/TodoList.git",
    dad: "500",
    type: "code"
  },
];
