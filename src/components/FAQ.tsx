
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex w-full justify-between items-center text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-schoolmantic-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-schoolmantic-600" />
          )}
        </span>
      </button>
      <div
        className={cn(
          "mt-2 text-gray-600",
          isOpen ? "block animate-accordion-down" : "hidden"
        )}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Syarat Minimal Jumlah Siswa?",
      answer: (
        <p>
          Jumlah siswa minimal adalah 100. Namun, jika kurang dari 100, sekolah tetap dapat menggunakan layanan dengan biaya minimal Rp 300.000,- per bulan.
        </p>
      ),
    },
    {
      question: "Persiapan yang Diperlukan?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Mesin absensi (fingerprint atau deteksi wajah) dan pemasangannya di sekolah.</li>
          <li>Kabel LAN untuk menghubungkan mesin absensi ke router internet.</li>
          <li>Akses internet.</li>
          <li>Staf operator untuk mengoperasikan sistem.</li>
          <li>Pembayaran biaya bulanan.</li>
        </ul>
      ),
    },
    {
      question: "Langkah Selanjutnya bagi Sekolah yang Berminat?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Hubungi SchoolMantic melalui WA di 0811945222 dengan menyebutkan nama lengkap sekolah.</li>
          <li>SchoolMantic akan membuat grup WhatsApp yang terdiri dari tim sekolah dan tim mereka.</li>
          <li>Sekolah menyiapkan dan memasang mesin absensi, serta mendaftarkan data sidik jari atau wajah siswa.</li>
          <li>SchoolMantic akan membuatkan website aplikasi dengan subdomain nama sekolah dan memberikan aksesnya.</li>
          <li>Sekolah mengirimkan data siswa, termasuk NISN dan nomor HP wali siswa dalam format Excel.</li>
        </ul>
      ),
    },
    {
      question: "Perbedaan SchoolMantic dengan Aplikasi Lain?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Aplikasi lain biasanya dijual putus, memerlukan biaya besar di awal, dan perawatan sistem ditanggung sekolah.</li>
          <li>SchoolMantic tidak memerlukan biaya besar di awal; sekolah hanya membayar biaya operasional bulanan sesuai jumlah siswa.</li>
          <li>Perawatan server dan aplikasi ditangani oleh SchoolMantic; sekolah hanya memastikan mesin absensi terhubung ke internet.</li>
        </ul>
      ),
    },
    {
      question: "Ketersediaan Aplikasi Android untuk Wali Siswa?",
      answer: (
        <p>
          Selain notifikasi SMS/WhatsApp, tersedia aplikasi Android dengan logo dan nama sekolah. Biaya pembuatan aplikasi adalah Rp 1.000.000,- (sekali bayar), termasuk pemasangan di Google Playstore.
        </p>
      ),
    },
    {
      question: "Akses Data Kehadiran oleh Guru?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Pejabat sekolah, staf TU, dan guru dapat mengakses data kehadiran real-time melalui komputer atau HP yang terhubung internet.</li>
          <li>Wali kelas akan menerima notifikasi harian mengenai siswa yang tidak hadir atau terlambat.</li>
          <li>Kepala TU atau kepala sekolah akan mendapatkan pemberitahuan mengenai guru atau pegawai yang tidak hadir atau terlambat.</li>
        </ul>
      ),
    },
    {
      question: "Penggunaan untuk Bimbingan Belajar (Bimbel)?",
      answer: (
        <p>
          SchoolMantic dapat digunakan oleh Bimbel, dengan sensor seperti scan barcode, mesin sidik jari, atau deteksi wajah. Biaya untuk Bimbel adalah Rp 300.000,- per bulan, tanpa batasan jumlah siswa.
        </p>
      ),
    },
    {
      question: "Fitur Nilai dan Pembayaran?",
      answer: (
        <p>
          Saat ini, SchoolMantic hanya memiliki fitur absensi. Modul nilai dan sistem pembayaran siswa sedang dalam pengembangan.
        </p>
      ),
    },
    {
      question: "Persiapan oleh Vendor (SchoolMantic)?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Menyediakan alamat website khusus dengan subdomain nama sekolah.</li>
          <li>Menyediakan server hosting untuk website dan database kehadiran.</li>
          <li>Menyiapkan server WhatsApp dan modem SMS gateway, termasuk kartu perdana dan pulsa untuk pengiriman SMS.</li>
          <li>Sekolah dapat meminta penambahan atau perubahan fitur SchoolMantic, seperti format laporan bulanan atau fitur lain terkait absensi.</li>
        </ul>
      ),
    },
  ];

  return (
    <section id="faq" className="py-20 bg-schoolmantic-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-lg text-gray-700">
            Temukan jawaban atas pertanyaan umum tentang SchoolMantic
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8 reveal">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-4">
            Ada pertanyaan lain yang tidak terjawab di sini?
          </p>
          <Button className="bg-schoolmantic-600 hover:bg-schoolmantic-700">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
