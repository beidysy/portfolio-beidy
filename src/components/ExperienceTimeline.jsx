// src/components/ExperienceTimeline.jsx
export default function ExperienceTimeline() {
    return (
      <section id="experience" className="bg-yellow-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-purple-700">Professional Experience</h2>
          <div className="border-l-4 border-purple-400 pl-6 space-y-10">
            
            {/* Dave & Buster's */}
            <div>
              <div className="font-bold text-xl text-gray-800">Dave & Buster’s Inc. – Technical Support Technician</div>
              <div className="text-sm text-gray-600 mb-2">Toronto, ON · 2022 – Present</div>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Provided support across entertainment and POS systems.</li>
                <li>Troubleshot software and hardware issues on-site.</li>
                <li>Collaborated with teams to escalate technical problems.</li>
              </ul>
            </div>
  
            {/* Optional: Add More Later */}
            {/* <div> ... </div> */}
  
          </div>
        </div>
      </section>
    );
  }
  