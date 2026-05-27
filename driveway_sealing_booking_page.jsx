export default function DrivewaySealingBookingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-black text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">American Seal & Surface</h1>
        <p className="mt-4 text-lg text-gray-300">
          Professional Driveway Sealing & Surface Protection
        </p>
        <a
          href="#booking"
          className="inline-block mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          Book Your Free Estimate
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Protect & Restore Your Asphalt Surfaces</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            American Seal & Surface provides professional driveway sealing services that improve curb appeal, protect against weather damage, and extend the life of your asphalt surfaces.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="bg-white p-4 rounded-2xl shadow">
              ✅ Free Estimates
            </div>
            <div className="bg-white p-4 rounded-2xl shadow">
              ✅ Fast Scheduling
            </div>
            <div className="bg-white p-4 rounded-2xl shadow">
              ✅ Residential & Commercial
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8" id="booking">
          <h3 className="text-2xl font-bold mb-6 text-center">Request an Appointment</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-xl p-3"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl p-3"
            />

            <input
              type="text"
              placeholder="Property Address"
              className="w-full border border-gray-300 rounded-xl p-3"
            />

            <select className="w-full border border-gray-300 rounded-xl p-3">
              <option>Select Service</option>
              <option>Driveway Sealing</option>
              <option>Crack Filling</option>
              <option>Parking Lot Sealing</option>
            </select>

            <textarea
              placeholder="Additional Details"
              rows="4"
              className="w-full border border-gray-300 rounded-xl p-3"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition"
            >
              Book Free Estimate
            </button>
          </form>
        </div>
      </section>

      <section className="bg-black text-white py-14 px-6 text-center">
        <h2 className="text-3xl font-bold">Call or Text Anytime</h2>
        <p className="mt-4 text-xl">540-835-9081</p>
        <p className="text-gray-400 mt-2">Owned & Operated by Ethan Brunk</p>
      </section>
    </div>
  );
}
