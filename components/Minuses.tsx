'use client';

import { motion } from 'framer-motion';

export default function Minuses() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Downside-uri reale la achiziția unui server AI de 5.000 €
          </h2>
          <p className="text-gray-400 text-lg">(și cum să le gestionezi)</p>
        </div>

        <div className="space-y-12">
          {/* Point 1 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              1. Echipamentul se poate învechi tehnologic
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2">Realitate:</h4>
                <p className="text-gray-300">
                  AI hardware evoluează repede, iar în 12–24 luni pot apărea GPU-uri mai eficiente.
                </p>
              </div>
              <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20">
                <h4 className="font-bold text-green-400 mb-2">Răspuns:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-green-500">
                  <li>Nu ai nevoie de <em>ultimul hardware</em>, ai nevoie de <em>suficient hardware</em>.</li>
                  <li>Majoritatea modelelor open-source actuale (Qwen, LLaMA, Kimi 2, Phi) vor rula excelent pe acest hardware pentru 2–3 ani.</li>
                  <li>În AI de B2B contract analysis, nu ai nevoie de GPT-7 pe local — ai nevoie de un model stabil, controlabil și repetabil.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Point 2 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              2. Timp de setup, maintenance și probleme tehnice
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2">Realitate:</h4>
                <p className="text-gray-300">
                  Un server local înseamnă update-uri, troubleshooting, gestionare versiuni, monitorizare temperaturi, spațiu, zgomot.
                </p>
              </div>
              <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20">
                <h4 className="font-bold text-green-400 mb-2">Răspuns:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-green-500">
                  <li>Da, cum a remarcat Sebi trebuie luate unele masuri de securitate si logistica ca serverul sa ruleze la parametrii de productie</li>
                  <li>Setup-ul inițial îl faci o dată; apoi rulează luni fără intervenții.</li>
                  <li>Putem face o arhitectură simplă: <strong>1 server → 1 model → 1 pipeline</strong> fără complexitate inutilă.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Point 4 (Skipping 3 as per source) */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              4. Un risc: să investim înainte să validăm complet piața
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2">Realitate:</h4>
                <p className="text-gray-300">
                  Dacă produsul nu trage, putem rămâne cu hardware-ul.
                </p>
              </div>
              <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20">
                <h4 className="font-bold text-green-400 mb-2">Răspuns:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-green-500">
                  <li>Chiar și în cel mai rău caz, avem un server extrem de valoros pentru fine-tuning, prototipare, alte proiecte AI sau îl revindem cu ~70–80% din valoare.</li>
                  <li>Nu e o investiție „blocată”, ci un activ lichid.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Point 5 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              5. Modelele Big Labs sunt în continuare mai bune
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2">Realitate:</h4>
                <p className="text-gray-300">
                  Pentru anumite taskuri (complex reasoning, interpretări subtile), modelele open-source încă sunt în urmă.
                </p>
              </div>
              <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20">
                <h4 className="font-bold text-green-400 mb-2">Răspuns:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-green-500">
                  <li>
                    O alternativa bună ar fi Flow-ul <strong>hybrid</strong>:
                    <ul className="list-circle pl-5 mt-1 space-y-1">
                      <li>local pentru OCR + preprocesare + privacy</li>
                      <li>Big Labs doar pentru reasoning unde e nevoie</li>
                    </ul>
                  </li>
                  <li>În 2025 multe modele open-source sunt deja comparabile cu GPT-5.</li>
                  <li>Clienții B2B nu cer filozofie — ci acuratețe pe domeniul lor, unde un model fine-tuned bate un foundation model generalist.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Point 6 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              6. Big Labs permit fine-tuning și e mai ușor acolo
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2">Realitate:</h4>
                <p className="text-gray-300">
                  Da, pentru ~50$ poți rula un fine-tune fără setup hardware.
                </p>
              </div>
              <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20">
                <h4 className="font-bold text-green-400 mb-2">Răspuns:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-green-500">
                  <li>Fine-tuning Big Labs e <strong>one-shot și limitat</strong>.</li>
                  <li>
                    Pentru un produs real avem nevoie de:
                    <ul className="list-circle pl-5 mt-1 space-y-1">
                      <li>iterare rapidă</li>
                      <li>testat multe variante</li>
                      <li>fara specializări pe platformele cloud Big Labs</li>
                    </ul>
                  </li>
                  <li>Local = infinite epoci, infinite rulari, cost zero.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Point 7 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              7. Dacă serverul pică, noi picăm
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/20">
                <h4 className="font-bold text-red-400 mb-2">Realitate:</h4>
                <p className="text-gray-300">
                  Dacă hardware-ul se strică, nu poți rula pipeline-ul.
                </p>
              </div>
              <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20">
                <h4 className="font-bold text-green-400 mb-2">Răspuns:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-green-500">
                  <li>Backup: să ținem oricum un fallback pe cloud.</li>
                  <li>În orice caz, Big Labs pot fi folosite oricând ca backup pentru inference.</li>
                  <li>Risc redus, cost minim pentru fallback.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
