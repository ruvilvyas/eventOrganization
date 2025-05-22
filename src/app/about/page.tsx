
import React from 'react';

export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
        
          <div className="md:w-1/7">
            <img
              src="/sani.jpg"
              alt="Dhruvil Vyas"
              className="rounded-full w-48 h-48 object-cover border-4 border-indigo-500 mx-auto"
            />
          </div>
         
          <div className="md:w-2/3 text-lg text-gray-300 space-y-4">
            <p>
              Hi! I&apos;m <span className="font-semibold text-pink-400">Dhruvil Vyas</span>, a full-stack developer from India currently studying <b>BCA</b> at <b>GLS University</b>.
            </p>
            <p>
              I build scalable web apps using the <span className="text-green-400 font-semibold">MERN stack</span> and continuously learn new tools to improve performance and user experience.
            </p>
            <p>
              I love solving problems, collaborating with teams, and embracing challenges that help me grow.
            </p>
            <p>
              Lately, I&apos;m exploring <b>DevOps</b> tools like Docker and CI/CD to enhance deployment efficiency.
            </p>
          </div>
        </div>

        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-6 text-center">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              "JavaScript", "React", "Node.js", "MongoDB",
              "Express.js", "Git", "Tailwind CSS", "Docker"
            ].map((skill, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm text-indigo-200 py-3 rounded-lg shadow-md">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
        <a
  href="#contact"
  className="inline-block mt-8 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/20"
>
  Let&apos;s Connect →
</a>

        </div>
      </div>
    </section>
  );
}
