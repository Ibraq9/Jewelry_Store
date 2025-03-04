const Contact = () => {
  return (
    <div className="min-h-screen bg-ivory relative isolate overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d3a7/631a5d4631d4c55b4753c7b0_noise.png')] opacity-10 z-0" />
      <div className="absolute -top-1/3 right-0 w-[800px] h-[800px] bg-gradient-radial from-gold/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Vertical Connection Lines */}
        <div className="absolute left-1/2 top-24 bottom-24 w-px bg-gold/20 hidden lg:block" />
        
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif text-gold mb-4 tracking-tight">
            <span className="block mb-4">Crafted Connections</span>
            <span className="text-2xl font-sans font-light text-gray-600">Where Excellence Meets Personal Service</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left Column - Contact Timeline */}
          <div className="space-y-16 relative">
            {/* Timeline Item 1 */}
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-gray-800">Concierge Line</h3>
                <div className="space-y-1">
                  <p className="text-lg text-gray-600">+1 (888) 925-8888</p>
                  <p className="text-sm text-gold">24/7 Diamond Service</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-gray-800">Private Consultations</h3>
                <div className="space-y-1">
                  <p className="text-lg text-gray-600">appointments@luxejewels.com</p>
                  <p className="text-sm text-gold">Response within 2 business hours</p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-gray-800">Global Salons</h3>
                <div className="space-y-1">
                  <p className="text-lg text-gray-600">New York • Paris • Tokyo • Dubai</p>
                  <p className="text-sm text-gold">By appointment only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Geometric Elements */}
              <div className="absolute -top-16 -left-16 w-32 h-32 border-2 border-gold/20 rounded-full" />
              <div className="absolute -bottom-16 -right-16 w-32 h-32 border-2 border-gold/20" />
              
              {/* Central Circle */}
              <div className="relative z-10 aspect-square w-full rounded-full bg-gold/5 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-gold/20 animate-pulse-slow" />
                <div className="text-center space-y-4 p-12">
                  <div className="text-4xl font-serif text-gold">✻</div>
                  <p className="text-sm text-gray-600 uppercase tracking-widest">
                    Personal Luxury Advisors<br/>
                    Available Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Accordion */}
        <div className="mt-24 border-t border-gold/20 pt-12">
          <div className="flex flex-wrap justify-center gap-8">
            {['Instagram', 'WeChat', 'WhatsApp', 'Telegram'].map((channel) => (
              <div key={channel} className="group relative">
                <button className="text-gray-600 hover:text-gold flex items-center gap-2 transition-colors">
                  <span className="text-lg">{channel}</span>
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;