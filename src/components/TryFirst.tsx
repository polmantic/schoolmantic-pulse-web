
import { Button } from "./ui/button";
import { ThumbsUp, Calendar, Check } from "lucide-react";

const TryFirst = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-schoolmantic-600 to-schoolmantic-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <ThumbsUp className="text-white" size={28} />
            </div>
            <h2 className="text-3xl font-bold">Coba Dulu</h2>
            <p className="text-xl">
              Selain demo online, sekolah Anda juga bisa coba dulu 1 bulan.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
              <p className="italic">
                "Cocok lanjutkan, tidak cocok tinggalkan."
              </p>
            </div>
            <Button className="bg-white text-schoolmantic-700 hover:bg-schoolmantic-50">
              Coba Gratis Sekarang
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 reveal">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Calendar size={24} />
              <span>Periode Ujicoba</span>
            </h3>
            <p className="mb-6">
              Saat pemasangan dan ujicoba, perhitungan biaya belum dimulai, misalnya saat pemasangan dan pendaftaran sidikjari siswa, yang biasanya memakan waktu 1 - 2 minggu itu belum dihitung.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 rounded-full p-1 flex-shrink-0 mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <p className="text-white/90">
                  Misalnya mulai pasang 20 Juli, selesai pendaftaran jari siswa 31 Juli dan mulai penerapan absensi 1 Agustus, maka perhitungan akan dimulai 1 Agustus.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-500 rounded-full p-1 flex-shrink-0 mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <p className="text-white/90">
                  Pada 1 September kami akan menanyakan apakah lanjut atau tidak, jika tidak maka tidak ada biaya dan berhenti.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-500 rounded-full p-1 flex-shrink-0 mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <p className="text-white/90">
                  Jika lanjut kami akan mengirimkan invoice untuk pemakaian periode Agustus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryFirst;
