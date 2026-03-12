import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkle, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { FounderPortrait } from "../components/FounderPortrait";
import { Seo } from "../components/Seo";
import { getBreadcrumbSchema, siteConfig } from "../siteConfig";

const services = [
  {
    category: "Nos Packs (La Séance)",
    items: [
      { name: "Pack Diamond", duration: "Corps complet", price: "200€", desc: "L'épilation intégrale pour une douceur absolue sur l'ensemble du corps." },
      { name: "Pack Platinum", duration: "Jambes complètes, Bikini intégral & Aisselles", price: "180€", desc: "Les zones les plus demandées pour une tranquillité au quotidien." },
      { name: "Pack Gold", duration: "Demi-jambes, Bikini intégral & Aisselles", price: "150€", desc: "Le compromis parfait pour les zones essentielles." },
      { name: "Pack Silver", duration: "Bikini intégral & Aisselles", price: "100€", desc: "Concentré sur les zones sensibles avec une efficacité optimale." }
    ]
  },
  {
    category: "Tarifs Packs Laser (8 Séances)",
    items: [
      { name: "Pack Prémium 8 Séances", duration: "Corps intégral", price: "1500€", desc: "Inclut 2 séances de retouche et soins visage offerts. Le traitement ultime et complet." },
      { name: "Pack 3 Zones (Jambes complètes) 8 Séances", duration: "Jambes, Aisselles, Bikini complet", price: "1200€", desc: "Inclut 1 retouche offerte." },
      { name: "Pack 3 Zones (Demi-jambes) 8 Séances", duration: "Visage, Aisselles, Demi-jambes", price: "800€", desc: "Une combinaison sur mesure pour les zones apparentes." },
      { name: "Pack 2 Zones 8 Séances", duration: "Bikini complet & Aisselles", price: "750€", desc: "Traitement ciblé sur 8 séances pour un résultat parfait." },
      { name: "Pack Visage 8 Séances", duration: "Visage complet", price: "650€", desc: "Inclut 1 retouche offerte. Un soin délicat pour le visage." },
      { name: "Pack Bikini Intégral 8 Séances", duration: "Bikini", price: "500€", desc: "Inclut 1 retouche offerte pour une finition impeccable." }
    ]
  },
  {
    category: "Tarifs à la séance (Femmes)",
    items: [
      { name: "Visage complet", duration: "La séance", price: "80€", desc: "" },
      { name: "Lèvre supérieure / Menton / Nuque / Cou", duration: "La séance", price: "30€", desc: "Tarif applicable par zone." },
      { name: "Favoris", duration: "La séance", price: "50€", desc: "" },
      { name: "Bikini classique / échancré", duration: "La séance", price: "50€", desc: "Tarif applicable selon la zone choisie." },
      { name: "Inter fessier", duration: "La séance", price: "30€", desc: "" },
      { name: "Bikini complet + inter fessier", duration: "La séance", price: "75€", desc: "" },
      { name: "1/2 jambes", duration: "La séance", price: "70€", desc: "" },
      { name: "Jambes complètes", duration: "La séance", price: "90€", desc: "" },
      { name: "Aisselles / Demi bras", duration: "La séance", price: "50€", desc: "Tarif applicable par zone." },
      { name: "Bras complet", duration: "La séance", price: "75€", desc: "" },
      { name: "Pieds / Mains", duration: "La séance", price: "20€", desc: "Tarif applicable par zone." },
      { name: "Épaules / Ventre complet / Dos complet", duration: "La séance", price: "50€", desc: "Tarif applicable par zone." },
      { name: "Ligne abdominale", duration: "La séance", price: "25€", desc: "" },
      { name: "Seins", duration: "La séance", price: "35€", desc: "" },
    ]
  }
];

export function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div className="flex flex-col gap-24 overflow-x-hidden relative">
      <Seo
        title="Centre d'epilation laser a Gilly, Belgique"
        description="Beauty's Reyyan est un centre d'epilation laser a Gilly en Belgique. Decouvrez les tarifs, l'expertise du centre, les soins complementaires et les informations pratiques pour prendre contact."
        path="/"
        keywords={[
          "epilation laser Gilly Belgique",
          "epilation definitive Charleroi",
          "institut laser Gilly",
          "centre esthetique Gilly",
        ]}
        schema={[
          getBreadcrumbSchema([{ name: "Accueil", path: "/" }]),
        ]}
      />
      
      {/* Hero Section */}
      <section ref={containerRef} className="relative w-full px-6 md:px-12 mx-auto max-w-[96rem] h-[85vh] min-h-[600px] flex flex-col justify-end pb-12 rounded-[2.5rem] overflow-hidden group">
        
        {/* Parallax Image Background */}
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] z-0 overflow-hidden bg-[#E6DECE]"
        >
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1597420901023-2f828fdfec8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGglMjBsZWdzJTIwc2tpbiUyMGJvZHl8ZW58MXx8fHwxNzczMjQ5NzQ3&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Peau douce"
            className="w-full h-full object-cover object-[50%_40%] filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A3C31]/60 to-transparent mix-blend-multiply" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
           <motion.h1 
             initial={{ y: 40, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
             className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight text-shadow-sm"
           >
             Une peau douce, <br className="hidden md:block"/> de façon permanente.
           </motion.h1>
           <motion.p 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
             className="text-lg md:text-xl text-white/90 font-light max-w-xl"
           >
             Le centre specialise dans l'epilation laser de pointe a Gilly, en Belgique. Dites adieu aux poils et bonjour a la liberte.
           </motion.p>
           
           <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
             className="pt-4"
           >
              <a 
                href="#tarifs" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-4 bg-white/20 backdrop-blur-md border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#4A3C31] transition-all duration-500 cursor-pointer"
              >
                <span className="font-medium tracking-wide text-sm uppercase">Découvrir nos tarifs</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#4A3C31] flex items-center justify-center group-hover:bg-[#4A3C31] group-hover:text-white transition-colors duration-500">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
           </motion.div>
        </div>
      </section>

      {/* Intro Split Section */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden"
           >
             <img 
               src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMGhhaXIlMjByZW1vdmFsJTIwdHJlYXRtZW50fGVufDF8fHx8MTc3MzI0NzYxM3ww&ixlib=rb-4.1.0&q=80&w=1080" 
               alt="Séance épilation laser" 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
             />
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-48 md:w-56 aspect-square rounded-[2rem] overflow-hidden border-8 border-[#F9F6F0]"
           >
             <img 
               src="https://images.unsplash.com/photo-1764114235896-034c8772de01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBsYXNlciUyMG1hY2hpbmV8ZW58MXx8fHwxNzczMjQ5NzQ3&ixlib=rb-4.1.0&q=80&w=1080" 
               alt="Machine laser" 
               className="w-full h-full object-cover"
             />
           </motion.div>
        </div>

        <div className="space-y-10">
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium"
          >
             <span className="w-8 h-[1px] bg-[#B89C8A]" />
             Expertise 100% Laser
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4A3C31] leading-tight"
          >
            Nous avons fait de l'épilation <Sparkle className="inline w-8 h-8 text-[#B89C8A] -mt-2"/> définitive notre unique spécialité.
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="text-lg text-[#70655B] font-light leading-relaxed"
          >
             Chez Beauty's Reyyan, nous utilisons exclusivement des technologies lasers médicales de dernière génération pour garantir une épilation efficace, sécurisée et indolore sur toutes les zones du corps.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative px-6 md:px-12 max-w-5xl mx-auto py-12 md:py-24 text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="space-y-8"
         >
            <div className="flex items-center justify-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-8">
               <span className="w-12 h-[1px] bg-[#B89C8A]" />
               <Sparkle className="w-4 h-4" />
               <span className="w-12 h-[1px] bg-[#B89C8A]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[#4A3C31] leading-tight">
               L'épilation laser : un luxe <br/> qui change la vie.
            </h2>
            <div className="text-lg md:text-xl text-[#70655B] font-light leading-relaxed max-w-3xl mx-auto space-y-6">
               <p>
                 Fini les rasoirs, la cire et les rendez-vous interminables... L'épilation laser, c'est bien plus qu'un simple soin, c'est un luxe que l'on s'offre pour gagner du temps, du confort et de la confiance en soi.
               </p>
               <p>
                 Investir dans une peau douce tous les jours, sans effort, c'est un petit plaisir qui fait toute la différence. Parce que le vrai luxe, c'est de ne plus avoir à y penser.
               </p>
            </div>
         </motion.div>
      </section>

      {/* Bento Grid Features */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-[#FCFBF9] border border-[#E6DECE] rounded-[2rem] p-10 flex flex-col justify-between hover:border-[#B89C8A] transition-colors group"
          >
             <div>
               <h3 className="text-3xl font-serif text-[#4A3C31] mb-4 group-hover:text-[#B89C8A] transition-colors">Efficacité prouvée</h3>
               <p className="text-[#70655B] max-w-md">De votre première consultation à votre résultat définitif, nous vous accompagnons avec un protocole strict et adapté à votre phototype.</p>
             </div>
             <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#B89C8A]">
                   <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-medium text-[#4A3C31] tracking-wide text-sm uppercase">Plans sur-mesure</span>
             </div>
          </motion.div>

          {/* Card 2 - Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#F4EFE6] rounded-[2rem] p-10 flex flex-col items-center justify-center text-center space-y-4"
          >
             <span className="text-5xl font-serif text-[#B89C8A]">{siteConfig.experienceYears}+</span>
             <p className="text-[#70655B] text-sm font-medium uppercase tracking-widest">Annees <br/> d'experience</p>
          </motion.div>

          {/* Card 3 - Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 rounded-[2rem] overflow-hidden relative"
          >
             <img src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2xpbmljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMjQ5NzQ3&ixlib=rb-4.1.0&q=80&w=1080" alt="Clinique intérieur" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-500" />
          </motion.div>

          {/* Card 4 - Founder */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="md:col-span-2 bg-white border border-[#E6DECE] rounded-[2rem] p-10 flex flex-col justify-center gap-6"
          >
             <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-[1.25rem] bg-[#E6DECE] overflow-hidden border border-[#E6DECE]">
                   <FounderPortrait
                     alt="Portrait de la fondatrice de Beauty's Reyyan"
                     className="w-full h-full object-cover"
                   />
                </div>
                <div>
                   <p className="font-medium text-[#4A3C31] text-base">Reyyan</p>
                   <p className="text-xs text-[#70655B] uppercase tracking-[0.2em]">Fondatrice & Experte Laser</p>
                </div>
             </div>
             <p className="text-xl md:text-2xl font-serif text-[#4A3C31] leading-snug italic">
               "Un centre pense pour offrir une experience premium, un cadre rassurant et un accompagnement personnalise a chaque seance."
             </p>
             <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#70655B]">
               <span className="rounded-full bg-[#F4EFE6] px-3 py-2">{siteConfig.experienceYears}+ ans d'experience</span>
               <span className="rounded-full bg-[#F4EFE6] px-3 py-2">{siteConfig.address.city}, Belgique</span>
               <a
                 href={siteConfig.instagramUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="rounded-full bg-[#F4EFE6] px-3 py-2 hover:text-[#4A3C31]"
               >
                 Instagram
               </a>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="relative px-6 md:px-12 max-w-7xl mx-auto py-12 md:py-24">
         <div className="text-center max-w-2xl mx-auto mb-16">
           <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-6"
           >
              <span className="w-8 h-[1px] bg-[#B89C8A]" />
              Nos Tarifs
              <span className="w-8 h-[1px] bg-[#B89C8A]" />
           </motion.div>
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-[#4A3C31] mb-6"
           >
              Une tarification claire et précise
           </motion.h2>
           <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#70655B] text-lg font-light"
           >
              Découvrez nos tarifs par zone et nos forfaits avantageux pour votre épilation laser.
           </motion.p>
         </div>

         <div className="space-y-24">
            {services.map((section, sectionIndex) => (
               <motion.div 
                 key={section.category}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8 }}
                 className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12"
               >
                  <div className="lg:col-span-4">
                     <h3 className="text-3xl font-serif text-[#4A3C31] sticky top-32">{section.category}</h3>
                  </div>
                  
                  <div className="lg:col-span-8">
                     {section.category === "Tarifs à la séance (Femmes)" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 bg-[#FCFBF9] border border-[#E6DECE] rounded-[2rem] p-8 md:p-10">
                           {section.items.map((item, itemIndex) => (
                              <motion.div 
                                key={item.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: (itemIndex % 7) * 0.1 }}
                                className="flex justify-between items-end border-b border-[#E6DECE] pb-3 group-hover:border-[#B89C8A] transition-colors"
                              >
                                 <div className="flex flex-col pr-4">
                                    <span className="text-lg font-serif text-[#4A3C31]">{item.name}</span>
                                    {item.desc && <span className="text-xs text-[#70655B] mt-1">{item.desc}</span>}
                                 </div>
                                 <span className="text-xl font-serif text-[#B89C8A] whitespace-nowrap">{item.price}</span>
                              </motion.div>
                           ))}
                        </div>
                     ) : (
                        <div className="flex flex-col gap-6">
                           {section.items.map((item, itemIndex) => (
                              <motion.div 
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                                className="group relative bg-[#FCFBF9] border border-[#E6DECE] rounded-[2rem] p-6 md:p-8 hover:bg-[#F4EFE6] hover:border-[#B89C8A] transition-all duration-500 overflow-hidden"
                              >
                                 <div className="flex items-start justify-between gap-4 mb-3">
                                    <h4 className="text-lg md:text-xl font-serif text-[#4A3C31] flex-1">{item.name}</h4>
                                    <span className="text-2xl md:text-3xl font-serif text-[#4A3C31] shrink-0">{item.price}</span>
                                 </div>
                                 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                                    {item.desc && <p className="text-[#70655B] text-sm leading-relaxed flex-1 pr-4">{item.desc}</p>}
                                    <span className="text-[10px] md:text-xs text-[#B89C8A] uppercase tracking-widest font-medium shrink-0 sm:text-right">
                                       {item.duration}
                                    </span>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     )}
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

    </div>
  );
}
