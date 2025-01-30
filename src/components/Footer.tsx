

const Footer = () => {
  return (
    <footer className="mt-12 py-4 bg-black text-white relative">
      <div className="absolute left-4 bottom-4 text-sm text-gray-400">
        Version : {import.meta.env.VITE_SHINEDERU_VERSION}
      </div>
      <p className="text-center">
        &copy; 2025 <a href="https://shinederu.lol" target="_blank" rel="noopener noreferrer" className="hover:underline">Shinederu.lol</a> - Tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
