import { motion } from "motion/react";
import { CheckCircle2, GraduationCap, ServerCog, ArrowRight, ShieldCheck, Truck, Zap } from "lucide-react";
import { NavLink } from "react-router";
import { FounderPortrait } from "../components/FounderPortrait";
import { Seo } from "../components/Seo";
import { getBreadcrumbSchema } from "../siteConfig";

export function Formation() {
  return (
    <div className="relative min-h-screen px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32">
       <Seo
         title="Formation laser et equipement esthetique"
         description="Beauty's Reyyan propose des formations laser a Gilly en Belgique ainsi qu'un accompagnement pour l'achat de machines esthetiques certifiees CE."
         path="/formation"
         keywords={[
           "formation laser Belgique",
           "formation epilation laser Gilly",
           "machine esthetique CE",
           "academie laser Belgique",
         ]}
         schema={[
           getBreadcrumbSchema([
             { name: "Accueil", path: "/" },
             { name: "Formations", path: "/formation" },
           ]),
         ]}
       />
       
       {/* Header */}
       <div className="max-w-3xl mb-24">
         <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-6"
         >
            <span className="w-8 h-[1px] bg-[#B89C8A]" />
            Académie & Équipement
         </motion.div>
         <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-serif text-[#4A3C31] leading-tight mb-8"
         >
            Formez-vous à <br/> l'excellence.
         </motion.h1>
         <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg text-[#70655B] font-light max-w-xl"
         >
            Développez votre expertise avec nos formations professionnelles en épilation laser et équipez votre institut avec du matériel médical certifié.
         </motion.p>
       </div>

       {/* Training Section */}
       <section className="mb-32">
          <div className="bg-[#FCFBF9] border border-[#E6DECE] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group">
             <div className="absolute inset-y-0 right-0 hidden md:block md:w-[32%] z-0 pointer-events-none">
                <div className="relative h-full w-full">
                   <div className="absolute inset-6 rounded-[2.75rem] bg-gradient-to-br from-[#F7F1E8] via-[#EFE4D6] to-[#E1D0BC]" />
                   <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-white/50 blur-2xl" />
                   <div className="absolute bottom-10 left-8 h-40 w-40 rounded-full bg-[#B89C8A]/20 blur-3xl" />
                   <div className="absolute inset-x-8 top-12 rounded-[2rem] border border-white/70 bg-white/75 p-6 backdrop-blur-xl shadow-[0_24px_80px_rgba(74,60,49,0.10)]">
                      <p className="text-xs uppercase tracking-[0.35em] text-[#B89C8A] font-medium mb-4">
                         Programme
                      </p>
                      <div className="space-y-4">
                         <div className="rounded-2xl bg-[#FCFBF9] border border-[#E6DECE] px-4 py-3">
                            <p className="text-[#4A3C31] font-medium text-sm">Théorie complète</p>
                            <p className="text-[#70655B] text-xs mt-1">Protocoles, réglages et sécurité.</p>
                         </div>
                         <div className="rounded-2xl bg-[#FCFBF9] border border-[#E6DECE] px-4 py-3">
                            <p className="text-[#4A3C31] font-medium text-sm">Pratique encadrée</p>
                            <p className="text-[#70655B] text-xs mt-1">Exercices sur modèles à l'institut.</p>
                         </div>
                         <div className="rounded-2xl bg-[#4A3C31] px-4 py-4 text-white">
                            <p className="text-sm font-medium">Attestation de réussite</p>
                            <p className="text-[#E6DECE] text-xs mt-1">Suivi post-formation inclus.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="relative z-10 max-w-2xl">
                <div className="w-16 h-16 rounded-2xl bg-[#F4EFE6] flex items-center justify-center text-[#B89C8A] mb-8">
                   <GraduationCap className="w-8 h-8" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
                   <h2 className="text-4xl md:text-5xl font-serif text-[#4A3C31]">Formation Laser</h2>
                   <div className="bg-[#4A3C31] text-white px-6 py-2 rounded-full text-xl font-serif inline-flex self-start">
                      800€
                   </div>
                </div>

                <div className="space-y-6 text-[#70655B] font-light text-lg mb-10">
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                         <CheckCircle2 className="w-6 h-6 text-[#B89C8A] shrink-0 mt-0.5" />
                         <span>La formation se déroule à l'institut sur <strong>une journée de 9h à 16h</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <CheckCircle2 className="w-6 h-6 text-[#B89C8A] shrink-0 mt-0.5" />
                         <span><strong>Programme complet :</strong> matinée consacrée à la théorie, après-midi dédiée à la pratique.</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <CheckCircle2 className="w-6 h-6 text-[#B89C8A] shrink-0 mt-0.5" />
                         <span><strong>Prérequis :</strong> prévoir 2 modèles rasés au rasoir pour la pratique.</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <CheckCircle2 className="w-6 h-6 text-[#B89C8A] shrink-0 mt-0.5" />
                         <span>Remise d'une <strong>attestation de réussite</strong> et accès à un suivi post-formation continu.</span>
                      </li>
                      <li className="flex items-start gap-3">
                         <CheckCircle2 className="w-6 h-6 text-[#B89C8A] shrink-0 mt-0.5" />
                         <span><em>Réservation : acompte de 100€ demandé pour bloquer la date. Le solde est à régler le jour J.</em></span>
                      </li>
                   </ul>
                </div>

                <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#E6DECE] mb-8 inline-block">
                   <p className="text-[#4A3C31] font-medium text-sm">
                      ✨ Possibilité d'inclure l'achat de la machine à épilation laser dans votre formation.
                   </p>
                </div>

                <NavLink to="/contact" className="group inline-flex items-center gap-4 bg-[#4A3C31] text-white px-8 py-4 rounded-full hover:bg-[#B89C8A] transition-colors duration-500">
                   <span className="font-medium tracking-wide text-sm uppercase">Réserver ma session</span>
                   <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </NavLink>
             </div>
          </div>
       </section>

       {/* Machines Section */}
       <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-[#E6DECE]"
             >
                <FounderPortrait
                  alt="Portrait de la fondatrice de Beauty's Reyyan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3C31]/30 to-transparent pointer-events-none" />
                <div className="absolute left-6 bottom-6 bg-white/85 backdrop-blur-md border border-white rounded-2xl px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B89C8A] font-medium mb-1">
                    Institut Beauty's Reyyan
                  </p>
                  <p className="text-[#4A3C31] font-serif text-lg">
                    Formation, conseil et accompagnement
                  </p>
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
                <div className="w-16 h-16 rounded-2xl bg-[#FCFBF9] border border-[#E6DECE] flex items-center justify-center text-[#B89C8A] mb-8">
                   <ServerCog className="w-8 h-8" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif text-[#4A3C31] mb-6">Fournisseur de Machines Esthétiques</h2>
                <div className="flex items-center gap-2 mb-8 bg-[#F4EFE6] text-[#4A3C31] px-4 py-2 rounded-full inline-flex font-medium text-sm">
                   🇪🇺 Certifiées CE
                </div>

                <p className="text-[#70655B] text-lg leading-relaxed mb-8 font-light">
                   Professionnelle de l'esthétique, je vous propose une sélection de machines de qualité professionnelle, livrées avec leur certificat européen (CE) pour une utilisation en toute sécurité et conformité dans votre institut.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                   <div className="bg-[#FCFBF9] p-6 rounded-2xl border border-[#E6DECE] flex flex-col items-center text-center gap-3">
                      <Zap className="w-6 h-6 text-[#B89C8A]" />
                      <span className="text-[#4A3C31] font-medium text-sm">Appareils<br/>Performants</span>
                   </div>
                   <div className="bg-[#FCFBF9] p-6 rounded-2xl border border-[#E6DECE] flex flex-col items-center text-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-[#B89C8A]" />
                      <span className="text-[#4A3C31] font-medium text-sm">Fiabilité<br/>Garantie</span>
                   </div>
                   <div className="bg-[#FCFBF9] p-6 rounded-2xl border border-[#E6DECE] flex flex-col items-center text-center gap-3">
                      <Truck className="w-6 h-6 text-[#B89C8A]" />
                      <span className="text-[#4A3C31] font-medium text-sm">Livraison<br/>Europe</span>
                   </div>
                </div>

                <div className="bg-[#4A3C31] p-8 rounded-[2rem] text-white">
                   <h3 className="font-serif text-2xl mb-2">Intéressé(e) par nos modèles ?</h3>
                   <p className="text-[#E6DECE] font-light mb-6 text-sm">Contactez-moi pour plus d'informations, découvrir les modèles disponibles ou obtenir un devis personnalisé.</p>
                   <NavLink to="/contact" className="inline-flex items-center gap-3 bg-white text-[#4A3C31] px-6 py-3 rounded-full hover:bg-[#F4EFE6] transition-colors text-sm font-medium uppercase tracking-wide">
                      Demander des infos
                   </NavLink>
                </div>
             </motion.div>
          </div>
       </section>

    </div>
  );
}
