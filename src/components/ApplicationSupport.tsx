
import { Server, Shield, Smartphone } from "lucide-react";
import { Button } from "./ui/button";

const ApplicationSupport = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Urusan Aplikasi Urusan Kami</h2>
          <p className="text-lg text-gray-700">
            Selanjutnya kami yang siapkan aplikasi di server online, sekolah bisa akses aplikasi dari password yang kami berikan. Termasuk server WhatsApp dan akun WhatsApp dari kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 border border-schoolmantic-100 hover:border-schoolmantic-300 transition-all reveal">
            <div className="flex justify-center mb-6">
              <Server className="text-schoolmantic-600" size={48} />
            </div>
            <h3 className="text-xl font-medium text-center mb-4 text-schoolmantic-800">Server Management</h3>
            <p className="text-gray-600 text-center">
              Kami menangani semua aspek server, termasuk pemeliharaan, keamanan, dan pembaruan sehingga Anda dapat fokus pada pendidikan.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-schoolmantic-100 hover:border-schoolmantic-300 transition-all reveal">
            <div className="flex justify-center mb-6">
              <Smartphone className="text-schoolmantic-600" size={48} />
            </div>
            <h3 className="text-xl font-medium text-center mb-4 text-schoolmantic-800">WhatsApp Gateway</h3>
            <p className="text-gray-600 text-center">
              Kami menyediakan dan mengelola server WhatsApp untuk pengiriman notifikasi otomatis kepada wali siswa.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-schoolmantic-100 hover:border-schoolmantic-300 transition-all reveal">
            <div className="flex justify-center mb-6">
              <Shield className="text-schoolmantic-600" size={48} />
            </div>
            <h3 className="text-xl font-medium text-center mb-4 text-schoolmantic-800">Data Security</h3>
            <p className="text-gray-600 text-center">
              Keamanan data adalah prioritas kami, dengan perlindungan informasi siswa dan sekolah menggunakan standar keamanan industri terbaik.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-schoolmantic-600 hover:bg-schoolmantic-700">
            Konsultasikan Kebutuhan Anda
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSupport;
