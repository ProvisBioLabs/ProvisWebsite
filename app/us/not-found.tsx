import Link from 'next/link';
import { ArrowRight, Home, Search } from 'lucide-react';
import USNavbar from './components/Navbar';
import Footer from './components/Footer';

export default function USNotFound() {
  return (
    <>
      <USNavbar />
      <main className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8FAFC] font-sans px-4 selection:bg-[#F26522]/20">
        <div className="text-center max-w-2xl mx-auto py-20">
          
          <h1 className="text-8xl md:text-9xl font-outfit font-black text-[#1E3A8A] mb-4">
            404
          </h1>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF5F0] border border-[#F26522]/20 text-[#F26522] font-bold text-sm tracking-wide mb-6">
             <Search className="w-4 h-4" /> Route Not Found
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#475569] mb-4 leading-tight">
            Oops! We couldn't find the page you were looking for.
          </h2>
          
          <p className="text-[#64748B] text-lg mb-10 leading-relaxed font-medium">
            The page might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/us"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F26522] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#E85D1C] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#F26522]/25"
            >
              <Home className="w-5 h-5" />
              Back to US Homepage
            </Link>
            <Link 
              href="/us/products"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#1E3A8A] border-2 border-[#E2E8F0] font-bold px-8 py-4 rounded-2xl hover:border-[#F26522]/30 hover:bg-[#FFF5F0] transition-all"
            >
              View US Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
