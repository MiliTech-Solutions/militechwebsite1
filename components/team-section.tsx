import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Ali Kayani",
    role: "Chief Executive Officer",
    department: "Leadership",
    bio: "Visionary leader with 15+ years in defense technology. Sarah drives strategic initiatives and oversees company operations with expertise in cybersecurity and government contracts.",
    image: "https://i.postimg.cc/j2rf8QY4/C-E-O.png",
    specialties: ["Strategic Planning", "Defense Contracts", "Team Leadership"],
  },
  {
    name: "Umar Waqar",
    role: "Chief Technology Officer",
    department: "Engineering",
    bio: "Technology innovator specializing in AI and machine learning solutions. Michael leads our technical vision and ensures cutting-edge implementation across all projects.",
    image: "https://i.postimg.cc/rpSYnjBp/midjourney.jpg",
    specialties: ["AI/ML", "System Architecture", "Innovation"],
  },
]

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Def Contractor",
    content:
      "MiliTech\'s cybersecurity solutions exceeded our expectations. Their team delivered robust protection systems that enhanced our operational security by 300%.",
    avatar: "https://i.postimg.cc/9f1VT1H1/C_F_O.png",
  },
  {
    name: "Kim Robert",
    role: "IT Director",
    content:
      "The AI-powered analytics platform provided insights we never thought possible. Implementation was seamless and results were immediate.",
    avatar: "https://i.postimg.cc/PJ7YhGgW/A_Look_That_Captivates.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "Security Chief",
    content:
      "Outstanding threat detection capabilities. Their proactive approach to cybersecurity has kept our systems secure for over two years.",
    avatar: "https://i.postimg.cc/QNRcTJb4/86bddd2c-372c-499e-b02b-1aa8b91abc40.jpg",
  },
  {
    name: "David Wilson",
    role: "Oper Manager",
    content:
      "MiliTech\'s cloud migration strategy reduced our infrastructure costs by 35% while improving performance significantly.",
    avatar: "https://i.postimg.cc/Z5y1NNxZ/1cf2784d-c9cc-4451-a20c-e947debf713a.jpg",
  },
  {
    name: "Amanda Stevenson",
    role: "CTO",
    content:
      "Their expertise in defense technology is unmatched. The solutions they provided transformed our entire operational framework.",
    avatar: "https://i.postimg.cc/HL9v09JP/a8619ba2-d131-49cd-b28e-3a213296473a.jpg",
  },
]

export function TeamSection() {
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      {/* Geometric background lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-px h-96 bg-gradient-to-b from-orange-500/30 to-transparent" />
        <div className="absolute top-40 right-20 w-px h-64 bg-gradient-to-b from-orange-400/20 to-transparent" />
        <div className="absolute bottom-40 left-1/4 w-32 h-px bg-gradient-to-r from-orange-500/30 to-transparent" />
        <div className="absolute bottom-20 right-1/3 w-24 h-px bg-gradient-to-l from-orange-400/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Hero Section with Two Leaders */}
        <div className="relative mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
            {/* Left Leader */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500/30">
                <img
                  src="https://i.postimg.cc/j2rf8QY4/C-E-O.png"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                   style={{ objectPosition: 'center 10%' }}
                />
              </div>
              <div className="absolute -top-4 -left-4 px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded text-orange-300 text-sm">
                CEO & FOUNDER
              </div>
            </div>

            {/* Center Logo/Brand */}
            <div className="text-center relative">
              <div className="relative inline-block">
                <div className="w-24 h-24 mx-auto mb-4 bg-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                  <img src="https://i.postimg.cc/BQBVqjjP/Mili-Tech-Logo-4-0-Transparent.png" alt="MiliTech Logo" className="w-20 h-20" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">MILITECH</h1>
                <p className="text-orange-400 text-lg mb-4">Overcome challenges and increase your success</p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  Meet Our Team
                </Button>
              </div>
            </div>

            {/* Right Leader */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500/30">
                <img
                  src="https://i.postimg.cc/P57S0j4S/WhatsApp_Image_2025-09-15_at_5.25.25_PM_(2).jpg"
                  alt="Michael Chen"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <div className="absolute -top-4 -right-4 px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded text-orange-300 text-sm">
                CFO & CO-FOUNDER
              </div>
            </div>
          </div>
        </div>

        {/* What You\'ll Learn Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">What will you learn from our expertise?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "THE BEGINNING",
                subtitle: "Foundation & Strategy",
                description: "Learn the fundamentals of defense technology and strategic planning",
                image: "https://i.postimg.cc/VLxShZtJ/anastasia-zhenina-E4XARZNDjzI-unsplash.jpg",
              },
              {
                title: "THE METHOD",
                subtitle: "Implementation & Process",
                description: "Master our proven methodologies for cybersecurity and system integration",
                image: "https://i.postimg.cc/T3Z88SqP/The-First-Step-to-a-High-Performance-Morning-Routine.jpg",
              },
              {
                title: "THE END",
                subtitle: "Results & Success",
                description: "Achieve measurable outcomes and sustainable security solutions",
                image: "https://i.postimg.cc/XqFLCHBt/Building-Positive-Habits-5-Steps-to-Success.jpg",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 hover:border-orange-500/70 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="h-32 mb-4 rounded overflow-hidden bg-gradient-to-br from-orange-900/20 to-orange-800/10">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  <h3 className="text-orange-400 font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white font-semibold mb-2">{item.subtitle}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Expert Section */}
        <div className="mb-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="border-2 border-orange-500/50 rounded-lg p-6 bg-gradient-to-br from-gray-900/50 to-black/50">
                <h3 className="text-orange-400 font-bold text-xl mb-4">
                  Let\'s see how successful <br /> You can be with our expertise
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed text-justify">
                  Our comprehensive approach to defense technology combines cutting-edge innovation with proven
                  methodologies. We\'ve helped organizations achieve unprecedented levels of security and operational
                  efficiency through our tailored solutions and expert guidance.
                </p>
              </div>

              {/* Geometric decorations */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-orange-500/30" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-l-2 border-b-2 border-orange-500/30" />
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <img
                  src="https://i.postimg.cc/Dy0sHYzX/Business-Meeting-in-Office-with-Corporate-Manager-Portrait.jpg"
                  alt="Expert pointing forward"
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Geometric overlay elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-orange-500/50 rounded-full" />
                <div className="absolute bottom-8 left-8 w-2 h-20 bg-gradient-to-t from-orange-500/50 to-transparent" />
                <div className="absolute top-1/2 -right-8 w-12 h-px bg-orange-500/50" />
              </div>
            </div>
          </div>
        </div>

        {/* For Whom Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-orange-400">■</span> Who is this for?
              </h2>

              <div className="space-y-4 text-gray-300 text-justify">
                <p>
                  Our solutions are designed for defense contractors, government agencies, and enterprise organizations
                  seeking advanced cybersecurity and technology solutions.
                </p>
                <p>
                  Whether you\'re looking to enhance your security posture, implement AI-driven analytics, or modernize
                  your infrastructure, our team has the expertise to guide you.
                </p>
                <p>
                  We work with organizations of all sizes, from small defense contractors to large government
                  departments, providing tailored solutions that meet specific operational requirements.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 border border-orange-500/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-20 bg-gradient-to-br from-orange-600 to-orange-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">MILITECH</h3>
                    <p className="text-orange-400 text-sm">Innovative Defense Technologies</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/50">
                    <img
                      src="https://i.postimg.cc/j2rf8QY4/C-E-O.png"
                      alt="Team member"
                      className="w-full h-full object-cover"
                       style={{ objectPosition: 'center 10%' }}
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/50">
                    <img
                      src="https://i.postimg.cc/P57S0j4S/WhatsApp_Image_2025-09-15_at_5.25.25_PM_(2).jpg"
                      alt="Team member"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/50">
                    <img
                      src="https://i.postimg.cc/rpSYnjBp/midjourney.jpg"
                      alt="Team member"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What our clients say?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 text-black flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-orange-700">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: 
                            testimonial.name === "Jennifer Martinez" ||
                            testimonial.name === "Lisa Thompson" ||
                            testimonial.name === "David Wilson" ||
                            testimonial.name === "Amanda Stevenson"
                              ? "center 20%"
                              : "center",
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">
                        {testimonial.name.split(' ')[0]}
                        <br />
                        {testimonial.name.split(' ')[1]}
                      </h4>
                      <p className="text-xs opacity-80">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-justify flex-grow">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Profiles Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Who are your experts?</h2>

          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative inline-block">
                    <div className="w-80 h-96 rounded-lg overflow-hidden border-4 border-orange-500/50 bg-gradient-to-br from-gray-900 to-black">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={member.name === "Umar Waqar" ? { objectPosition: "center 20%" } : { objectPosition: "center 10%" }}
                      />
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-orange-500" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-orange-500" />

                    {/* Geometric lines */}
                    <div className="absolute top-1/2 -right-8 w-12 h-px bg-orange-500/70" />
                    <div className="absolute bottom-8 -left-8 w-px h-16 bg-orange-500/70" />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  </div>

                  <p className="text-orange-400 font-semibold mb-2">{member.role}</p>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/50 mb-4">
                    {member.department}
                  </Badge>

                  <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>

                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Specialties:</h4>
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-gray-300 text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center relative">
          <div className="border-2 border-orange-500/50 rounded-lg p-8 bg-gradient-to-br from-gray-900/50 to-black/50 inline-block">
            <p className="text-gray-300 mb-4">Ready to transform your defense capabilities?</p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              Get Started Today
            </Button>
            <p className="text-gray-400 text-sm mt-2">★★★★★ 5.0 (127 reviews)</p>
          </div>

          {/* Bottom geometric lines */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        </div>

        {/* Final brand mark */}
        <div className="text-center mt-12">
          <div className="text-orange-400 font-bold text-sm tracking-wider">MILITECH</div>
          <p className="text-gray-500 text-xs mt-1">DEFENSE TECHNOLOGY SOLUTIONS</p>
        </div>
      </div>
    </div>
  )
}
