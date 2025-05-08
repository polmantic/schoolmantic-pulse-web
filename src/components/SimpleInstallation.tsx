
import { CheckCircle } from "lucide-react";

const SimpleInstallation = () => {
  return (
    <section id="installation" className="py-20 bg-schoolmantic-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Simple Installation" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">Instalasi cepat dan mudah</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">Koneksi internet standar</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">Pemantauan real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6 reveal">
            <h2 className="text-3xl font-bold text-gradient">TIDAK RIBET</h2>
            <p className="text-xl text-gray-700">
              Instalasi gampang, cukup pasang mesin absensi (fingerprint atau deteksi wajah) di sekolah, lalu sambungkan kabel LAN ke switch internet sekolah. Selesai.
            </p>
            <p className="text-gray-600">
              Selanjutnya kami yang siapkan aplikasi di server online, sekolah bisa akses aplikasi dari password yang kami berikan. Data kehadiran dapat dilihat saat itu juga (REAL TIME).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleInstallation;
