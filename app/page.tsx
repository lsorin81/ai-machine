import Hero from '@/components/Hero';
import ComparisonCard from '@/components/ComparisonCard';
import AnalysisSection from '@/components/AnalysisSection';

export default function Home() {
  const machines = [
    {
      name: 'Stație de Lucru RTX 5090',
      role: '"Bucharest Blackwell"',
      price: '~5.000 €',
      image: '/rtx-5090.png',
      verdict: 'winner' as const,
      specs: {
        cpu: 'AMD Ryzen 9 7950X',
        gpu: 'NVIDIA RTX 5090 (32GB)',
        ram: '64GB DDR5',
        bandwidth: '~1,792 GB/s',
      },
      pros: [
        'Cel mai mare Throughput',
        'Ecosistem CUDA Matur',
        'Cel mai bun Raport Preț/Performanță',
        'Upgradabil',
      ],
      cons: [
        'Consum Mare de Energie (~800W)',
        'Amprentă Fizică Mare',
        'Asamblare Complexă',
      ],
    },
    {
      name: 'Mac Studio M4 Max',
      role: '"Arhitectul de Cercetare"',
      price: '~5.200 €',
      image: '/mac-studio.png',
      verdict: 'runner-up' as const,
      specs: {
        cpu: 'M4 Max (16-core)',
        gpu: '40-core GPU',
        ram: '128GB Unified',
        bandwidth: '~546 GB/s',
      },
      pros: [
        'Memorie Masivă de 128GB',
        'Eficiență Energetică Excelentă',
        'Compact & Silențios',
        'Excelent pentru Modele Mari',
      ],
      cons: [
        'Non-Upgradabil',
        'Scump (~5.200 €)',
      ],
    },
    {
      name: 'NVIDIA DGX Spark',
      role: '"Aparatul"',
      price: '> 5.000 €',
      image: '/dgx-spark.png',
      verdict: 'avoid' as const,
      specs: {
        cpu: 'ARM64 Grace-Next',
        gpu: 'Blackwell Integrat',
        ram: '128GB LPDDR5x',
        bandwidth: '~273 GB/s',
      },
      pros: [
        'Suport Enterprise',
        'Hibrid Rack/Desktop',
        'Stack Software Integrat',
      ],
      cons: [
        'Cea mai Mică Lățime de Bandă',
        'Valoare Slabă pentru 5k €',
        'Disponibilitate de Nișă',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent-primary selection:text-black">
      <Hero />

      <section id="comparison" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Competitorii</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trei abordări arhitecturale distincte pentru rezolvarea ecuației hardware AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {machines.map((machine, index) => (
              <ComparisonCard
                key={machine.name}
                {...machine}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <AnalysisSection />

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© 2025 Cercetare Hardware AI • Raport Intern</p>
      </footer>
    </main>
  );
}
