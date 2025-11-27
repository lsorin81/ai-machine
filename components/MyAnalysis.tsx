'use client';

import { motion } from 'framer-motion';

export default function MyAnalysis() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        {/* Header / Intro */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-accent-primary">
            Mesaj final pentru parteneri
          </h1>
          
          <div className="glass p-8 rounded-2xl border-l-4 border-accent-primary italic text-lg text-gray-200">
            <p className="mb-4">
              „Investiția într-o mașină de AI de 5.000 € nu este un moft tehnic, ci fundația prin care devenim independenți și scalabili.
            </p>
            <p className="mb-4">
              Ne permite să rulăm analize PDF, OCR și modele AI complet local, fără costuri pe request, fără riscuri de securitate și fără dependență de Big Labs.
            </p>
            <p className="mb-4">
              Putem face fine-tuning intern cu cost zero, putem oferi clienților on-premise AI — un avantaj uriaș pe zona B2B — și putem experimenta rapid fără limitări.
            </p>
            <p>
              Este investiția care ne transformă dintr-un simplu wrapper API într-o companie cu adevărat tehnologică, cu IP propriu și diferențiere reală.”
            </p>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full my-12" />

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">
            De ce merită să investim acum într-o mașină de AI de 5.000 €
          </h2>
        </div>

        <div className="space-y-12">
          {/* Point 1 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              1. Trecem de la „un simplu wrapper” la control tehnic și IP propriu
            </h3>
            <div className="text-gray-300 space-y-4 pl-4 border-l border-white/10">
              <p>Acum produsul nostru depinde 100% de modelele Big Labs. Asta înseamnă:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>Zero IP propriu</li>
                <li>Zero diferențiere</li>
                <li>Costuri predictibile doar pe termen scurt</li>
                <li>Dependență totală de un furnizor extern</li>
              </ul>
              <p>Cu hardware propriu putem:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>rula modele open-source (LLaMA, Kimi 2, Qwen etc.)</li>
                <li>construi propriile noastre pipeline-uri OCR și analiză documente</li>
                <li>optimiza în mod real produsul pentru B2B</li>
                <li>crea IP intern, nu doar cod de lipit API-uri</li>
              </ul>
              <p className="font-semibold text-white">
                Asta ne ridică în lanțul de valoare — devenim <em>producători</em>, nu doar integratori.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              2. Reducem drastic costurile față de API-uri
            </h3>
            <div className="text-gray-300 space-y-4 pl-4 border-l border-white/10">
              <p>Pentru produsul nostru (analiză contracte PDF + raport AI):</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>analiza documentelor = cost per token</li>
                <li>rularea zilnică pe batch-uri B2B = costuri potențial uriașe</li>
              </ul>
              <p>Pe hardware propriu:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>OCR → <strong>gratis</strong></li>
                <li>analize locale → <strong>gratis</strong></li>
                <li>testare/experimentare → <strong>gratis și instant</strong></li>
              </ul>
            </div>
          </div>

          {/* Point 3 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              3. Creștem viteza de experimentare — avantaj competitiv real
            </h3>
            <div className="text-gray-300 space-y-4 pl-4 border-l border-white/10">
              <p>Pentru B2B trebuie:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>iterație rapidă</li>
                <li>testare locală fără limite</li>
                <li>fără rate-limit și fără costuri pe fiecare idee</li>
              </ul>
              <p>Cu hardware propriu:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>testăm 10 modele în aceeași zi</li>
                <li>rulăm prototipuri complet local</li>
                <li>optimizăm prompturi și pipeline-uri fără să plătim pe token</li>
                <li>putem folosi <strong>Kimi 2</strong>, Qwen, LLaMA, Phi etc. direct în mașină</li>
              </ul>
              <p className="font-semibold text-white">La un startup, viteza = supraviețuire.</p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              4. On-Premise AI = argument comercial puternic în zona B2B
            </h3>
            <div className="text-gray-300 space-y-4 pl-4 border-l border-white/10">
              <p>Pentru clienți precum:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>firme de avocatură</li>
                <li>departamente juridice</li>
                <li>contabili</li>
                <li>companii din energie sau medical</li>
              </ul>
              <p>…confidențialitatea e <em>non-negociabilă</em>.</p>
              <div className="glass p-4 rounded-lg my-4">
                <p className="italic">
                  „Contractele și documentele voastre nu părăsesc niciodată sediul. AI-ul rulează complet local, fără internet.”
                </p>
              </div>
              <p>Asta este un diferențiator enorm. Majoritatea competitorilor nu pot oferi așa ceva.</p>
            </div>
          </div>

          {/* Point 5 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              5. Securitate reală într-o perioadă în care scurgerile sunt zilnice
            </h3>
            <div className="text-gray-300 space-y-4 pl-4 border-l border-white/10">
              <p>
                În ultimele săptămâni am văzut chiar și la OpenAI o breșă internă (inclusiv incidente în care date interne ale clienților au fost expuse).
              </p>
              <p>Pe local:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>niciun document nu părăsește rețeaua internă</li>
                <li>nu există risc de acces neautorizat la nivel de cloud</li>
                <li>zero dependență de servere externe</li>
                <li>putem oferi auditabilitate locală</li>
                <li>GDPR-friendly prin design</li>
              </ul>
              <p className="font-semibold text-white">Putem vinde securitatea ca <em>beneficiu major pentru clienți</em>.</p>
            </div>
          </div>

          {/* Point 6 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              6. Fine-tuning Big Labs e posibil, dar costisitor — local e mult mai eficient
            </h3>
            <div className="text-gray-300 space-y-4 pl-4 border-l border-white/10">
              <p>Da, Big Labs permit fine-tuning, dar:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>fiecare run costă uneori <strong>~50$</strong></li>
                <li>nu poți controla câte epoci folosești</li>
                <li>nu poți experimenta masiv</li>
                <li>nu poți face micro-specializări pentru clienți specifici</li>
                <li>datele tot ajung în cloudul lor</li>
              </ul>
              <p>Cu hardware propriu:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>putem rula oricât, cu câte epoci vrem</li>
                <li>fine-tuning = <strong>gratis</strong></li>
                <li>putem crea modele specializate pentru nișe (contracte, juridic, energie etc.)</li>
                <li>putem oferi chiar <strong>fine-tuning on-premise pentru clienți</strong></li>
              </ul>
              <p className="font-semibold text-white">Asta devine un alt diferențiator serios.</p>
            </div>
          </div>

          {/* Point 7 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              7. Investiție unică, folosită ani de zile
            </h3>
            <div className="text-gray-300 space-y-4 pl-4 border-l border-white/10">
              <p>Un server de 5.000€ ne oferă:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>GPU puternic</li>
                <li>stocare</li>
                <li>memorie suficientă</li>
                <li>autonomie totală</li>
              </ul>
              <p>Plătim o singură dată și îl folosim 2–3 ani fără costuri suplimentare.</p>
              <p>Față de API-uri, nu există:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>surprize</li>
                <li>overages</li>
                <li>limitări de throughput</li>
                <li>taxe pentru fiecare experiment</li>
              </ul>
              <p className="font-semibold text-white">Este un activ — nu o cheltuială.</p>
            </div>
          </div>

          {/* Point 8 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              8. Alți competitori fac deja asta
            </h3>
            <div className="text-gray-300 space-y-4 pl-4 border-l border-white/10">
              <p>Startup-urile serioase din zona AI:</p>
              <ul className="list-disc pl-6 space-y-1 marker:text-accent-primary">
                <li>au servere interne</li>
                <li>rulează OCR local</li>
                <li>folosesc modele open-source ca Kimi 2 și Qwen</li>
                <li>își construiesc propriile pipeline-uri pentru B2B</li>
                <li>reduc costurile API cu 70–90%</li>
              </ul>
              <p className="font-semibold text-white">Dacă noi nu o facem, rămânem în urmă.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
