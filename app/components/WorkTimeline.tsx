"use client";

import { workHistory } from "../data/workHistory";
import { contactInfo } from "../data/contact";
import { format } from "date-fns";

export default function WorkTimeline() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
         Recent Work Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>
          
          <div className="space-y-12">
            {workHistory.map((work, index) => (
              <div key={work.id} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-white rounded-full border-4 border-black z-10"></div>
                
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {work.position}
                    </h3>
                    <span className="text-sm text-gray-400">
                      {work.startMonth} {work.startYear} -{" "}
                      {work.isCurrent
                        ? "Present"
                        : `${work.endMonth} ${work.endYear}`}
                    </span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <p className="text-lg text-gray-300 font-semibold">
                      {work.company}
                    </p>
                    <span className="text-gray-500 hidden md:inline">•</span>
                    <p className="text-gray-400">{work.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={contactInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
