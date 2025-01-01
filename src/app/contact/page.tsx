import { StyledCode } from "@/components/StyledCode";
import { contactCode } from "@/markdown/contact";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="text-gray-300">
      <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Code Section */}
        <div className="mb-6 mt-4">
          <div className="rounded-lg bg-gray-800">
            <h2 className="mb-6 px-6 pt-6 text-xl font-semibold text-gray-200">
              Reach out via Social Links
            </h2>
            <StyledCode code={contactCode} language="json" />
          </div>
        </div>

        {/* Vertical Divider - only visible on lg screens */}
        <div className="hidden lg:absolute lg:inset-y-4 lg:left-1/2 lg:block lg:w-px lg:-translate-x-1/2 lg:bg-gray-700" />

        {/* Contact Form Section */}
        <div className="mb-6 mt-4">
          <div className="rounded-lg bg-gray-800 p-6">
            <h2 className="mb-6 text-xl font-semibold text-gray-200">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
