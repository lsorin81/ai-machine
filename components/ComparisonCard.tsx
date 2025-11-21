'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, X, Zap, Cpu, HardDrive, Monitor } from 'lucide-react';
import clsx from 'clsx';

interface ComparisonCardProps {
  name: string;
  role: string;
  price: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    bandwidth: string;
  };
  pros: string[];
  cons: string[];
  image: string;
  verdict: 'winner' | 'runner-up' | 'avoid';
  delay?: number;
}

export default function ComparisonCard({
  name,
  role,
  price,
  specs,
  pros,
  cons,
  image,
  verdict,
  delay = 0,
}: ComparisonCardProps) {
  const isWinner = verdict === 'winner';
  const isAvoid = verdict === 'avoid';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={clsx(
        'relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300',
        'glass hover:scale-[1.02]',
        isWinner ? 'border-accent-primary shadow-[0_0_30px_rgba(0,255,157,0.15)]' : 
        isAvoid ? 'border-red-500/30' : 'border-white/10'
      )}
    >
      {/* Badge */}
      <div className={clsx(
        'absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-10',
        isWinner ? 'bg-accent-primary text-black' :
        isAvoid ? 'bg-red-500/20 text-red-400 border border-red-500/50' :
        'bg-white/10 text-white border border-white/20'
      )}>
        {role}
      </div>

      {/* Image Section */}
      <div className="relative h-64 w-full bg-gradient-to-b from-white/5 to-transparent">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-6"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className={clsx(
          'text-2xl font-bold mb-1',
          isWinner ? 'text-gradient-primary' : 'text-white'
        )}>
          {name}
        </h3>
        <div className="text-sm text-gray-400 mb-4 font-mono">{price}</div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4 my-6 text-sm">
          <div className="space-y-1">
            <div className="flex items-center text-gray-400 gap-2">
              <Cpu size={14} /> <span>Procesor</span>
            </div>
            <div className="font-medium text-gray-200">{specs.cpu}</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center text-gray-400 gap-2">
              <Monitor size={14} /> <span>GPU</span>
            </div>
            <div className="font-medium text-gray-200">{specs.gpu}</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center text-gray-400 gap-2">
              <HardDrive size={14} /> <span>Memorie</span>
            </div>
            <div className="font-medium text-gray-200">{specs.ram}</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center text-gray-400 gap-2">
              <Zap size={14} /> <span>Lățime de bandă</span>
            </div>
            <div className="font-medium text-gray-200">{specs.bandwidth}</div>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="space-y-4 mb-6 flex-1">
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Avantaje</h4>
            <ul className="space-y-2">
              {pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check size={16} className="text-green-400 mt-0.5 shrink-0" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Dezavantaje</h4>
            <ul className="space-y-2">
              {cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <X size={16} className="text-red-400 mt-0.5 shrink-0" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
