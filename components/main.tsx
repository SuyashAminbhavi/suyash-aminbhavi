import { Components } from "@/interfaces/interfaces";
import { motion } from "motion/react";
import Header from "./ui/header";
import MyIntro from "./sections/intro";
import MySkills from "./sections/skills";
import MyEducation from "./sections/education";
import MyExperience from "./sections/experience";
import MyProject from "./sections/projects";

export default function Main() {
  const components: Components[] = [
    {
      name: <MyIntro />,
      id: "my-intro",
      additionalClass: "flex flex-col",
    },
    {
      name: <MySkills />,
      id: "my-skills",
      additionalClass: "",
    },
    {
      name: <MyEducation />,
      id: "my-education",
      additionalClass: "",
    },
    {
      name: <MyExperience />,
      id: "my-experience",
      additionalClass: "",
    },
    {
      name: <MyProject />,
      id: "my-project",
      additionalClass: "",
    },
  ];
  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-20 py-24 z-20"
      >
        {components.map((component) => (
          <section
            key={component.id}
            id={component.id}
            className={
              "relative px-[3rem] lg:px-[12rem] " + component.additionalClass
            }
          >
            {component.name}
          </section>
        ))}
      </motion.main>
    </>
  );
}
