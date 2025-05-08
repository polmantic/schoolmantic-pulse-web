
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient pt-24 pb-16 min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient">
                SCHOOLMANTIC
              </h1>
              <p className="text-xl md:text-2xl font-medium text-schoolmantic-800">
                Software absensi sidikjari siswa otomatis kirim whatsapp ke wali siswa
              </p>
            </div>
            <p className="text-gray-600 text-lg max-w-xl">
              Solusi modern untuk absensi siswa dengan teknologi sidik jari, 
              deteksi wajah, dan notifikasi otomatis ke orangtua via WhatsApp.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-schoolmantic-600 hover:bg-schoolmantic-700 text-white">
                Demo Gratis
              </Button>
              <Button variant="outline" className="border-schoolmantic-600 text-schoolmantic-600 hover:bg-schoolmantic-50">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="bg-white p-2 rounded-xl shadow-xl overflow-hidden">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="SchoolMantic Attendance System" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-schoolmantic-500/30 to-transparent rounded-lg"></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Pemantauan Realtime</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#overview" className="text-schoolmantic-500 hover:text-schoolmantic-700">
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
