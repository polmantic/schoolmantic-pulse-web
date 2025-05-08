
const BillingInfo = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Harga</h2>
          <p className="text-lg text-gray-700">
            Kami menawarkan paket yang fleksibel sesuai kebutuhan sekolah Anda
          </p>
        </div>

        <div className="overflow-x-auto reveal">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-schoolmantic-700 text-white rounded-tl-lg">
                  Fitur
                </th>
                <th className="p-4 text-center bg-schoolmantic-700 text-white">
                  Gratis
                </th>
                <th className="p-4 text-center bg-schoolmantic-700 text-white">
                  Rp 1000
                </th>
                <th className="p-4 text-center bg-schoolmantic-700 text-white">
                  Rp 2000
                </th>
                <th className="p-4 text-center bg-schoolmantic-700 text-white rounded-tr-lg">
                  Rp 3000
                </th>
              </tr>
              <tr>
                <th colSpan={5} className="p-2 text-right text-sm text-gray-500 italic">
                  harga (Rp) per siswa per bulan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Absensi web</td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Absensi RFID/QRcode/barcode</td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Absensi fingerprint/wajah</td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Web laporan wali siswa</td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">Notifikasi whatsapp</td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="p-4 font-medium text-gray-700">App android wali siswa</td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </td>
                <td className="p-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5} className="p-4 text-center bg-schoolmantic-50 rounded-b-lg">
                  <p className="text-sm text-gray-600 italic">
                    * Harga minimal adalah Rp 300.000 per bulan untuk sekolah dengan jumlah siswa di bawah 100
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BillingInfo;
