
import { Button } from "./ui/button";
import { ExternalLink, Monitor } from "lucide-react";

const Demo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="inline-flex items-center justify-center p-2 bg-schoolmantic-100 rounded-full mb-6">
            <Monitor className="h-6 w-6 text-schoolmantic-600" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-gradient">Demo?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Silahkan pelajari demo online kami untuk melihat fitur-fiturnya
          </p>

          <div className="bg-schoolmantic-50 border-2 border-dashed border-schoolmantic-200 rounded-xl p-6 md:p-8 max-w-3xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-2">
                <h3 className="text-xl font-semibold text-schoolmantic-700">Demo Online</h3>
                <p className="text-schoolmantic-600 font-medium">https://demo.schoolmantic.id</p>
                <p className="text-gray-600">
                  klik Admin<br />
                  username: admin@admin.com<br />
                  password: admin
                </p>
              </div>
              <Button className="bg-schoolmantic-600 hover:bg-schoolmantic-700 flex items-center gap-2">
                <ExternalLink size={16} />
                <span>Buka Demo</span>
              </Button>
            </div>
          </div>

          <div className="bg-schoolmantic-50 p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              Jika ingin testing mesin absensi Anda, masukkan alamat ini: 
              <span className="font-semibold"> demo.schoolmantic.id</span> di menu cloud / ADMS
            </p>
            <p className="text-gray-700">
              Panduan setting ADMS ini klik 
              <a 
                href="https://www.youtube.com/watch?v=6psU6-W-WXE&lc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-schoolmantic-600 hover:underline font-medium"
              >
                {" "}https://www.youtube.com/watch?v=6psU6-W-WXE&lc
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
