import React from "react";
import { WorkItem } from "./index";
const DATA = [
  {
    year: 2021,
    title: "IT Support",
    description:
      "I manage the Moodle educational platform of the Fray Mamerto Esquiú school. I also maintain the website using WordPress and several administrative tasks",
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
