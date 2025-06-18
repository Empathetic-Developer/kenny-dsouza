
import React from 'react';

const Languages = () => {
  const languages = [
    { lang: "English", level: "Professional Working" },
    { lang: "Konkani", level: "Native" },
    { lang: "Hindi", level: "Professional Working" },
    { lang: "Kannada", level: "Professional Working" },
    { lang: "Marathi", level: "Professional Working" }
  ];

  return (
    <section id="languages" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-black dark:text-white mb-6">
            Languages
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Multilingual communication abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center rounded-2xl hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300"
            >
              <h3 className="text-xl font-medium text-black dark:text-white mb-2">
                {language.lang}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
