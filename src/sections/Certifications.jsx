import React from 'react';
import { Award, Calendar } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certifications } from '../data/certifications';

export default function Certifications() {
  // Ordered strictly by year (Recent to earlier: 2022 -> 2017)
  const sortedCertifications = [...certifications].sort((a, b) => b.sortYear - a.sortYear);

  return (
    <section id="certifications" className="py-24 lg:py-32 bg-slate-50/60 dark:bg-slate-950/60 border-y border-slate-200/60 dark:border-slate-850 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Professional Certifications"
          description="Industry-recognized technical certifications in specialized Python development and enterprise software tooling."
        />

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedCertifications.map((cert) => (
            <div
              key={cert.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  {/* Attractive Glowing Award Icon Badge */}
                  <div className="relative group/icon">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-600 via-blue-500 to-indigo-500 opacity-25 group-hover:opacity-75 blur-md transition duration-500" />
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-brand-600 to-indigo-700 p-0.5 shadow-lg shadow-brand-500/25 ring-1 ring-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand-500/40">
                      <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                        <Award className="w-6 h-6 text-white stroke-[2.2] drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-950/60 dark:text-brand-300 dark:border-brand-800">
                      {cert.year || cert.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                      {cert.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm font-bold text-brand-600 dark:text-brand-400 mt-1">
                  {cert.issuer}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cert.skillsLearned.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/60 dark:border-slate-750"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-400 font-mono font-medium">
                <Calendar className="w-3.5 h-3.5 text-brand-500" />
                <span>{cert.duration}</span>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
