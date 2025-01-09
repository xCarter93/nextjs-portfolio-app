"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Building2, CalendarDays } from "lucide-react";

interface WorkHistoryItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

const workHistory: WorkHistoryItem[] = [
  {
    period: "Feb 2016 - Apr 2017",
    role: "Cost Analysis and Savings Analyst",
    company: "Granite Telecommunications LLC",
    description:
      "Analyzed telecom expenses and identified cost-saving opportunities for enterprise clients. Managed a portfolio of accounts worth over $1M in annual revenue.",
  },
  {
    period: "Apr 2017 - Jun 2017",
    role: "Senior Cost Analysis and Savings Analyst",
    company: "Granite Telecommunications LLC",
    description:
      "Led cost optimization initiatives and mentored junior analysts. Developed process improvements that increased team efficiency by 25%.",
  },
  {
    period: "Jun 2017 - Apr 2019",
    role: "Cost Analysis and Savings Supervisor",
    company: "Granite Telecommunications LLC",
    description:
      "Managed a team of 8 analysts, overseeing $5M+ in annual cost savings initiatives. Implemented new training programs and quality control measures.",
  },
  {
    period: "Apr 2019 - Nov 2020",
    role: "Senior Offer Management Supervisor",
    company: "Granite Telecommunications LLC",
    description:
      "Led a team of 12 offer management specialists. Streamlined pricing processes and improved quote turnaround time by 40%. Managed relationships with key vendors and partners.",
  },
  {
    period: "Nov 2020 - Jun 2021",
    role: "Team Lead, Order Operations",
    company: "Datadog",
    description:
      "Established and led the Order Operations team. Implemented Salesforce automation that reduced manual processing time by 60%. Collaborated with Sales, Finance, and Legal teams.",
  },
  {
    period: "Jun 2021 - Apr 2024",
    role: "Manager, Order Operations",
    company: "Datadog",
    description:
      "Managed a global team of 8 specialists. Led system integration projects and process automation initiatives. Reduced order processing time by 75% through automation and process improvements.",
  },
  {
    period: "Apr 2024 - Present",
    role: "Senior Sales Systems Analyst",
    company: "Datadog",
    description:
      "Lead technical initiatives to optimize sales operations. Develop and implement Salesforce solutions. Drive process automation and system integration projects.",
  },
];

const WorkHistory = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          My professional journey in technology and business operations.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {workHistory.map((item, index) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border -ml-4 hidden md:block">
              <div className="w-3 h-3 rounded-full -ml-[6px] bg-blue-500" />
            </div>

            <Card className="p-6 ml-4 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Building2 className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                  <CalendarDays className="w-4 h-4" />
                  <span>{item.period}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
