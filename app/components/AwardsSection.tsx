import { awards } from "../data/awards";

export default function AwardsSection() {
  return (
    <section id="awards" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Awards & Recognition
        </h2>

        {awards.length === 0 ? (
          <p className="text-gray-400 text-center">No awards to display yet.</p>
        ) : (
          <div className="space-y-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-black border border-gray-800 rounded-lg p-8 hover:border-gray-700 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                    {award.title}
                  </h3>
                  <span className="text-gray-400 text-lg">{award.year}</span>
                </div>
                <p className="text-lg text-gray-300 mb-2">{award.organization}</p>
                {award.description && (
                  <p className="text-gray-400">{award.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
