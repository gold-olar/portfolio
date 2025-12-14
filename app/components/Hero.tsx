import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-800">
            <Image
              src="/assets/Facetune_05-10-2025-17-24-19-b0e092cc-5c1c-4e61-92b3-6ca194bbd7c1.png"
              alt="Samuel Olamide"
              fill
              className="object-cover object-top "
              priority
              sizes="250px"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Samuel Olamide
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-2">
          Software Engineer
        </p>
        <p className="text-lg text-gray-500 mb-8">
          VP of Product, Edgetrace
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Seasoned Fullstack Software Engineer with over 8 years of experience, 
          specializing in developing scalable applications and leading technical teams.
        </p>
      </div>
    </section>
  );
}
