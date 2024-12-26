"use client";

const workHistory = [
  {
    period: "Feb 2016 - Apr 2017",
    role: "Cost Analysis and Savings Analyst",
    company: "Granite Telecommunications LLC",
  },
  {
    period: "Apr 2017 - Jun 2017",
    role: "Senior Cost Analysis and Savings Analyst",
    company: "Granite Telecommunications LLC",
  },
  {
    period: "Jun 2017 - Apr 2019",
    role: "Cost Analysis and Savings Supervisor",
    company: "Granite Telecommunications LLC",
  },
  {
    period: "Apr 2019 - Nov 2020",
    role: "Senior Offer Management Supervisor",
    company: "Granite Telecommunications LLC",
  },
  {
    period: "Nov 2020 - Jun 2021",
    role: "Team Lead, Order Operations",
    company: "Datadog",
  },
  {
    period: "Jun 2021 - Apr 2024",
    role: "Manager, Order Operations",
    company: "Datadog",
  },
  {
    period: "Apr 2024 - Present",
    role: "Senior Sales Systems Analyst",
    company: "Datadog",
  },
];

export default function WorkExperiencePage() {
  return (
    <div className="text-gray-300">
      <div className="mt-4">
        <h1 className="mb-6 text-2xl font-bold">Work Experience</h1>
        <div className="flex justify-center px-4">
          <ul className="timeline timeline-vertical w-full max-w-5xl">
            {workHistory.map((job, index) => (
              <li key={index}>
                {index > 0 && <hr />}
                {index % 2 === 0 ? (
                  <>
                    <div className="timeline-start timeline-box">
                      <div className="font-semibold">{job.company}</div>
                      <div className="text-sm text-gray-400">{job.role}</div>
                    </div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end font-mono text-sm text-gray-400">
                      {job.period}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="timeline-start font-mono text-sm text-gray-400">
                      {job.period}
                    </div>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end timeline-box">
                      <div className="font-semibold">{job.company}</div>
                      <div className="text-sm text-gray-400">{job.role}</div>
                    </div>
                  </>
                )}
                {index < workHistory.length - 1 && <hr />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
