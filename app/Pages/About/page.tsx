import Image from 'next/image';
import ima from "@/app/assets/images.jpg"

const About = () => {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image id='background_about' src={ima} alt='Ima' className='w-full h-full' />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
              Crafting Timeless Elegance
            </h1>
            <p className="text-2xl text-yellow-700 font-bold max-w-2xl mx-auto">
              Made With Love
            </p>
          </div>
        </div>
      </div>


      {/* Craftsmanship Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-800 mb-6">
              The Art of Perfection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every piece undergoes 150+ meticulous steps from concept to completion
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {['Design', 'Craft', 'Quality'].map((step, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="w-24 h-24 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={
                      index === 0 ? "M9 7h6m-6 3h6m-6 3h6M4 17V3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1z" :
                        index === 1 ? "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" :
                          "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    } />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>







      <div className="bg-gold/5 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">
             Contact US
          </h2>

          <div className="flex justify-center space-x-8 mb-12">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/zi_________na/?igsh=bmcyNGZ2azRrMGR3#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61565514575833&rdid=F3hewuoWMaazQsyq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18hdUG12zD%2F#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

          </div>
        </div>
      </div>

    </div>
  );
};


export default About;