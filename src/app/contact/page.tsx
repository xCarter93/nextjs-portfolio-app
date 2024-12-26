export default function ContactPage() {
  return (
    <div className="text-gray-300">
      <code>{`// contact.tsx`}</code>
      <div className="mt-4">
        <h1 className="mb-4 text-2xl font-bold">Contact</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              Get In Touch
            </h2>
            <p className="mt-2">
              Feel free to reach out through any of the channels below. I&apos;m
              always interested in new opportunities and collaborations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              Contact Information
            </h2>
            <div className="mt-4 space-y-2 font-mono text-sm">
              <div>
                <code className="text-purple-400">const</code>{" "}
                <code className="text-blue-400">email</code>{" "}
                <code className="text-purple-400">=</code>{" "}
                <code className="text-green-400">
                  &quot;your.email@example.com&quot;
                </code>
                ;
              </div>
              <div>
                <code className="text-purple-400">const</code>{" "}
                <code className="text-blue-400">github</code>{" "}
                <code className="text-purple-400">=</code>{" "}
                <code className="text-green-400">
                  &quot;https://github.com/xCarter93&quot;
                </code>
                ;
              </div>
              <div>
                <code className="text-purple-400">const</code>{" "}
                <code className="text-blue-400">linkedin</code>{" "}
                <code className="text-purple-400">=</code>{" "}
                <code className="text-green-400">
                  &quot;https://linkedin.com/in/patrick-carter-306746a8/&quot;
                </code>
                ;
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-200">
              Preferred Contact Method
            </h2>
            <p className="mt-2">
              The best way to reach me is through LinkedIn or email. I typically
              respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
