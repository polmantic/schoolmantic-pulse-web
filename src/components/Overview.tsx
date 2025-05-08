
import { Fingerprint, MessageCircle, UserCheck } from "lucide-react";

const Overview = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Gambaran</h2>
          <p className="text-lg text-gray-700">
            SchoolMantic adalah aplikasi absensi siswa sekolah, yang langsung terhubung ke server aplikasi dan otomatis mengirimkan whatsapp ke wali siswa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 card-shadow transition-transform hover:scale-105 reveal">
            <div className="bg-schoolmantic-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <UserCheck className="text-schoolmantic-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-schoolmantic-800">Absensi Manual Web</h3>
            <p className="text-gray-600">
              Input kehadiran siswa melalui platform web yang mudah diakses oleh wali kelas untuk pengelolaan absensi yang praktis.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 card-shadow transition-transform hover:scale-105 reveal">
            <div className="bg-schoolmantic-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-schoolmantic-600" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
                <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
                <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
                <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
                <rect x="7" y="7" width="10" height="10" rx="1"></rect>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-schoolmantic-800">Absensi Kartu Siswa</h3>
            <p className="text-gray-600">
              Sistem absensi dengan kartu siswa menggunakan sensor RFID, barcode, atau QR code untuk kehadiran yang cepat dan efisien.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 card-shadow transition-transform hover:scale-105 reveal">
            <div className="bg-schoolmantic-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Fingerprint className="text-schoolmantic-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-schoolmantic-800">Absensi Biometrik</h3>
            <p className="text-gray-600">
              Teknologi sidikjari, deteksi wajah, atau telapak tangan untuk verifikasi kehadiran yang akurat dan aman.
            </p>
          </div>

          <div className="md:col-span-3 mt-8 bg-schoolmantic-50 rounded-lg p-8 card-shadow reveal">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <img
                  src="/placeholder.svg"
                  alt="SchoolMantic Notification System"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-schoolmantic-600" size={24} />
                  <h3 className="text-xl font-semibold text-schoolmantic-800">Notifikasi Otomatis</h3>
                </div>
                <p className="text-gray-700">
                  SchoolMantic secara otomatis mengirimkan notifikasi WhatsApp ke wali siswa saat siswa tiba di sekolah atau saat tidak hadir, memberikan ketenangan pikiran bagi orangtua dan meningkatkan komunikasi antara sekolah dan keluarga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
