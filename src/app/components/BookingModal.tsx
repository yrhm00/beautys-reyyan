import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ArrowRight, ArrowLeft, AlertCircle, Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { buildMailto, siteConfig } from "../siteConfig";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: "diamond", title: "Pack Diamond (La Séance)", description: "Corps complet. L'épilation intégrale pour une douceur absolue." },
  { id: "platinum", title: "Pack Platinum (La Séance)", description: "Jambes complètes, Bikini intégral & Aisselles." },
  { id: "gold", title: "Pack Gold (La Séance)", description: "Demi-jambes, Bikini intégral & Aisselles." },
  { id: "silver", title: "Pack Silver (La Séance)", description: "Bikini intégral & Aisselles." },
  { id: "pack-premium", title: "Pack Prémium 8 Séances", description: "Corps intégral + 2 séances retouche et soins visage offerts." },
  { id: "pack-3-zones-jambes", title: "Pack 3 Zones (Jambes complètes) 8 Séances", description: "Jambes, Aisselles, Bikini complet + 1 retouche offerte." },
  { id: "pack-3-zones-demi", title: "Pack 3 Zones (Demi-jambes) 8 Séances", description: "Visage, Aisselles, Demi-jambes." },
  { id: "pack-2-zones", title: "Pack 2 Zones 8 Séances", description: "Bikini complet & Aisselles." },
  { id: "pack-visage", title: "Pack Visage 8 Séances", description: "1 retouche offerte." },
  { id: "pack-bikini", title: "Pack Bikini Intégral 8 Séances", description: "1 retouche offerte." },
  { id: "cryo-1", title: "Cryolipolyse - 1 Séance", description: "Soin minceur par le froid pour détruire les cellules graisseuses localisées." },
  { id: "cryo-cure", title: "Cryolipolyse - Cure", description: "Forfait sur plusieurs séances pour un résultat optimal et durable." },
  { id: "hydra-1", title: "Soin Hydra-Face", description: "Soin complet du visage en 4 étapes : nettoyage, peeling, extraction et hydratation." },
  { id: "machine", title: "Vente de Machine Esthétique", description: "Démonstration sur place ou achat d'une machine certifiée CE." }
];

const timePreferences = [
  { id: "matin", label: "Matin (9h - 12h)" },
  { id: "midi", label: "Midi (12h - 14h)" },
  { id: "apres-midi", label: "Après-midi (14h - 18h)" }
];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const [formData, setFormData] = useState({
    serviceId: "",
    date: null as Date | null,
    timePreference: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    acceptedPolicy: false
  });

  // Calendar helpers
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    let day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return day === 0 ? 6 : day - 1; // Lundi = 0, Dimanche = 6
  };

  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const isDaySelectable = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // On exclut les dimanches (0) et les jours passés
    return date >= today && date.getDay() !== 0;
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSubmitted(false);
      setFormData({ 
        serviceId: "", 
        date: null,
        timePreference: "",
        firstName: "", 
        lastName: "", 
        phone: "", 
        email: "", 
        message: "", 
        acceptedPolicy: false 
      });
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 4 && formData.acceptedPolicy) {
      const selectedService = services.find((service) => service.id === formData.serviceId)?.title ?? "Non renseigne";
      const selectedTime = timePreferences.find((pref) => pref.id === formData.timePreference)?.label ?? "Non renseigne";
      const selectedDate = formData.date ? formatDate(formData.date) : "Non renseignee";

      const body = [
        "Bonjour,",
        "",
        "Je souhaite faire une demande de rendez-vous via le site Beauty's Reyyan.",
        "",
        `Prestation : ${selectedService}`,
        `Date souhaitee : ${selectedDate}`,
        `Preference horaire : ${selectedTime}`,
        `Prenom : ${formData.firstName}`,
        `Nom : ${formData.lastName}`,
        `Telephone : ${formData.phone}`,
        `Email : ${formData.email || "Non renseigne"}`,
        "",
        "Informations complementaires :",
        formData.message || "Aucune precision.",
      ].join("\n");

      window.location.href = buildMailto(
        `Demande de rendez-vous - ${selectedService}`,
        body,
      );
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    if (step === 2 && formData.date && formData.timePreference) setStep(3);
    else if (step === 3) setStep(4);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' }).format(date);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#4A3C31]/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-[#FCFBF9] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#E6DECE] shrink-0 bg-white z-10">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl text-[#4A3C31]">
                  Demande de Rendez-vous
                </h2>
                {!isSubmitted && (
                  <p className="text-xs font-medium tracking-widest uppercase text-[#B89C8A]">Étape {step} sur 4</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-[#70655B] hover:text-[#4A3C31] transition-colors p-2 rounded-full hover:bg-[#F4EFE6]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            {isSubmitted ? (
              <div className="flex-1 overflow-y-auto p-12 flex flex-col items-center justify-center text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-600 mb-2" />
                <h3 className="text-xl font-serif text-[#4A3C31]">Demande preparee avec succes</h3>
                <p className="text-[#70655B] text-sm max-w-sm leading-relaxed">
                  Votre application mail va s'ouvrir avec votre demande pre-remplie. Si rien ne se passe,
                  contactez directement le centre au <a href={siteConfig.phoneHref} className="text-[#4A3C31] underline">{siteConfig.phoneDisplay}</a> ou par email a <a href={siteConfig.emailHref} className="text-[#4A3C31] underline">{siteConfig.email}</a>.
                </p>
                <button onClick={onClose} className="mt-8 px-8 py-3 bg-[#4A3C31] text-white rounded-full text-sm font-medium hover:bg-[#70655B] transition-colors">
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 relative flex flex-col">
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    {/* ÉTAPE 1 : PRESTATION */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <h3 className="text-sm font-medium text-[#4A3C31] mb-4">Quelle prestation souhaitez-vous réaliser ?</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {services.map(s => (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, serviceId: s.id });
                                setTimeout(() => setStep(2), 300);
                              }}
                              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                                formData.serviceId === s.id 
                                  ? "border-[#4A3C31] bg-[#4A3C31]/5 shadow-sm" 
                                  : "border-[#E6DECE] hover:border-[#B89C8A] bg-white"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <h4 className={`font-medium ${formData.serviceId === s.id ? "text-[#4A3C31]" : "text-[#70655B]"}`}>{s.title}</h4>
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.serviceId === s.id ? "border-[#4A3C31]" : "border-[#E6DECE]"}`}>
                                  {formData.serviceId === s.id && <div className="w-2 h-2 rounded-full bg-[#4A3C31]" />}
                                </div>
                              </div>
                              <p className="text-xs text-[#70655B] leading-relaxed pr-6">{s.description}</p>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* ÉTAPE 2 : CALENDRIER & HEURE (NOUVEAU) */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-[#4A3C31] flex items-center gap-2">
                              <CalendarIcon className="w-4 h-4" />
                              Choisissez une date souhaitée
                            </h3>
                            <div className="flex items-center gap-2">
                              <button 
                                type="button" 
                                onClick={handlePrevMonth}
                                className="p-1 rounded-full hover:bg-[#F4EFE6] text-[#70655B] transition-colors"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <span className="text-sm font-medium w-24 text-center text-[#4A3C31] capitalize">
                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                              </span>
                              <button 
                                type="button" 
                                onClick={handleNextMonth}
                                className="p-1 rounded-full hover:bg-[#F4EFE6] text-[#70655B] transition-colors"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="bg-white border border-[#E6DECE] rounded-xl p-4 shadow-sm">
                            {/* Days header */}
                            <div className="grid grid-cols-7 gap-1 mb-2">
                              {dayNames.map(day => (
                                <div key={day} className="text-[10px] font-medium text-[#B89C8A] uppercase tracking-wider text-center py-1">
                                  {day}
                                </div>
                              ))}
                            </div>
                            
                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-1">
                              {blanks.map(blank => (
                                <div key={`blank-${blank}`} className="aspect-square" />
                              ))}
                              {days.map(day => {
                                const isSelectable = isDaySelectable(day);
                                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                                const isSelected = formData.date?.getTime() === date.getTime();
                                
                                return (
                                  <button
                                    key={day}
                                    type="button"
                                    disabled={!isSelectable}
                                    onClick={() => setFormData({ ...formData, date, timePreference: "" })}
                                    className={`
                                      aspect-square rounded-lg flex items-center justify-center text-sm transition-all duration-200
                                      ${isSelected ? 'bg-[#4A3C31] text-white font-medium shadow-md scale-105' : ''}
                                      ${!isSelected && isSelectable ? 'hover:bg-[#F4EFE6] text-[#4A3C31]' : ''}
                                      ${!isSelectable ? 'opacity-30 cursor-not-allowed text-[#70655B]' : ''}
                                    `}
                                  >
                                    {day}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <AnimatePresence>
                          {formData.date && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-3 pt-4 border-t border-[#E6DECE]"
                            >
                              <h3 className="text-sm font-medium text-[#4A3C31] flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Préférence horaire
                              </h3>
                              <p className="text-xs text-[#70655B] mb-2">Notre équipe vous contactera pour valider l'heure exacte.</p>
                              <div className="grid grid-cols-1 gap-2">
                                {timePreferences.map((pref) => (
                                  <button
                                    key={pref.id}
                                    type="button"
                                    onClick={() => {
                                      setFormData({ ...formData, timePreference: pref.id });
                                      setTimeout(() => setStep(3), 300);
                                    }}
                                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-300 text-left flex items-center justify-between ${
                                      formData.timePreference === pref.id
                                        ? "border-[#4A3C31] bg-[#4A3C31] text-white"
                                        : "border-[#E6DECE] hover:border-[#B89C8A] bg-white text-[#70655B]"
                                    }`}
                                  >
                                    <span>{pref.label}</span>
                                    {formData.timePreference === pref.id && <CheckCircle2 className="w-4 h-4" />}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}

                    {/* ÉTAPE 3 : COORDONNÉES */}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        {/* Summary badge */}
                        <div className="bg-[#F4EFE6] px-4 py-3 rounded-xl flex flex-col gap-1 border border-[#E6DECE]">
                          <span className="text-xs text-[#B89C8A] font-medium uppercase">Récapitulatif</span>
                          <span className="text-sm text-[#4A3C31] font-medium">
                            {services.find(s => s.id === formData.serviceId)?.title}
                          </span>
                          <span className="text-sm text-[#70655B]">
                            {formData.date ? formatDate(formData.date) : ""} • {timePreferences.find(p => p.id === formData.timePreference)?.label}
                          </span>
                        </div>

                        <h3 className="text-sm font-medium text-[#4A3C31] mb-4">Vos coordonnées</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-[#70655B] uppercase tracking-wider">Prénom *</label>
                            <input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full px-4 py-3 bg-white border border-[#E6DECE] rounded-lg focus:outline-none focus:border-[#B89C8A] focus:ring-1 focus:ring-[#B89C8A] transition-colors" placeholder="Votre prénom" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium text-[#70655B] uppercase tracking-wider">Nom *</label>
                            <input required type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full px-4 py-3 bg-white border border-[#E6DECE] rounded-lg focus:outline-none focus:border-[#B89C8A] focus:ring-1 focus:ring-[#B89C8A] transition-colors" placeholder="Votre nom" />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-medium text-[#70655B] uppercase tracking-wider">Téléphone *</label>
                          <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-white border border-[#E6DECE] rounded-lg focus:outline-none focus:border-[#B89C8A] focus:ring-1 focus:ring-[#B89C8A] transition-colors" placeholder="Votre numéro de téléphone" />
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-medium text-[#70655B] uppercase tracking-wider">Email (Optionnel)</label>
                          <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-white border border-[#E6DECE] rounded-lg focus:outline-none focus:border-[#B89C8A] focus:ring-1 focus:ring-[#B89C8A] transition-colors" placeholder="votre@email.com" />
                        </div>
                      </motion.div>
                    )}

                    {/* ÉTAPE 4 : INFORMATIONS & VALIDATION */}
                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        <h3 className="text-sm font-medium text-[#4A3C31] mb-4">Informations complémentaires</h3>
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-[#70655B] uppercase tracking-wider">Disponibilités & Message (Optionnel)</label>
                          <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-white border border-[#E6DECE] rounded-lg focus:outline-none focus:border-[#B89C8A] focus:ring-1 focus:ring-[#B89C8A] transition-colors resize-none h-32" placeholder="N'hésitez pas à nous indiquer d'autres disponibilités horaires pour faciliter la prise de rendez-vous, ou toute information médicale importante."></textarea>
                        </div>

                        <div className="bg-[#F4EFE6] border border-[#E6DECE] rounded-xl p-4 flex items-start gap-3 mt-6">
                           <AlertCircle className="w-5 h-5 text-[#B89C8A] shrink-0 mt-0.5" />
                           <div className="space-y-2">
                             <h4 className="text-sm font-medium text-[#4A3C31]">Politique d'acompte et d'annulation</h4>
                             <p className="text-xs text-[#70655B] leading-relaxed">
                               Un <strong>acompte de 100€</strong> est demandé dans les 48h suivant votre demande pour valider définitivement le rendez-vous (pour les formules packs lasers). Sans cela, le créneau sera libéré.
                             </p>
                             <p className="text-xs text-[#70655B] leading-relaxed">
                               Toute annulation à moins de 48h entraînera une mise sur liste rouge systématique.
                             </p>
                           </div>
                        </div>

                        <label className="flex items-start gap-3 mt-6 cursor-pointer group">
                           <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                             <input type="checkbox" required className="peer sr-only" checked={formData.acceptedPolicy} onChange={(e) => setFormData({...formData, acceptedPolicy: e.target.checked})} />
                             <div className="w-5 h-5 border border-[#E6DECE] rounded bg-white peer-checked:bg-[#4A3C31] peer-checked:border-[#4A3C31] transition-colors"></div>
                             <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                           </div>
                           <span className="text-sm text-[#70655B] group-hover:text-[#4A3C31] transition-colors">
                             Je reconnais avoir pris connaissance de la politique d'acompte (100€), des conditions de paiement et d'annulation à 48h.
                           </span>
                        </label>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer Navigation */}
                <div className="mt-8 flex gap-3 pt-6 border-t border-[#E6DECE]">
                  {step > 1 && (
                    <button type="button" onClick={handleBack} className="px-6 py-3 rounded-xl border border-[#E6DECE] text-[#4A3C31] font-medium hover:bg-[#F4EFE6] transition-colors flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Retour
                    </button>
                  )}
                  {step > 1 && (
                    <button 
                      type={step === 4 ? "submit" : "button"} 
                      onClick={step < 4 ? handleNext : undefined}
                      disabled={
                        (step === 2 && (!formData.date || !formData.timePreference)) ||
                        (step === 3 && (!formData.firstName || !formData.lastName || !formData.phone))
                      }
                      className="flex-1 px-6 py-3 bg-[#4A3C31] text-white rounded-xl font-medium tracking-wide hover:bg-[#70655B] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                    >
                      {step === 4 ? "Confirmer la demande" : "Suivant"}
                      {step < 4 && <ArrowRight className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
