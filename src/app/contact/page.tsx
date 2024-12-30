import ContactContent from "@/markdown/contact.mdx";

export default function ContactPage() {
  return (
    <div className="text-gray-300">
      <div className="mb-6 mt-4">
        <div className="rounded-lg bg-gray-800">
          <ContactContent />
        </div>
      </div>
    </div>
  );
}
