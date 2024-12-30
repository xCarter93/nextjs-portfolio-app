import { Metadata } from "next";
import { GitHistory } from "@/components/Git/GitHistory";

export const metadata: Metadata = {
  title: "Git History | Patrick Carter",
  description: "View the commit history of this portfolio project",
};

export default function GitHistoryPage() {
  return (
    <div className="py-8">
      <GitHistory />
    </div>
  );
}
