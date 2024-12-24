export default function ContactPage() {
  return (
    <div className="text-gray-300">
      <h1 className="mb-4 text-2xl font-bold">Contact</h1>
      <div className="space-y-4">
        <div className="rounded-lg bg-gray-800 p-4">
          <code>{`// Contact Information`}</code>
          <div className="mt-2 space-y-2">
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">email</span>{" "}
              <span className="text-purple-400">=</span>{" "}
              <span className="text-green-400">{`your.email@example.com`}</span>
              ;
            </p>
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">github</span>{" "}
              <span className="text-purple-400">=</span>{" "}
              <span className="text-green-400">{`https://github.com/yourusername`}</span>
              ;
            </p>
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">linkedin</span>{" "}
              <span className="text-purple-400">=</span>{" "}
              <span className="text-green-400">{`https://linkedin.com/in/yourusername`}</span>
              ;
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-4">
          <code>{`// Get In Touch`}</code>
          <p className="mt-2">
            Feel free to reach out through any of the channels above. I&apos;m
            always interested in new opportunities and collaborations.
          </p>
        </div>
      </div>
    </div>
  );
}
