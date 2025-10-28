
  "use client"
  
  import { useState } from "react"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"
  import { Button } from "@/components/ui/button"
  import { useToast } from "@/hooks/use-toast"
  import { isValidName, isValidEmail, isSanitized } from "@/lib/validation"

  export function ConsultationSection() {
    const { toast } = useToast()
    const [submitted, setSubmitted] = useState(false)
    const [state, setState] = useState({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      inquiry: "",
      details: "",
    })
    const [errors, setErrors] = useState({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      inquiry: "",
      details: "",
    })
  
    const validate = () => {
      const newErrors = { ...errors }
      let isValid = true
  
      if (!state.firstName) {
        newErrors.firstName = "First name is required."
        isValid = false
      } else if (!isValidName(state.firstName)) {
        newErrors.firstName = "Please enter a valid first name."
        isValid = false
      } else {
        newErrors.firstName = ""
      }
  
      if (!state.lastName) {
        newErrors.lastName = "Last name is required."
        isValid = false
      } else if (!isValidName(state.lastName)) {
        newErrors.lastName = "Please enter a valid last name."
        isValid = false
      } else {
        newErrors.lastName = ""
      }
  
      if (!state.email) {
        newErrors.email = "Email is required."
        isValid = false
      } else if (!isValidEmail(state.email)) {
        newErrors.email = "Please enter a valid email address."
        isValid = false
      } else {
        newErrors.email = ""
      }
  
      if (!state.company) {
        newErrors.company = "Company name is required."
        isValid = false
      } else if (!isSanitized(state.company)) {
        newErrors.company = "Please enter a valid company name."
        isValid = false
      } else {
        newErrors.company = ""
      }
  
      if (!state.inquiry) {
        newErrors.inquiry = "Inquiry type is required."
        isValid = false
      } else if (!isSanitized(state.inquiry)) {
        newErrors.inquiry = "Please enter a valid inquiry type."
        isValid = false
      } else {
        newErrors.inquiry = ""
      }
  
      if (!state.details) {
        newErrors.details = "Please provide some details about your project."
        isValid = false
      } else if (!isSanitized(state.details)) {
        newErrors.details = "Please enter valid project details."
        isValid = false
      } else {
        newErrors.details = ""
      }
  
      setErrors(newErrors)
      return isValid
    }
  
    return (
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        {/* Enhanced orange separators */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-900/30 via-orange-500 to-orange-300/50 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-900/15 via-orange-500/25 to-orange-300/20 blur-sm" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-300/50 via-orange-500 to-orange-900/30 shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
  
        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative">
          {/* Decorative elements */}
          <div className="absolute top-12 left-4 w-32 h-1 bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          <div className="absolute bottom-12 right-4 w-40 h-1 bg-gradient-to-l from-orange-500 to-orange-700 shadow-[0_0_15px_rgba(234,88,12,0.5)]" />
  
          <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 shadow-lg overflow-hidden relative group hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] transition-all">
            {/* Enhanced orange accent elements */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-600/50 via-orange-400/70 to-orange-500/50 group-hover:from-orange-600 group-hover:via-orange-400 group-hover:to-orange-500 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
            <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-orange-600/25 via-orange-400/35 to-orange-500/25 blur-sm" />
  
            <div className="absolute top-3 right-3 w-12 h-12 border-r-2 border-t-2 border-orange-400/50 group-hover:border-orange-400 transition-colors shadow-[0_0_12px_rgba(249,115,22,0.2)]" />
            <div className="absolute bottom-3 left-3 w-10 h-10 border-l-2 border-b-2 border-orange-600/40 group-hover:border-orange-600 transition-colors" />
  
            <div className="p-6 sm:p-8 relative">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.4)]" />
  
              <h3 className="text-xl font-semibold text-white pt-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Schedule Free Consultation
              </h3>
  
              <div className="w-16 h-0.5 bg-gradient-to-r from-orange-600 to-orange-400 mt-2 mb-1" />
              <p className="text-gray-300 text-sm">{"Have a chat with our industry expert tailored to your business needs"}</p>
  
              {submitted ? (
                <div className="text-center py-10">
                  <h3 className="text-2xl font-bold text-orange-500">Thank You!</h3>
                  <p className="text-white mt-2">We will reach out shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (validate()) {
                      console.log("Consultation request", state)
                      setSubmitted(true)
                    }
                  }}
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <Input
                      placeholder="First Name"
                      value={state.firstName}
                      onChange={(e) => setState({ ...state, firstName: e.target.value })}
                      className="bg-black border-2 border-gray-700 hover:border-orange-500/50 focus:border-orange-400 text-white placeholder:text-gray-500 focus-visible:ring-orange-500/40 transition-colors"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      value={state.lastName}
                      onChange={(e) => setState({ ...state, lastName: e.target.value })}
                      className="bg-black border-2 border-gray-700 hover:border-orange-500/50 focus:border-orange-400 text-white placeholder:text-gray-500 focus-visible:ring-orange-500/40 transition-colors"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      className="bg-black border-2 border-gray-700 hover:border-orange-500/50 focus:border-orange-400 text-white placeholder:text-gray-500 focus-visible:ring-orange-500/40 transition-colors"
                      placeholder="Business Email"
                      type="email"
                      value={state.email}
                      onChange={(e) => setState({ ...state, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      className="bg-black border-2 border-gray-700 hover:border-orange-500/50 focus:border-orange-400 text-white placeholder:text-gray-500 focus-visible:ring-orange-500/40 transition-colors"
                      placeholder="Company Name"
                      value={state.company}
                      onChange={(e) => setState({ ...state, company: e.target.value })}
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      placeholder="Inquiry Type"
                      value={state.inquiry}
                      onChange={(e) => setState({ ...state, inquiry: e.target.value })}
                      className="bg-black border-2 border-gray-700 hover:border-orange-500/50 focus:border-orange-400 text-white placeholder:text-gray-500 focus-visible:ring-orange-500/40 transition-colors"
                    />
                    {errors.inquiry && <p className="text-red-500 text-xs mt-1">{errors.inquiry}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <Textarea
                      className="bg-black border-2 border-gray-700 hover:border-orange-500/50 focus:border-orange-400 text-white placeholder:text-gray-500 focus-visible:ring-orange-500/40 transition-colors"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={state.details}
                      onChange={(e) => setState({ ...state, details: e.target.value })}
                    />
                    {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
                  </div>
                  <Button
                    type="submit"
                    className="sm:col-span-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-md border-2 border-orange-400 hover:border-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all"
                  >
                    Schedule Consultation
                  </Button>
                </form>
              )}
  
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-700/30 via-orange-500/50 to-orange-300/30 group-hover:from-orange-700 group-hover:via-orange-500 group-hover:to-orange-300 transition-colors" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  