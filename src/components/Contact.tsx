
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-schoolmantic-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Hubungi Kami</h2>
          <p className="text-lg text-gray-700">
            Ada pertanyaan? Silahkan hubungi kami untuk informasi lebih lanjut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md reveal">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-schoolmantic-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-schoolmantic-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Alamat</h3>
                  <p className="text-gray-600">
                    POLMANTIC MEDIA CITRA<br />
                    Apartemen Springlake Summarecon, Kota Bekasi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-schoolmantic-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-schoolmantic-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                  <p className="text-gray-600">
                    <a href="https://wa.me/0811945222" className="text-schoolmantic-600 hover:underline">
                      0811945222
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-schoolmantic-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-schoolmantic-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@schoolmantic.id" className="text-schoolmantic-600 hover:underline">
                      info@schoolmantic.id
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.442629666247!2d107.00364344859866!3d-6.223365599678492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c7274ae1a63%3A0x87595ca302f7a9fb!2sSpringlake%20Summarecon%20Bekasi!5e0!3m2!1sen!2sid!4v1715188287826!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <footer className="mt-16 bg-schoolmantic-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">SCHOOLMANTIC</h4>
              <p className="text-schoolmantic-100">
                Software absensi sidik jari siswa otomatis kirim WhatsApp ke wali siswa.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Kontak</h4>
              <p className="text-schoolmantic-100 mb-2">
                POLMANTIC MEDIA CITRA<br />
                Apartemen Springlake Summarecon, Kota Bekasi
              </p>
              <p className="text-schoolmantic-100">
                WhatsApp: <a href="https://wa.me/0811945222" className="hover:underline">0811945222</a>
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Link</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:underline text-schoolmantic-100">Beranda</a></li>
                <li><a href="#features" className="hover:underline text-schoolmantic-100">Fitur</a></li>
                <li><a href="#pricing" className="hover:underline text-schoolmantic-100">Harga</a></li>
                <li><a href="#faq" className="hover:underline text-schoolmantic-100">Demo Tanya Jawab</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-schoolmantic-700 mt-8 pt-8 text-center text-schoolmantic-300">
            <p>&copy; {new Date().getFullYear()} SchoolMantic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
