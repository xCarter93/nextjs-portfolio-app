"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { toast } from "sonner";
import { sendEmail } from "@/lib/actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:hover:bg-blue-600"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export function ContactForm() {
  const [, formAction] = useActionState(
    async (prevState: { success: boolean } | null, formData: FormData) => {
      try {
        const result = await sendEmail(prevState, formData);
        toast.success("Message sent successfully!");
        return result;
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Something went wrong",
        );
        return null;
      }
    },
    null,
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-200"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-200"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <SubmitButton />
    </form>
  );
}
