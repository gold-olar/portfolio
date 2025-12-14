import { contactInfo } from "../data/contact";

export default function ContactSection() {
  const getSocialIcon = (name: string) => {
    const icons: Record<string, string> = {
      LinkedIn: "💼",
      GitHub: "💻",
      Twitter: "🐦",
      Medium: "✍️",
    };
    return icons[name] || "🔗";
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Email Card */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="group bg-black border border-gray-800 rounded-lg p-6 hover:border-gray-700 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">
              Email
            </h3>
            <p className="text-white text-sm break-all group-hover:text-gray-300 transition-colors">
              {contactInfo.email}
            </p>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="group bg-black border border-gray-800 rounded-lg p-6 hover:border-gray-700 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">
              Phone
            </h3>
            <p className="text-white text-sm group-hover:text-gray-300 transition-colors">
              {contactInfo.phone}
            </p>
          </a>

          {/* Resume Card */}
          <a
            href={contactInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black border border-gray-800 rounded-lg p-6 hover:border-gray-700 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">
              Resume
            </h3>
            <p className="text-white text-sm group-hover:text-gray-300 transition-colors">
              View Full Resume
            </p>
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Connect With Me
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {contactInfo.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-black border border-gray-800 rounded-lg hover:border-white hover:bg-gray-900 transition-all duration-300 min-w-[140px] justify-center"
              >
                <span className="text-2xl">{getSocialIcon(link.name)}</span>
                <span className="text-white font-medium group-hover:text-gray-200 transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
