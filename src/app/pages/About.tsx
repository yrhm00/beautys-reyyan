import { motion } from "motion/react";
import { Sparkle } from "lucide-react";

export function About() {
  return (
    <div className="relative min-h-screen">
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
                Chez Beauty's Reyyan, nous avons fait le choix de l'hyper-spécialisation. Plutôt que de proposer de multiples soins esthétiques, nous nous concentrons à 100% sur l'épilation laser.
             </p>
             <p className="text-[#70655B] leading-relaxed">
                Ce choix nous permet de maîtriser les dernières technologies (Alexandrite, Nd:YAG, Diode) et de garantir à nos patientes un résultat optimal, définitif et quasiment sans douleur, quel que soit leur type de peau, dans un environnement chic, propre et sécurisé.
             </p>
          </div>
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden">
             <motion.img 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               src="https://images.unsplash.com/photo-1663229049147-30f47be043ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXJtYXRvbG9naXN0JTIwY29uc3VsdGF0aW9uJTIwbGFzZXJ8ZW58MXx8fHwxNzczMjQ5NzU0&ixlib=rb-4.1.0&q=80&w=1080" 
               alt="Dr. Reyyan"
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white">
                <h3 className="text-xl font-serif text-[#4A3C31] mb-1">Mme Reyyan</h3>
                <p className="text-sm text-[#70655B] uppercase tracking-wider mb-3">Fondatrice & Experte Laser</p>
                <div className="flex gap-2">
                   <span className="inline-flex items-center gap-1 text-xs font-medium text-[#4A3C31] bg-[#F4EFE6] px-3 py-1 rounded-full">
                     <Sparkle className="w-3 h-3" /> Certifiée
                   </span>
                   <span className="inline-flex items-center gap-1 text-xs font-medium text-[#4A3C31] bg-[#F4EFE6] px-3 py-1 rounded-full">
                     10+ ans d'exp.
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
                  { title: "Matériel Haute Technologie", desc: "Nous utilisons exclusivement des lasers médicaux de classe IV équipés de systèmes de refroidissement cryogéniques pour un confort absolu." },
                  { title: "Sécurité Médicale", desc: "Tous nos protocoles sont validés et testés. Chaque séance est précédée d'une analyse de votre peau pour adapter les paramètres." },
                  { title: "Spécialisation 100%", desc: "Nous ne faisons qu'une seule chose, et nous le faisons à la perfection. L'épilation laser est notre seule expertise." }
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