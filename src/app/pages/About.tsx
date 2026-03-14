import { motion } from "motion/react";
import { Sparkle } from "lucide-react";
import { FounderPortrait } from "../components/FounderPortrait";
import { Seo } from "../components/Seo";
import { getBreadcrumbSchema, siteConfig } from "../siteConfig";

export function About() {
  return (
    <div className="relative min-h-screen">
       <Seo
         title="A propos du centre d'epilation laser a Gilly"
         description="Decouvrez l'univers de Beauty's Reyyan, centre d'epilation laser a Gilly en Belgique, dirige par une fondatrice experimentee depuis plus de 4 ans."
         path="/about"
         keywords={[
           "a propos Beauty's Reyyan",
           "centre epilation laser Gilly",
           "fondatrice Beauty's Reyyan",
           "epilation laser Belgique",
         ]}
         schema={[
           getBreadcrumbSchema([
             { name: "Accueil", path: "/" },
             { name: "A propos", path: "/about" },
           ]),
         ]}
       />
       {/* Hero Image Section */}
       <section className="relative w-full px-6 md:px-12 mx-auto max-w-[96rem] h-[60vh] min-h-[500px] mt-8 rounded-[2.5rem] overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2xpbmljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMjQ5NzQ3&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Intérieur du centre"
            className="w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="text-5xl md:text-7xl font-serif text-white px-4"
             >
                Expertise, Sécurité, <br/> et Technologie.
             </motion.h1>
          </div>
       </section>

       {/* Philosophy Section */}
       <section className="relative px-6 md:px-12 max-w-5xl mx-auto py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-4xl md:text-5xl font-serif text-[#4A3C31] leading-tight mb-8">
                Notre philosophie : L'excellence de l'épilation définitive, sans compromis.
             </h2>
             <div className="w-16 h-[1px] bg-[#B89C8A] mb-8" />
             <p className="text-[#70655B] leading-relaxed mb-6">
                Chez Beauty's Reyyan, nous avons fait le choix de l'hyper-specialisation. Depuis plus de {siteConfig.experienceYears} ans, le centre accompagne sa clientele avec une approche precise, rassurante et entierement dediee a l'epilation laser.
             </p>
             <p className="text-[#70655B] leading-relaxed">
                Ce positionnement nous permet de travailler avec des protocoles clairs, d'adapter chaque seance au phototype de la cliente et d'offrir une experience premium au coeur de Gilly, en Belgique.
             </p>
          </div>
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#F9F6F0]">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="w-full h-full"
             >
               <div className="flex h-full items-start justify-center px-5 pt-6 pb-36 sm:px-6 sm:pt-8 sm:pb-40 md:p-0">
                  <FounderPortrait
                    alt="Portrait de la fondatrice de Beauty's Reyyan"
                    className="h-full w-full object-contain object-top md:object-cover"
                  />
               </div>
             </motion.div>
             <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white">
                <h3 className="text-xl font-serif text-[#4A3C31] mb-1">Reyyan</h3>
                <p className="text-sm text-[#70655B] uppercase tracking-wider mb-3">Fondatrice & Experte Laser</p>
                <div className="flex gap-2 flex-wrap">
                   <span className="inline-flex items-center gap-1 text-xs font-medium text-[#4A3C31] bg-[#F4EFE6] px-3 py-1 rounded-full">
                     <Sparkle className="w-3 h-3" /> Centre specialise
                   </span>
                   <span className="inline-flex items-center gap-1 text-xs font-medium text-[#4A3C31] bg-[#F4EFE6] px-3 py-1 rounded-full">
                     {siteConfig.experienceYears}+ ans d'experience
                   </span>
                   <span className="inline-flex items-center gap-1 text-xs font-medium text-[#4A3C31] bg-[#F4EFE6] px-3 py-1 rounded-full">
                     Gilly, Belgique
                   </span>
                </div>
             </div>
          </div>
       </section>

       {/* Values Grid */}
       <section className="relative bg-[#FCFBF9] py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-serif text-[#4A3C31]">Pourquoi nous choisir ?</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Experience Reelle", desc: `Plus de ${siteConfig.experienceYears} ans de pratique terrain au service d'une clientele qui recherche expertise, regularite et confort.` },
                  { title: "Protocoles Personnalises", desc: "Chaque seance est adaptee a la zone, au phototype et a l'objectif de la cliente pour garder une approche precise et rassurante." },
                  { title: "Centre en Belgique", desc: "Beauty's Reyyan vous accueille a Gilly avec une experience haut de gamme, pensee pour completer parfaitement la visibilite sur Instagram et le bouche-a-oreille local." }
                ].map((value, i) => (
                   <motion.div 
                     key={value.title}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: i * 0.2 }}
                     className="bg-white border border-[#E6DECE] rounded-[2rem] p-10 text-center"
                   >
                      <h3 className="text-xl font-serif text-[#4A3C31] mb-4">{value.title}</h3>
                      <p className="text-[#70655B] text-sm leading-relaxed">{value.desc}</p>
                   </motion.div>
                ))}
             </div>
          </div>
       </section>
    </div>
  );
}
