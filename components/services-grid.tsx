'use client';

import { Shield, Lock, Eye, Database, Users, BadgeCheck, Globe, Target, Code, Server } from "lucide-react"
import Link from "next/link"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const services = [
  { 
    icon: Shield, 
    title: "Threat Intelligence", 
    desc: "Advanced detection and analysis for emerging risks.",
    imageUrl: "/images/threat-intelligence.jpg",
    longDesc: "Our Threat Intelligence service provides proactive defense against cyber threats. We leverage cutting-edge technology and expert analysis to monitor the digital landscape for emerging risks, targeted attack campaigns, and malicious actors.\n\nBy gathering and analyzing data from a vast array of sources, we deliver actionable intelligence that empowers you to anticipate and neutralize threats before they impact your organization. This includes detailed reports on threat actors, their tactics, techniques, and procedures (TTPs), and indicators of compromise (IOCs) to bolster your security posture."
  },
  { 
    icon: Lock, 
    title: "Security Consulting", 
    desc: "Strategic guidance from certified experts.",
    imageUrl: "/images/security-consulting.jpg",
    longDesc: "Our Security Consulting services offer strategic guidance from a team of certified and experienced cybersecurity experts. We work closely with you to understand your business objectives and security challenges.\n\nOur consulting services cover a wide range of areas, including security strategy development, policy and procedure creation, architecture review, and technology selection. We provide tailored recommendations to help you build a robust and resilient security program that aligns with your business goals and regulatory requirements."
  },
  { 
    icon: Eye, 
    title: "Incident Response", 
    desc: "Rapid remediation to restore operations.",
    imageUrl: "/images/incident-response.jpg",
    longDesc: "In the event of a security breach, our Incident Response team provides rapid and effective remediation to minimize damage and restore your operations. Our 24/7 response team follows a structured approach to manage incidents from initial detection to post-incident analysis.\n\nWe help you contain the threat, eradicate the attacker\'s presence, recover affected systems, and implement measures to prevent future occurrences. Our goal is to get you back to business as quickly and securely as possible."
  },
  { 
    icon: Database, 
    title: "Risk Assessment", 
    desc: "Comprehensive evaluations of your infrastructure.",
    imageUrl: "/images/risk-assessment.jpg",
    longDesc: "Our Risk Assessment service provides a comprehensive evaluation of your organization\'s IT infrastructure to identify, quantify, and prioritize security risks. We conduct thorough assessments of your networks, systems, applications, and processes to uncover vulnerabilities and potential threats.\n\nOur detailed reports provide a clear picture of your risk landscape, along with actionable recommendations for mitigation. By understanding your risks, you can make informed decisions about your security investments and strategies."
  },
  { 
    icon: Users, 
    title: "Security Training", 
    desc: "Executive briefings and staff programs.",
    imageUrl: "/images/security-training.jpg",
    longDesc: "People are a critical part of any security program. Our Security Training services are designed to educate your employees at all levels, from executive briefings on cybersecurity trends and risks to hands-on technical training for your IT staff.\n\nWe offer a variety of training programs, including security awareness training, phishing simulations, and specialized workshops on topics like secure coding and incident response. A well-trained workforce is your first line of defense against cyber attacks."
  },
  { 
    icon: BadgeCheck, 
    title: "Compliance Management", 
    desc: "Adherence to standards and regulations.",
    imageUrl: "/images/compliance-management.jpg",
    longDesc: "Navigating the complex landscape of cybersecurity regulations and standards can be challenging. Our Compliance Management service helps your organization achieve and maintain adherence to relevant requirements, such as PCI DSS, HIPAA, GDPR, and ISO 27001.\n\nWe assist with gap analysis, policy development, and readiness assessments to prepare you for audits. Our experts provide ongoing support to ensure your compliance program remains effective and up-to-date with evolving regulations."
  },
  { 
    icon: Globe, 
    title: "Web Analysis", 
    desc: "In-depth analysis of web applications to identify vulnerabilities.",
    imageUrl: "/images/web-analysis.jpg",
    longDesc: "Our Web Analysis service provides an in-depth security assessment of your web applications. We use a combination of automated scanning and manual testing to identify a wide range of vulnerabilities, including those listed in the OWASP Top 10.\n\nOur analysis covers everything from the application\'s architecture and configuration to its input validation and authentication mechanisms. We provide a detailed report of our findings, along with clear guidance on how to remediate the identified vulnerabilities and improve the security of your web applications."
  },
  { 
    icon: Target, 
    title: "Penetration Testing", 
    desc: "Simulated attacks to test the security of your systems.",
    imageUrl: "/images/penetration-testing.jpg",
    longDesc: "Our Penetration Testing service, also known as ethical hacking, involves simulated attacks on your computer systems, networks, and web applications to evaluate their security. Our certified penetration testers mimic the actions of real-world attackers to identify vulnerabilities that could be exploited.\n\nWe provide a comprehensive report detailing our findings, the potential impact of each vulnerability, and prioritized recommendations for remediation. Penetration testing is an essential practice for proactively assessing and improving your security posture."
  },
  { 
    icon: Code, 
    title: "Ethical Hacking", 
    desc: "Authorized hacking attempts to find and fix security flaws.",
    imageUrl: "/images/ethical-hacking.jpg",
    longDesc: "Our Ethical Hacking service goes beyond standard penetration testing to provide a more comprehensive and adversarial assessment of your security. Our elite team of ethical hackers uses advanced techniques and a creative mindset to uncover complex vulnerabilities that automated tools and traditional testing methods might miss.\n\nWe conduct authorized, in-depth hacking attempts to provide you with a true understanding of your security resilience. This service is for organizations looking for the highest level of security assurance."
  },
  { 
    icon: Server, 
    title: "Cyber Development", 
    desc: "Building secure and resilient cyber solutions.",
    imageUrl: "https://i.postimg.cc/NGZTY3Ky/8d3799e24be55bdfddb7a4fd8e4100d0.jpg",
    longDesc: "In today\'s threat landscape, security must be built into the development lifecycle, not bolted on as an afterthought. Our Cyber Development service focuses on building secure and resilient software and systems.\n\nWe follow secure coding best practices and a \'security by design\' approach to develop custom applications, tools, and platforms. Whether you need a secure web application, a custom security tool, or a hardened server environment, our development team has the expertise to deliver solutions that are both functional and highly secure."
  },
]

interface ServicesGridProps {
  limit?: number;
  showViewAll?: boolean;
}

export function ServicesGrid({ limit, showViewAll = false }: ServicesGridProps) {
  const displayedServices = limit ? services.slice(0, limit) : services;
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced orange separators and accent lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-800/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-800/15 via-orange-500/25 to-orange-300/20 blur-sm" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-800/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-orange-300/20 via-orange-500/25 to-orange-800/15 blur-sm" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Enhanced decorative orange lines */}
        <div className="absolute top-12 left-4 w-32 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
        <div className="absolute top-14 left-8 w-20 h-0.5 bg-gradient-to-r from-orange-400 to-orange-300" />
        <div className="absolute bottom-12 right-4 w-40 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_15px_rgba(234,88,12,0.5)]" />
        <div className="absolute bottom-14 right-10 w-24 h-0.5 bg-gradient-to-l from-orange-300 to-orange-600" />

        <div className={`text-center mb-12 relative ${isIntersecting ? 'services-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_0_25px_rgba(249,115,22,0.6)]" />
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-6 h-16 bg-gradient-to-b from-orange-400/20 to-orange-600/20 blur-sm" />

          <h2 className="text-3xl md:text-4xl font-bold text-white pt-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Our Services
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 mx-auto mt-4 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          <div className="w-24 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mx-auto mt-1" />
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent mx-auto mt-2" />

          <p className="text-gray-300 mt-4">{"Comprehensive cybersecurity solutions tailored to your requirements."}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {displayedServices.map((s, i) => {
            const Icon = s.icon;
            const longDescParts = s.longDesc.split('\n\n');
            const firstParagraph = longDescParts[0];
            const restOfDesc = longDescParts.slice(1).join('\n\n');

            return (
              <div
                key={i}
                className={`group rounded-lg border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:bg-gradient-to-br hover:from-orange-950/20 hover:to-orange-900/10 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)] transition-all p-8 relative overflow-hidden ${isIntersecting ? 'services-slide-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 * (i + 1)}s` }}
              >
                {/* Enhanced orange accent elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600/40 via-orange-400/60 to-orange-500/40 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors" />
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-600/20 via-orange-400/30 to-orange-500/20 blur-sm" />

                <div className="absolute top-2 right-2 w-10 h-10 border-r-2 border-t-2 border-orange-400/50 group-hover:border-orange-400 transition-colors shadow-[0_0_12px_rgba(249,115,22,0.2)]" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-orange-600/40 group-hover:border-orange-600 transition-colors" />

                <Icon className="h-6 w-6 text-gray-200 group-hover:text-orange-400 mb-4 transition-all drop-shadow-[0_0_10px_rgba(249,115,22,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]" />

                <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mb-3 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-700 mb-4" />

                <h3 className="text-lg font-semibold text-white group-hover:text-orange-50 transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 text-sm mb-6 transition-colors">{s.desc}</p>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm border-b-2 border-orange-500/40 hover:border-orange-400 transition-all pb-1 group/link">
                      Learn More
                      <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-black border-gray-700 text-white max-w-7xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-orange-400">{s.title}</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[80vh] w-full rounded-md border border-gray-700 p-6">
                       <Image src={s.imageUrl} alt={s.title} width={600} height={300} className="w-full h-auto object-cover rounded-md mb-6" />
                       {firstParagraph && <p className="text-gray-300 text-justify leading-relaxed whitespace-pre-line mb-4">{firstParagraph}</p>}
                       {restOfDesc && <p className="text-gray-300 text-justify leading-relaxed whitespace-pre-line">{restOfDesc}</p>}
                    </ScrollArea>
                    <DialogFooter>
                      <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-orange-700/30 via-orange-500/50 to-orange-300/30 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-300 transition-colors" />
              </div>
            )
          })}
        </div>

        {showViewAll && (
          <div className={`text-center mt-12 ${isIntersecting ? 'services-slide-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-black">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
