import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <div className="relative min-h-screen px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
       
       {/* Contact Info */}
       <div className="space-y-12">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium"
          >
             <span className="w-8 h-[1px] bg-[#B89C8A]" />
             Nous Contacter
          </motion.div>
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="text-5xl md:text-7xl font-serif text-[#4A3C31] leading-tight"
          >
             Une question ? <br/> Nous sommes là.
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="text-lg text-[#70655B] font-light max-w-md"
          >
             Que ce soit pour une information sur nos prestations, nos machines ou une demande spécifique, n'hésitez pas à nous écrire.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.4 }}
             className="space-y-8 pt-8"
          >
             <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FCFBF9] border border-[#E6DECE] flex items-center justify-center text-[#B89C8A] shrink-0">
                   <MapPin className="w-5 h-5" />
                </div>
                <div>
                   <h3 className="font-serif text-[#4A3C31] text-lg mb-1">Notre Centre</h3>
                   <p className="text-[#70655B] text-sm leading-relaxed">Rue des Hauchies 93,<br/> 6060 Gilly, Belgique</p>
                </div>
             </div>
             
             <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FCFBF9] border border-[#E6DECE] flex items-center justify-center text-[#B89C8A] shrink-0">
                   <Phone className="w-5 h-5" />
                </div>
                <div>
                   <h3 className="font-serif text-[#4A3C31] text-lg mb-1">Téléphone</h3>
                   <p className="text-[#70655B] text-sm leading-relaxed">+32 489 14 17 81</p>
                   <p className="text-xs text-[#B89C8A] mt-1">Lun-Sam: 9h - 19h</p>
                </div>
             </div>

             <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FCFBF9] border border-[#E6DECE] flex items-center justify-center text-[#B89C8A] shrink-0">
                   <Mail className="w-5 h-5" />
                </div>
                <div>
                   <h3 className="font-serif text-[#4A3C31] text-lg mb-1">Email</h3>
                   <p className="text-[#70655B] text-sm leading-relaxed">contact@beautysreyyan.fr</p>
                </div>
             </div>
          </motion.div>
       </div>

       {/* Form Section */}
       <motion.div 
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
         className="bg-[#FCFBF9] border border-[#E6DECE] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center"
       >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F4EFE6] to-transparent rounded-bl-full opacity-50 pointer-events-none" />
          
          <h2 className="text-3xl font-serif text-[#4A3C31] mb-2 relative z-10">Envoyez-nous un message</h2>
          <p className="text-[#70655B] text-sm mb-8 relative z-10">Pour toute demande de réservation, veuillez utiliser le bouton "Réserver" en haut à droite. Ce formulaire est uniquement dédié aux autres demandes.</p>
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-xs font-medium uppercase tracking-widest text-[#70655B]">Prénom</label>
                   <input type="text" className="w-full bg-white border border-[#E6DECE] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89C8A] transition-colors" placeholder="Jeanne" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-medium uppercase tracking-widest text-[#70655B]">Nom</label>
                   <input type="text" className="w-full bg-white border border-[#E6DECE] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89C8A] transition-colors" placeholder="Dupont" />
                </div>
             </div>

             <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-widest text-[#70655B]">Email</label>
                <input type="email" className="w-full bg-white border border-[#E6DECE] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89C8A] transition-colors" placeholder="jeanne@example.com" />
             </div>

             <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-widest text-[#70655B]">Sujet</label>
                <div className="relative">
                   <select className="w-full bg-white border border-[#E6DECE] rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:border-[#B89C8A] transition-colors text-[#4A3C31]">
                      <option>Renseignement Général</option>
                      <option>Information Vente Machine (CE)</option>
                      <option>Question Médicale / Contre-indication</option>
                      <option>Partenariat / Presse</option>
                      <option>Autre</option>
                   </select>
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#70655B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                   </div>
                </div>
             </div>

             <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-widest text-[#70655B]">Message</label>
                <textarea rows={5} className="w-full bg-white border border-[#E6DECE] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89C8A] transition-colors resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
             </div>

             <button type="submit" className="group w-full flex items-center justify-center gap-3 bg-[#4A3C31] text-white px-8 py-4 rounded-xl hover:bg-[#B89C8A] transition-colors duration-500 overflow-hidden relative">
                <span className="font-medium tracking-wide text-sm uppercase relative z-10">Envoyer le message</span>
                <ArrowRight className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform" />
             </button>
          </form>
       </motion.div>

    </div>
  );
}