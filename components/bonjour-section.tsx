
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Youtube, Facebook, Instagram } from "lucide-react";
import Image from 'next/image';

interface BonjourProps {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
}

export function BonjourSection({ title, subtitle, description, imageUrl, imageAlt }: BonjourProps) {
  return (
    <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="absolute -top-4 left-0 w-1 h-20 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />

        <div className="pl-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            {title}
          </h1>
          <p className="text-orange-400 text-xl mb-2">{subtitle}</p>
          <div className="text-gray-300 text-lg mb-8">{description}</div>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mb-8 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />

          <Button
            asChild
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-md px-8 py-3 font-semibold border-2 border-orange-400 hover:border-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all"
          >
            <a href="#contact">GET STARTED</a>
          </Button>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a href="https://www.facebook.com/people/Ali-Kayani/pfbid0GuhnQsEFnorfWG829pgZ72DxkCMEaubGsVftpZmnN2fT3ywg6sKt1GJjgNsxkTnZl/?rdid=iWlKJ7IPJLh6EIE8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DGwgmUirP%2F" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
            </a>
            <a href="https://www.instagram.com/militechsoln?igsh=OTVzcWhnZGZ3Ymtw" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMfzmSGxbXbmPLMNwKVBzLZmzLGkcccdDqPNwcZpKfdbBtrvmSvrPhqwZpzxGdzgtJLsKqV" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
                <Mail className="h-4 w-4" />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/militechsolutions-technology-information-media/" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
            </a>
            <a href="https://www.youtube.com/@militech_solutions" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
                <Youtube className="h-4 w-4" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="relative">
        <Image src={imageUrl} alt={imageAlt} width={500} height={400} className="w-full h-96 object-cover rounded-2xl border-2 border-orange-500/30" />
      </div>
    </div>
  );
}
