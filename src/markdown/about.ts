export const aboutCode = `interface Certification {
  title: string;
  issuedDate: Date;
  url: string;
}

interface Developer {
  name: string;
  role: string;
  location: string;
  currentCompany: string;
  skills: string[];
  certifications: Certification[];
  yearsOfExperience: number;
}

// Personal Information
const me: Developer = {
  name: "Patrick Carter",
  role: "Senior Sales Systems Analyst",
  location: "Boston, MA",
  currentCompany: "Datadog",
  yearsOfExperience: 8,
  skills: [
    "React/Next.js",
    "TypeScript",
    "Salesforce Development",
    "Node.js",
    "Process Automation",
    "Team Leadership",
    "Project Management",
    "System Integration",
  ],
  certifications: [
    {
      title: "Salesforce Certified Administrator",
      issuedDate: new Date(2023, 9),
      url: "https://trailhead.salesforce.com/en/credentials/administrator",
    },
    {
      title: "Salesforce Certified Platform App Builder",
      issuedDate: new Date(2023, 10),
      url: "https://trailhead.salesforce.com/en/credentials/platformappbuilder",
    },
    {
      title: "Salesforce Certified Platform Developer I",
      issuedDate: new Date(2023, 10),
      url: "https://trailhead.salesforce.com/en/credentials/platformdeveloperi",
    },
    {
      title: "Salesforce Certified JavaScript Developer I",
      issuedDate: new Date(2024, 1),
      url: "https://trailhead.salesforce.com/en/credentials/javascriptdeveloperi",
    },
  ],
};`;