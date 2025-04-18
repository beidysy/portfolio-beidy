export default function Contact() {
    return (
      <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-purple-100 to-blue-50">
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-lg p-10 border-l-4 border-purple-400">
          <h1 className="text-3xl font-bold text-purple-700 mb-6">
            🚀 Let's Connect
          </h1>
  
          <p className="text-gray-700 text-md mb-6">
            Whether you're looking for a passionate tech teammate, a cybersecurity specialist,
            or just want to say hi — I’d love to hear from you!
          </p>
  
          <div className="space-y-4 text-sm text-gray-600">
            <p>
              📬 <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:beidyasy@gmail.com"
                className="text-purple-700 hover:underline"
              >
                beidyasy@gmail.com
              </a>
            </p>
  
            <p>
              💼 <span className="font-semibold">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/beidy-sy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:underline"
              >
                linkedin.com/in/beidy-sy
              </a>
            </p>
  
            <p>
              💻 <span className="font-semibold">GitHub:</span>{' '}
              <a
                href="https://github.com/beidysy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 hover:underline"
              >
                github.com/beidysy
              </a>
            </p>
          </div>
  
          <div className="mt-10 text-sm text-gray-400">
            Beidy Sy
          </div>
        </div>
      </section>
    );
  }
  