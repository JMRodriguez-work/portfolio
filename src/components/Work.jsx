import React from "react";
import { WorkItem } from "./index";
const DATA = [
  {
    year: 2023,
    title: "Frontend Developer",
    description:
      "I work as a Front End Developer, programming a comprehensive system that empowers clients to manage their customers, reports, beneficiaries, and more. Additionally, I take charge of updating the database for an insurance and brokerage company. My current tech stack includes React for building interactive and efficient interfaces, Sass for managing styles, and MySQL for database management. By leveraging these technologies, I deliver robust and tailored solutions to meet my clients' needs.",
    duration: "Present",
  },
  {
    year: 2021,
    title: "IT Support",
    description:
      "I manage the Moodle educational platform of the Fray Mamerto Esquiú school. I also maintain the website using WordPress and several administrative tasks. Facilitating training sessions for team members, generating comprehensive system user manuals, and creating engaging video tutorials.",
    duration: "Present",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Work</h1>
      {DATA.map((item) => (
        <WorkItem key={item.title} item={item} />
      ))}
    </div>
  );
};

export { Work };
