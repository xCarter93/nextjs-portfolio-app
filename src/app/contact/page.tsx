import { StyledCode } from "@/components/StyledCode";
import { contactCode } from "@/markdown/contact";

export default function ContactPage() {
  return (
    <div className="text-gray-300">
      <div className="mb-6 mt-4">
        <div className="rounded-lg bg-gray-800">
          <StyledCode code={contactCode} language="json" />
          <p className="mt-4 text-sm text-gray-400">
            Feel free to reach out through any of the social links above
          </p>
        </div>
      </div>
    </div>
  );
}
