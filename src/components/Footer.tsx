
import SaiBabaIcon from "./SaiBabaIcon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <SaiBabaIcon size={20} className="text-orange-400" />
          <p className="text-gray-300">Om Sai Ram</p>
          <SaiBabaIcon size={20} className="text-orange-400" />
        </div>
        <p className="text-gray-400">© 2024 Prasanna Saisree. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
