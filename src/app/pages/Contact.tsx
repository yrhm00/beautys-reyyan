import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { buildMailto, getBreadcrumbSchema, siteConfig } from "../siteConfig";

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState: ContactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "Renseignement general",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      "Bonjour,",
      "",
      `Prenom : ${formData.firstName}`,
      `Nom : ${formData.lastName}`,
      `Email : ${formData.email || "Non renseigne"}`,
      `Sujet : ${formData.subject}`,
      "",
      "Message :",
      formData.message || "Aucun message saisi.",
    ].join("\n");

    window.location.href = buildMailto(
      `Demande de contact - ${formData.subject}`,
      body,
    );
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen px-6 md:px-12 max-w-7xl mx-auto py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
      <Seo
        title="Contact et rendez-vous a Gilly"
        description="Contactez Beauty's Reyyan a Gilly en Belgique pour vos informations, demandes de rendez-vous, formations et renseignements sur les prestations."
        path="/contact"
        keywords={[
          "contact Beauty's Reyyan",
          "rendez-vous epilation laser Gilly",
          "telephone institut Beauty's Reyyan",
          "email centre laser Belgique",
        ]}
        schema={[
          getBreadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

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
          Une question ? <br /> Nous sommes la.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-[#70655B] font-light max-w-md"
        >
          Pour une information sur nos prestations, nos formations ou une demande
          specifique, contactez directement le centre a Gilly.
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
              <p className="text-[#70655B] text-sm leading-relaxed">
                {siteConfig.address.street},
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}, {siteConfig.address.country}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FCFBF9] border border-[#E6DECE] flex items-center justify-center text-[#B89C8A] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-[#4A3C31] text-lg mb-1">Telephone</h3>
              <a href={siteConfig.phoneHref} className="text-[#70655B] text-sm leading-relaxed hover:text-[#4A3C31] transition-colors">
                {siteConfig.phoneDisplay}
              </a>
              <p className="text-xs text-[#B89C8A] mt-1">{siteConfig.openingHours.display}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FCFBF9] border border-[#E6DECE] flex items-center justify-center text-[#B89C8A] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-[#4A3C31] text-lg mb-1">Email</h3>
              <a href={siteConfig.emailHref} className="text-[#70655B] text-sm leading-relaxed hover:text-[#4A3C31] transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="bg-[#FCFBF9] border border-[#E6DECE] rounded-[2rem] p-6 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#B89C8A] font-medium">
              Reseaux sociaux
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#E6DECE] px-4 py-2 text-sm text-[#4A3C31] hover:border-[#B89C8A] transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#E6DECE] px-4 py-2 text-sm text-[#4A3C31] hover:border-[#B89C8A] transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#FCFBF9] border border-[#E6DECE] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#F4EFE6] to-transparent rounded-bl-full opacity-50 pointer-events-none" />

        <h2 className="text-3xl font-serif text-[#4A3C31] mb-2 relative z-10">
          Envoyez-nous un message
        </h2>
        <p className="text-[#70655B] text-sm mb-8 relative z-10">
          Le formulaire prepare un email complet vers le centre pour rester simple
          et utile sans ajouter de backend.
        </p>

        {isSubmitted && (
          <div className="mb-6 rounded-2xl border border-[#E6DECE] bg-white px-5 py-4 text-sm text-[#70655B] relative z-10">
            Votre application mail va s'ouvrir avec votre message pre-rempli. Si
            rien ne se passe, ecrivez-nous directement a{" "}
            <a href={siteConfig.emailHref} className="text-[#4A3C31] underline">
              {siteConfig.email}
            </a>
            .
          </div>
        )}

        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-widest text-[#70655B]">
                Prenom
              </label>
              <input
                required
                type="text"
                value={formData.firstName}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, firstName: event.target.value }))
                }
                className="w-full bg-white border border-[#E6DECE] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89C8A] transition-colors"
                placeholder="Jeanne"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-widest text-[#70655B]">
                Nom
              </label>
              <input
                required
                type="text"
                value={formData.lastName}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, lastName: event.target.value }))
                }
                className="w-full bg-white border border-[#E6DECE] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89C8A] transition-colors"
                placeholder="Dupont"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-widest text-[#70655B]">
              Email
            </label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(event) =>
                setFormData((current) => ({ ...current, email: event.target.value }))
              }
              className="w-full bg-white border border-[#E6DECE] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89C8A] transition-colors"
              placeholder="jeanne@exemple.be"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-widest text-[#70655B]">
              Sujet
            </label>
            <div className="relative">
              <select
                value={formData.subject}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, subject: event.target.value }))
                }
                className="w-full bg-white border border-[#E6DECE] rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:border-[#B89C8A] transition-colors text-[#4A3C31]"
              >
                <option>Renseignement general</option>
                <option>Demande de rendez-vous</option>
                <option>Information formation laser</option>
                <option>Information vente machine</option>
                <option>Partenariat</option>
                <option>Autre</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-[#70655B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-widest text-[#70655B]">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(event) =>
                setFormData((current) => ({ ...current, message: event.target.value }))
              }
              className="w-full bg-white border border-[#E6DECE] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#B89C8A] transition-colors resize-none"
              placeholder="Comment pouvons-nous vous aider ?"
            />
          </div>

          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-3 bg-[#4A3C31] text-white px-8 py-4 rounded-xl hover:bg-[#B89C8A] transition-colors duration-500 overflow-hidden relative"
          >
            <span className="font-medium tracking-wide text-sm uppercase relative z-10">
              Envoyer le message
            </span>
            <ArrowRight className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}
