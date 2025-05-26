import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} Jens Shumway. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Built with 
              <span className="inline-flex items-center mx-1">
                <Heart size={14} className="text-red-500 mr-1" fill="currentColor" /> and React
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;