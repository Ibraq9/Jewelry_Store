const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20 border-t border-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gold-500 mb-4">Luxury Jewels</h3>
            <p className="text-gray-300 text-sm">
              Crafting timeless elegance <br/> Specializing in fine jewelry and custom designs
              <br/>that celebrate life&apos;s precious moments.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-gold-500 mb-4">Collections</h4>
            <ul className="space-y-2">
              {['Ring', 'Bracelets', 'Earrings'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-medium text-gold-500 mb-4">Connect</h4>
            <div className="flex flex-col gap-2 text-gray-300 text-sm">
              <p>Minia, Egypt</p>
              <a 
                href="https://www.facebook.com/groups/1044323680578826/?ref=share_group_link&rdid=1WGPnIxuDcSH3KFk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F19JkxWWZHT%2F#" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.instagram.com/zi_________na/?igsh=bmcyNGZ2azRrMGR3#"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Luxury Jewels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;