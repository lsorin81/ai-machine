'use client';

import { motion } from 'framer-motion';

export default function AnalysisSection() {
  return (
    <section id="analysis" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Verdictul</h2>
          <div className="h-1 w-20 bg-accent-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div className="glass p-8 rounded-2xl border-l-4 border-accent-primary">
            <h3 className="text-xl font-bold text-white mb-4">De ce Câștigă RTX 5090</h3>
            <p>
              Pentru cercetătorul AI din România care operează cu un buget de 5.000 €, lansarea <strong>NVIDIA RTX 5090</strong> este evenimentul decisiv al pieței. Cei 32GB de memorie GDDR7 cu lățime de bandă mare fac legătura între limitările consumer și cerințele enterprise.
            </p>
            <p className="mt-4">
              Oferă suficientă capacitate pentru lucrul serios cu LLM-uri (modele 70B cuantizate) oferind în același timp performanță inegalabil. Ecosistemul matur CUDA asigură zero fricțiune cu instrumente precum DeepSeek.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-2xl border-l-4 border-gray-500">
              <h3 className="text-xl font-bold text-white mb-4">Nișa Mac Studio</h3>
              <p>
                <strong>Mac Studio M4 Max (128GB)</strong> este o opțiune secundară viabilă doar dacă fluxul principal de lucru este cercetarea interactivă cu <em>modele foarte mari</em> care pur și simplu nu încap în 32GB VRAM. Totuși, vă confruntați cu fricțiuni software legate de compatibilitatea MPS.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-4">De ce să Eviți DGX Spark</h3>
              <p>
                Deși impresionant tehnologic, <strong>DGX Spark</strong> suferă de o lățime de bandă a memoriei scăzută (~273 GB/s) ceea ce îl face o valoare slabă pentru inferență de înaltă performanță. Este un dispozitiv de implementare edge, nu o stație de lucru principală pentru cercetare, și riscă să depășească bugetul cu TVA.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Contextul Pieței: România</h3>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent-primary">
              <li><strong>Impactul TVA:</strong> TVA-ul de 19% reduce semnificativ bugetul efectiv pentru hardware, făcând construcția personalizată cu RTX 5090 cea mai eficientă rută fiscală comparativ cu soluțiile pre-construite Apple sau Enterprise.</li>
              <li><strong>Disponibilitate:</strong> Componentele pentru construcția personalizată sunt ușor disponibile prin distribuitori locali (ASBIS, ELKO) sau retaileri precum PC Garage/eMAG, în timp ce DGX Spark are canale de achiziție complexe.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
