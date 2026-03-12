import { motion, AnimatePresence } from "motion/react";
import { Clock, Info, AlertTriangle, Snowflake, Sparkle, CheckCircle2, Droplets, Zap, ShieldCheck, Waves } from "lucide-react";
import { useState } from "react";
import { Seo } from "../components/Seo";
import { getBreadcrumbSchema, getFaqSchema } from "../siteConfig";

const faqEntries = [
  {
    question: "Combien de seances sont generalement necessaires pour l'epilation laser ?",
    answer:
      "Le nombre de seances depend de la zone, de la pilosite et du cycle du poil. Le site presente des forfaits sur 8 seances, avec possibilite de retouches selon l'evolution.",
  },
  {
    question: "Comment preparer sa peau avant une seance laser ?",
    answer:
      "Il faut arreter la cire, l'epilateur et la pince, raser la zone 24h avant le rendez-vous et venir sans maquillage ni creme sur la zone concernee.",
  },
  {
    question: "Le laser est-il adapte a tous les phototypes ?",
    answer:
      "Le centre explique travailler avec plusieurs longueurs d'onde afin d'adapter le protocole au phototype et a la zone a traiter.",
  },
  {
    question: "Pourquoi une retouche annuelle peut-elle etre utile ?",
    answer:
      "Le site rappelle que les variations hormonales et les cycles naturels peuvent provoquer quelques repousses residuelles, d'ou l'interet d'une retouche annuelle.",
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState<"laser" | "cryo" | "hydra">("laser");

  return (
    <div className="relative min-h-screen px-4 md:px-6 lg:px-12 max-w-7xl mx-auto py-16 md:py-24 lg:py-32">
       <Seo
         title="Services laser, cryolipolyse et Hydra-Face"
         description="Consultez les services Beauty's Reyyan a Gilly en Belgique: epilation laser, cryolipolyse, Hydra-Face, informations pratiques, contre-indications et FAQ."
         path="/services"
         keywords={[
           "services epilation laser Gilly",
           "cryolipolyse Belgique",
           "Hydra-Face Gilly",
           "tarifs epilation laser Charleroi",
         ]}
         schema={[
           getBreadcrumbSchema([
             { name: "Accueil", path: "/" },
             { name: "Services", path: "/services" },
           ]),
           getFaqSchema(faqEntries),
         ]}
       />
       
       {/* Top Switcher */}
       <div className="flex flex-col items-center justify-center mb-12 md:mb-16 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-[#FCFBF9] border border-[#E6DECE] p-1.5 md:p-2 rounded-full flex items-center shadow-sm overflow-x-auto max-w-full w-full md:w-auto"
          >
             <button 
               onClick={() => setActiveTab('laser')} 
               className={`relative px-4 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium transition-colors duration-500 whitespace-nowrap ${activeTab === 'laser' ? 'text-white' : 'text-[#70655B] hover:text-[#4A3C31]'}`}
             >
               {activeTab === 'laser' && (
                 <motion.div layoutId="activeTabBg" className="absolute inset-0 bg-[#4A3C31] rounded-full z-0" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
               )}
               <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
                 <Sparkle className="w-3.5 h-3.5 md:w-4 md:h-4" /> Épilation Laser
               </span>
             </button>
             
             <button 
               onClick={() => setActiveTab('cryo')} 
               className={`relative px-4 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium transition-colors duration-500 whitespace-nowrap ${activeTab === 'cryo' ? 'text-white' : 'text-[#70655B] hover:text-[#4A3C31]'}`}
             >
               {activeTab === 'cryo' && (
                 <motion.div layoutId="activeTabBg" className="absolute inset-0 bg-[#4A3C31] rounded-full z-0" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
               )}
               <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
                 <Snowflake className="w-3.5 h-3.5 md:w-4 md:h-4" /> Cryolipolyse
               </span>
             </button>

             <button 
               onClick={() => setActiveTab('hydra')} 
               className={`relative px-4 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium transition-colors duration-500 whitespace-nowrap ${activeTab === 'hydra' ? 'text-white' : 'text-[#70655B] hover:text-[#4A3C31]'}`}
             >
               {activeTab === 'hydra' && (
                 <motion.div layoutId="activeTabBg" className="absolute inset-0 bg-[#4A3C31] rounded-full z-0" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
               )}
               <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
                 <Droplets className="w-3.5 h-3.5 md:w-4 md:h-4" /> Hydra-Face
               </span>
             </button>
          </motion.div>
       </div>

       <AnimatePresence mode="wait">
         {activeTab === "laser" && (
           <motion.div 
             key="laser"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.5 }}
             className="relative space-y-24"
           >
             {/* Header */}
             <div className="max-w-3xl">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-6"
               >
                  <span className="w-8 h-[1px] bg-[#B89C8A]" />
                  Épilation Définitive
               </motion.div>
               <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-7xl font-serif text-[#4A3C31] leading-tight mb-8"
               >
                  Laser Diode, <br/>la fin des compromis.
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-lg text-[#70655B] font-light max-w-2xl leading-relaxed"
               >
                  Un traitement au laser qui permet une épilation progressive de n'importe quelle zone du corps. Progressivement vos poils disparaissent et vous ne devez plus vous inquiéter de votre épilation hebdomadaire.
               </motion.p>
             </div>

             {/* Bento Grid Info Laser */}
             <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Comment ça marche */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="md:col-span-7 bg-[#FCFBF9] border border-[#E6DECE] rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden"
                >
                   <h3 className="text-3xl font-serif text-[#4A3C31] mb-6 flex items-center gap-3">
                      <Zap className="text-[#B89C8A] w-6 h-6" /> Le déroulement
                   </h3>
                   <div className="space-y-4 text-[#70655B] text-lg font-light leading-relaxed">
                      <p>
                         Lors de la séance, un faisceau lumineux parcourt la peau et le laser envoie simultanément une lumière qui va être absorbée par le poil.
                      </p>
                      <p>
                         Cette lumière fournit une intense chaleur qui détruit le poil à sa racine (au niveau du bulbe), l'empêchant de donner naissance à un nouveau poil.
                      </p>
                      <div className="mt-6 bg-white p-6 rounded-2xl border border-[#E6DECE] flex gap-4 items-start">
                         <Info className="w-6 h-6 text-[#B89C8A] shrink-0" />
                         <p className="text-sm">
                            <strong className="text-[#4A3C31]">Une question de cycle :</strong> Le poil doit être en phase de croissance pour être détruit efficacement. C'est pourquoi plusieurs séances espacées sont nécessaires. Un corps étant différent d'un autre, le nombre de séances (8 ou plus) varie selon la pilosité et les hormones.
                         </p>
                      </div>
                   </div>
                </motion.div>

                {/* Avantages */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="md:col-span-5 bg-[#4A3C31] text-white rounded-[2.5rem] p-10 md:p-12"
                >
                   <h3 className="text-3xl font-serif mb-8 flex items-center gap-3">
                      <ShieldCheck className="text-[#B89C8A] w-6 h-6" /> Les avantages
                   </h3>
                   <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                         <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-[#E6DECE]"/></div>
                         <p className="text-[#E6DECE] font-light leading-relaxed"><strong className="text-white">Indolore :</strong> la tête du laser offre un refroidissement à -5° qui soulage immédiatement la peau.</p>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-[#E6DECE]"/></div>
                         <p className="text-[#E6DECE] font-light leading-relaxed"><strong className="text-white">Universel :</strong> Efficace sur tous les types de peaux, y compris les poils fins et clairs.</p>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-[#E6DECE]"/></div>
                         <p className="text-[#E6DECE] font-light leading-relaxed"><strong className="text-white">Gain de temps :</strong> Un investissement pour la vie et plus de tracas avant les vacances !</p>
                      </li>
                   </ul>
                </motion.div>

                {/* Les types d'ondes */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                   <div className="md:col-span-3 mb-2 flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium">
                      <span className="w-8 h-[1px] bg-[#B89C8A]" />
                      Expertise technologique
                   </div>
                   {[
                      { title: "Alexandrite", desc: "Cible les poils clairs et fins. Adapté pour une épilation des sourcils ou de la lèvre supérieure." },
                      { title: "Diode", desc: "Touche le plus grand nombre de poils. Idéale pour les bras, jambes, joues et la barbe." },
                      { title: "YAG", desc: "Adapté aux peaux foncées. Recommandé pour les poils profondément implantés (nuque, aisselles, pubis)." }
                   ].map((onde, idx) => (
                      <div key={onde.title} className="bg-white border border-[#E6DECE] rounded-3xl p-8 hover:border-[#B89C8A] transition-colors">
                         <Waves className="w-8 h-8 text-[#B89C8A] mb-6" />
                         <h4 className="text-xl font-serif text-[#4A3C31] mb-3 uppercase tracking-wider">{onde.title}</h4>
                         <p className="text-[#70655B] text-sm leading-relaxed">{onde.desc}</p>
                      </div>
                   ))}
                </motion.div>

                {/* Bons gestes */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="md:col-span-12 bg-[#F4EFE6] rounded-[2.5rem] p-10 md:p-12 flex flex-col md:flex-row items-center gap-12"
                >
                   <div className="w-full md:w-1/3 aspect-[4/3] rounded-[2rem] overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1771510581541-58a40280d8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZ2xvd2luZyUyMHNraW4lMjBib2R5fGVufDF8fHx8MTc3MzI1NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Peau douce" className="absolute inset-0 w-full h-full object-cover" />
                   </div>
                   <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-4">
                         <AlertTriangle className="w-4 h-4" />
                         Avant chaque séance
                      </div>
                      <h3 className="text-3xl font-serif text-[#4A3C31] mb-6">Les bons gestes à adopter</h3>
                      <p className="text-[#70655B] text-lg font-light mb-8">
                         Pour garantir l'efficacité de vos séances et la sécurité de votre peau, vous devez impérativement respecter ces consignes :
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div className="bg-white p-4 rounded-xl border border-[#E6DECE] flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                            <span className="text-[#4A3C31] text-sm font-medium">Arrêt total de la cire, de l'épilateur et de la pince</span>
                         </div>
                         <div className="bg-white p-4 rounded-xl border border-[#E6DECE] flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#B89C8A] shrink-0" />
                            <span className="text-[#4A3C31] text-sm font-medium">Se raser 24h avant votre rendez-vous</span>
                         </div>
                         <div className="bg-white p-4 rounded-xl border border-[#E6DECE] flex items-center gap-3 sm:col-span-2">
                            <div className="w-2 h-2 rounded-full bg-[#B89C8A] shrink-0" />
                            <span className="text-[#4A3C31] text-sm font-medium">Venir à vos séances totalement démaquillée / sans aucune crème</span>
                         </div>
                      </div>
                   </div>
                </motion.div>
             </div>

             {/* Conditions de paiement */}

             {/* Retouche Annuelle (Spécifique Laser) */}
             <div className="mt-16 max-w-5xl mx-auto pb-16">
                <motion.div
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="bg-[#4A3C31] text-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#70655B]/40 to-transparent rounded-bl-full pointer-events-none" />
                   
                   <div className="relative z-10">
                      <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-6">
                         <span className="w-8 h-[1px] bg-[#B89C8A]" />
                         Informations Essentielles
                      </div>
                      <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                         Pourquoi la retouche annuelle <br/> est indispensable ?
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#E6DECE] font-light text-lg leading-relaxed">
                         <div className="space-y-6">
                            <p>
                               Même si l'épilation définitive offre des résultats durables, le corps continue d'évoluer : <strong>renouvellement cellulaire, variations hormonales et cycles naturels du poil.</strong>
                            </p>
                            <p>
                               Ces changements sont normaux et peuvent entraîner la repousse de quelques poils résiduels au fil du temps. C'est pourquoi une retouche par an est essentielle pour maintenir un résultat net et homogène.
                            </p>
                            <p>
                               <strong>Pourquoi ne pas attendre 2-3 ans ?</strong> Le poil peut réapparaître progressivement, et un long délai nécessite parfois plusieurs séances pour revenir au même niveau.
                            </p>
                         </div>
                         <div className="space-y-6">
                            <h3 className="text-white font-serif text-2xl mb-4">Les limites & contre-indications :</h3>
                            <ul className="space-y-4 text-base">
                               <li className="flex items-start gap-3">
                                  <span className="text-[#B89C8A] mt-1">•</span>
                                  <span><strong>Non adapté à certains poils :</strong> L'épilation au laser ne convient pas aux poils roux, blancs et très clairs, car ils contiennent peu ou pas de mélanine.</span>
                               </li>
                               <li className="flex items-start gap-3">
                                  <span className="text-[#B89C8A] mt-1">•</span>
                                  <span><strong>Réceptivité variable :</strong> L'efficacité peut varier selon la génétique, les traitements médicamenteux ou les variations hormonales. Une personne peut présenter une bonne indication mais être non-réceptive.</span>
                               </li>
                               <li className="flex items-start gap-3">
                                  <span className="text-[#B89C8A] mt-1">•</span>
                                  <span><strong>Sécurité optimale :</strong> L'épilation au laser ne présente aucun danger lorsqu'elle est pratiquée avec maîtrise et expertise, ce qui est notre engagement absolu.</span>
                               </li>
                            </ul>
                         </div>
                      </div>

                      <div className="mt-12 pt-8 border-t border-[#70655B]/50">
                         <p className="text-center font-serif text-xl md:text-2xl text-white italic">
                            "Une épilation définitive offre une base durable, mais votre retouche annuelle est la clé pour garder un résultat impeccable."
                         </p>
                      </div>
                   </div>
                </motion.div>
             </div>
             {/* Fin Section Retouche Annuelle */}
           </motion.div>
         )}
         
         {activeTab === "cryo" && (
           <motion.div 
             key="cryo"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.5 }}
             className="relative space-y-24"
           >
              {/* Header Cryo */}
              <div className="max-w-3xl">
                <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8 }}
                   className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-6"
                >
                   <span className="w-8 h-[1px] bg-[#B89C8A]" />
                   Soin Minceur
                </motion.div>
                <motion.h1 
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                   className="text-5xl md:text-7xl font-serif text-[#4A3C31] leading-tight mb-8"
                >
                   La Cryolipolyse, <br/> sculpter par le froid.
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.4 }}
                   className="text-lg text-[#70655B] font-light max-w-2xl leading-relaxed"
                >
                   La cryolipolyse est une technique capable de détruire définitivement les cellules graisseuses localisées pour perdre des centimètres dès la première séance, de manière naturelle et non invasive.
                </motion.p>
              </div>

              {/* Bento Grid Explanations */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                 
                 {/* C'est quoi */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="bg-[#FCFBF9] border border-[#E6DECE] rounded-[2.5rem] p-10 md:p-12"
                 >
                    <h3 className="text-3xl font-serif text-[#4A3C31] mb-6 flex items-center gap-3">
                      <Snowflake className="text-[#B89C8A]" /> C'est quoi ?
                    </h3>
                    <div className="space-y-4 text-[#70655B] leading-relaxed text-lg font-light">
                       <p>
                         La cryolipolyse est une technique capable de détruire définitivement les cellules graisseuses localisées pour perdre des centimètres dès la première séance.
                       </p>
                       <p>
                         Le froid agit sur les adipocytes provoquant leurs morts cellulaires. La cellule adipeuse va ainsi se rétracter, se vider de ses toxines et se nécroser pour s'éliminer par voie naturelle.
                       </p>
                    </div>
                 </motion.div>

                 {/* Déroulement */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="bg-white border border-[#E6DECE] rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden"
                 >
                    <h3 className="text-3xl font-serif text-[#4A3C31] mb-6 flex items-center gap-3">
                      <Clock className="text-[#B89C8A]" /> Comment se passe une séance
                    </h3>
                    <div className="space-y-4 text-[#70655B] leading-relaxed text-lg font-light">
                       <p>
                         Les séances de traitement par le froid durent 30 minutes mais peuvent aller jusqu'à une heure si on opte pour l'option drainage par vibration pour préparer la zone au traitement.
                       </p>
                       <p>
                         La prestataire passe la sonde de l'appareil cryolipolyse 2 qui envoie en premier la chaleur puis descend à -8°C pour créer un choc thermique ultra-efficace.
                       </p>
                       <p className="text-[#4A3C31] font-medium text-sm">
                         On ne ressent pas de douleur mais un léger engourdissement dû au froid puis une insensibilité sur le reste de la séance.
                       </p>
                    </div>
                 </motion.div>

                 {/* Effets */}
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="bg-[#4A3C31] text-white rounded-[2.5rem] p-10 md:p-12 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                 >
                    <div className="space-y-6 relative z-10">
                       <h3 className="text-3xl font-serif mb-6 flex items-center gap-3">
                         <Sparkle className="text-[#B89C8A]" /> Les effets
                       </h3>
                       <p className="text-[#E6DECE] leading-relaxed font-light text-lg">
                         L'action du froid stimule et active la microcirculation sanguine, qui favorise le retour lymphatique, lutte contre la rétention d'eau, tonifie, raffermit, affine et surtout <strong className="text-white">les graisses détruites ne reviennent plus</strong>.
                       </p>
                       <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mt-6 backdrop-blur-sm">
                          <p className="text-white font-medium">
                            Après la première séance vous remarquerez au bout d'une quinzaine de jours une réduction de 1 à 4 cm de la zone traitée.
                          </p>
                          <p className="text-sm text-[#E6DECE] mt-2">Pour un effet durable et satisfaisant il est recommandé d'effectuer plusieurs séances.</p>
                       </div>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden aspect-[4/3] relative">
                       <img src="https://images.unsplash.com/photo-1622878179314-0b25f2ad50e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5JTIwY29udG91cmluZyUyMHRyZWF0bWVudCUyMGNsaW5pY3xlbnwxfHx8fDE3NzMyNTY3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Soin corporel" className="absolute inset-0 w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-black/20" />
                    </div>
                 </motion.div>
              </div>

              {/* Contre-indications & Avantages */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">
                 {/* Pour qui */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="bg-red-50/50 border border-red-100 rounded-[2.5rem] p-10 md:p-12"
                 >
                    <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-red-800 font-medium mb-8">
                       <AlertTriangle className="w-4 h-4" />
                       Contre-indications
                    </div>
                    <h3 className="text-3xl font-serif text-[#4A3C31] mb-6">Pour tout le monde ! <br/> <span className="text-[#70655B] text-2xl">Ou presque...</span></h3>
                    
                    <p className="text-[#70655B] mb-8">Ce traitement est strictement interdit aux personnes présentant les profils suivants :</p>
                    
                    <ul className="space-y-4">
                       {['Femme enceinte', 'Personne diabétique', "Atteint d'un cancer", 'Syndrome de Raynaud'].map((item) => (
                          <li key={item} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-red-100/50">
                             <div className="w-2 h-2 rounded-full bg-red-400" />
                             <span className="text-[#4A3C31] font-medium">{item}</span>
                          </li>
                       ))}
                    </ul>
                 </motion.div>

                 {/* Avantages */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="bg-[#F4EFE6] rounded-[2.5rem] p-10 md:p-12"
                 >
                    <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-8">
                       <CheckCircle2 className="w-4 h-4" />
                       Avantages
                    </div>
                    <h3 className="text-3xl font-serif text-[#4A3C31] mb-8">Une méthode douce <br/> et redoutable</h3>
                    
                    <ul className="space-y-6">
                       <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#B89C8A] shrink-0">1</div>
                          <div>
                             <h4 className="font-serif text-xl text-[#4A3C31] mb-1">100% Naturel & Non-Invasif</h4>
                             <p className="text-[#70655B] text-sm">Une technique qui respecte votre corps sans aucune intervention chirurgicale, et surtout non douloureuse.</p>
                          </div>
                       </li>
                       <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#B89C8A] shrink-0">2</div>
                          <div>
                             <h4 className="font-serif text-xl text-[#4A3C31] mb-1">Résultats durables</h4>
                             <p className="text-[#70655B] text-sm">Les résultats sont rapidement visibles et surtout sont durables, voire définitifs sur les cellules détruites.</p>
                          </div>
                       </li>
                       <li className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#4A3C31] flex items-center justify-center text-white shrink-0"><Info className="w-4 h-4"/></div>
                          <div>
                             <h4 className="font-serif text-xl text-[#4A3C31] mb-1">Le seul inconvénient</h4>
                             <p className="text-[#70655B] text-sm italic">Il n'est pas possible de traiter plusieurs zones en même temps. La précipitation est déconseillée : on ne traite qu'une seule zone à la fois.</p>
                          </div>
                       </li>
                    </ul>
                 </motion.div>
            </div>

           </motion.div>
         )}

         {activeTab === "hydra" && (
           <motion.div 
             key="hydra"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.5 }}
             className="relative space-y-24"
           >
              {/* Header Hydra */}
              <div className="max-w-3xl">
                <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8 }}
                   className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-6"
                >
                   <span className="w-8 h-[1px] bg-[#B89C8A]" />
                   Soin du Visage
                </motion.div>
                <motion.h1 
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                   className="text-5xl md:text-7xl font-serif text-[#4A3C31] leading-tight mb-8"
                >
                   Hydra-Face, <br/> l'éclat parfait.
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.4 }}
                   className="text-lg text-[#70655B] font-light max-w-2xl leading-relaxed"
                >
                   L'hydra-face soigne de nombreux problèmes cutanés sur le visage. C'est un soin de peau nettoyant, désincrustant, hydratant et anti-âge qui consiste en un peeling doux, une aspiration des imperfections et une hydratation en profondeur.
                </motion.p>
              </div>

              {/* Composition Section */}
              <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-[#FCFBF9] border border-[#E6DECE] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
              >
                 <div className="flex-1 space-y-6">
                    <h3 className="text-3xl font-serif text-[#4A3C31] flex items-center gap-3">
                       <Droplets className="text-[#B89C8A] w-8 h-8" />
                       Des ingrédients botaniques
                    </h3>
                    <p className="text-[#70655B] leading-relaxed text-lg font-light">
                       Le soin se compose d'ingrédients botaniques contenant des éléments nutritifs essentiels : <strong>l'acide hyaluronique, l'extrait de pépins de marronnier d'Inde, l'extrait d'algue rouge, des peptides de cuivre, de zinc et de magnésium.</strong>
                    </p>
                 </div>
                 <div className="w-full md:w-1/3 aspect-square rounded-[2rem] overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1748390488088-ffeabd67ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGZhY2UlMjBnbG93aW5nJTIwc2tpbnxlbnwxfHx8fDE3NzMyNTcwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Peau éclatante" className="absolute inset-0 w-full h-full object-cover" />
                 </div>
              </motion.div>

              {/* Les 4 Étapes */}
              <div>
                 <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-12">
                    <span className="w-8 h-[1px] bg-[#B89C8A]" />
                    Procédure du soin
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Etape 1 */}
                    <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       className="bg-white border border-[#E6DECE] rounded-[2rem] p-8 relative hover:border-[#B89C8A] transition-colors"
                    >
                       <div className="text-6xl font-serif text-[#F4EFE6] absolute top-6 right-8">1</div>
                       <h4 className="text-xl font-serif text-[#4A3C31] mb-4 relative z-10">Nettoyage</h4>
                       <p className="text-[#70655B] text-sm leading-relaxed relative z-10">
                          Sur la peau préalablement démaquillée, le soin commence par un nettoyage en douceur de l'épiderme afin de retirer les cellules mortes et le sébum.
                       </p>
                    </motion.div>

                    {/* Etape 2 */}
                    <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.1 }}
                       className="bg-white border border-[#E6DECE] rounded-[2rem] p-8 relative hover:border-[#B89C8A] transition-colors"
                    >
                       <div className="text-6xl font-serif text-[#F4EFE6] absolute top-6 right-8">2</div>
                       <h4 className="text-xl font-serif text-[#4A3C31] mb-4 relative z-10">Un peeling</h4>
                       <p className="text-[#70655B] text-sm leading-relaxed relative z-10">
                          Un mélange spécifique d'acide salicylique et glycolique aide ensuite à éliminer les impuretés et les saletés qui se trouvent au fond des pores.
                       </p>
                    </motion.div>

                    {/* Etape 3 */}
                    <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.2 }}
                       className="bg-white border border-[#E6DECE] rounded-[2rem] p-8 relative hover:border-[#B89C8A] transition-colors"
                    >
                       <div className="text-6xl font-serif text-[#F4EFE6] absolute top-6 right-8">3</div>
                       <h4 className="text-xl font-serif text-[#4A3C31] mb-4 relative z-10">Extraction</h4>
                       <p className="text-[#70655B] text-sm leading-relaxed relative z-10">
                          Une aspiration à vide indolore élimine les impuretés des pores (points noirs et comédons).
                       </p>
                    </motion.div>

                    {/* Etape 4 */}
                    <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.3 }}
                       className="bg-[#4A3C31] rounded-[2rem] p-8 relative"
                    >
                       <div className="text-6xl font-serif text-[#70655B]/30 absolute top-6 right-8">4</div>
                       <h4 className="text-xl font-serif text-white mb-4 relative z-10">Hydratation</h4>
                       <p className="text-[#E6DECE] text-sm leading-relaxed relative z-10">
                          Une infusion de sérums répare la surface de la peau avec des anti-oxydants. Cela permet la détoxification, le rajeunissement et la restauration d'une structure cutanée saine.
                       </p>
                    </motion.div>
                 </div>
              </div>

              {/* Résultat */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="bg-[#F4EFE6] rounded-[2.5rem] p-10 md:p-16 text-center max-w-4xl mx-auto"
              >
                 <Sparkle className="w-8 h-8 text-[#B89C8A] mx-auto mb-6" />
                 <h3 className="text-2xl md:text-3xl font-serif text-[#4A3C31] mb-8 leading-snug">
                    Dès la première séance la peau est plus douce et éclatante.
                 </h3>
                 <p className="text-[#70655B] mb-6">
                    Il est recommandé de faire une séance par mois pour conserver les résultats à long terme.
                 </p>
                 <p className="text-[#4A3C31] font-medium">
                    De plus, grâce à Hydra-Face votre peau réagira également mieux aux produits cosmétiques que vous appliquez à la maison.
                 </p>
              </motion.div>

           </motion.div>
         )}
       </AnimatePresence>

       {/* Conditions générales (Globales pour tous les soins) */}
       <div className="max-w-5xl mx-auto mt-24 pb-32">
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-[#FCFBF9] border border-[#E6DECE] text-[#4A3C31] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden"
          >
             <div className="relative z-10">
                <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-6">
                   <span className="w-8 h-[1px] bg-[#B89C8A]" />
                   Règlement & Conditions
                </div>
                <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                   Conditions de paiement <br/> & Politique d'annulation
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-light text-sm leading-relaxed text-[#70655B]">
                   <div className="space-y-6">
                      <p>
                         Pour toutes prises de rendez-vous pour nos forfaits ou soins (Laser, Cryolipolyse, Hydra-Face), un <strong>acompte vous sera demandé</strong> (ex: 100€ pour les formules packs lasers). Cet acompte doit être versé dans les 48h suivant la prise de rendez-vous, sans cela votre rendez-vous ne sera pas maintenu.
                      </p>
                      <p>
                         Le paiement de la prestation choisie doit impérativement être effectué <strong>avant le début de la première séance</strong>. Un étalement de paiement en 3x peut être accordé en fonction des circonstances. <em>Attention, cette facilité n'est pas systématique.</em>
                      </p>
                   </div>
                   <div className="space-y-6">
                      <p>
                         Si un étalement est accordé, la première partie du pack est à payer avant la première séance, la deuxième avant la seconde et le reste avant la troisième séance.
                      </p>
                      <p>
                         Dans la mesure où l'institut accorde ces facilités de paiement, nous serons intransigeants si des situations d'impayés viennent à se reproduire. <strong>Aucune excuse, retard ou prétexte ne sera accepté.</strong>
                      </p>
                      <p className="text-[#4A3C31] font-medium">
                         En cas de non-respect de vos engagements, l'institut Beauty's Reyyan mettra fin à votre abonnement immédiatement. Tout soin, séance de cryolipolyse ou pack de laser payé ne pourra en aucun cas être remboursé.
                      </p>
                   </div>
                </div>
             </div>
          </motion.div>
       </div>

       <section className="max-w-5xl mx-auto pb-32">
          <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-[#B89C8A] font-medium mb-8">
             <span className="w-8 h-[1px] bg-[#B89C8A]" />
             FAQ
          </div>
          <div className="space-y-4">
             {faqEntries.map((item) => (
                <details
                  key={item.question}
                  className="group bg-white border border-[#E6DECE] rounded-[1.5rem] p-6 open:border-[#B89C8A]"
                >
                  <summary className="list-none cursor-pointer flex items-center justify-between gap-6 text-[#4A3C31] font-serif text-xl">
                    <span>{item.question}</span>
                    <span className="text-[#B89C8A] transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-[#70655B] max-w-3xl">
                    {item.answer}
                  </p>
                </details>
             ))}
          </div>
       </section>

    </div>
  );
}
