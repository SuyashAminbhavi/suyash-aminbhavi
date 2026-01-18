"use client";

import { use, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Tab, Project, Technology } from "@/interfaces/interfaces";
import { SiCodementor } from "react-icons/si";
import ProjectView from "./project";
import ClearJarPreview from "@/public/projects/clearjar/clearjar_preview.png";
import { FaHourglassHalf } from "react-icons/fa";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { Lexend, Press_Start_2P, Tillana } from "next/font/google";
import Image from "next/image";
import { ThemeContext } from "@/contexts/themeContext";
import { Button, Card } from "pixel-retroui";

const tilliana_light = Tillana({ weight: "500", subsets: ["latin"] });
const lexend_light = Lexend({ weight: "300", subsets: ["latin"] });
const lexend_heavy = Lexend({ weight: "500", subsets: ["latin"] });
const p2p_light = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const defaultTechnologyObject: Technology = {
  title: "SampleTech",
  icon: (
    <SiCodementor className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  ),
  href: "#",
  iconStyle: "bg-gray-200",
};

const sampleExtendedProjectDetails: Project = {
  isProjectActive: false,
  projectName: "Test",
  projectDescription: "Test",
  projectDuration: "8",
  projectTeamSize: "4",
  projectPreviewImg: ClearJarPreview,
  projectLiveLink: "N/A",
  projectDemoLink: "N/A",
  technologiesUsed: [defaultTechnologyObject],
};

const displayProject = (project: Project) => {
  return (
    <ProjectView
      isProjectActive={project.isProjectActive}
      projectName={project.projectName}
      projectDescription={project.projectDescription}
      projectDuration={project.projectDuration}
      projectTeamSize={project.projectTeamSize}
      projectPreviewImg={project.projectPreviewImg}
      projectLiveLink={project.projectLiveLink}
      projectDemoLink={project.projectDemoLink}
      technologiesUsed={project.technologiesUsed}
    />
  );
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [hovering, setHovering] = useState(false);
  const { theme } = use(ThemeContext);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-row gap-2 items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full",
          containerClassName,
        )}
      >
        {theme === "MINIMALISTIC" && (
          <>
            {propTabs.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => {
                  moveSelectedTabToTop(idx);
                }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className={cn(
                  "relative px-4 py-2 rounded-full border-2 border-gray-200 bg-gray-50",
                  tabClassName,
                )}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {active.value === tab.value && (
                  <motion.div
                    layoutId="clickedbutton"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className={cn(
                      "absolute inset-0 bg-[#f9e864] rounded-full",
                      activeTabClassName,
                    )}
                  />
                )}

                <span className="relative block text-black dark:text-white">
                  {tab.title}
                </span>
              </button>
            ))}
          </>
        )}
        {theme === "RETRO" && (
          <>
            {propTabs.map((tab, idx) => (
              <Button
                bg="#ffffff"
                key={tab.title}
                onClick={() => {
                  moveSelectedTabToTop(idx);
                }}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className={cn("relative", tabClassName)}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {active.value === tab.value && (
                  <motion.div
                    layoutId="clickedbutton"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className={cn(
                      "absolute inset-0 bg-[#f9e864]",
                      activeTabClassName,
                    )}
                  />
                )}

                <span className="relative block text-black">{tab.title}</span>
              </Button>
            ))}
          </>
        )}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-12", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  const [showProject, setShowProject] = useState<boolean>(false);
  const [project, setProject] = useState<Project>(sampleExtendedProjectDetails);
  const { theme } = use(ThemeContext);
  return (
    <div className="relative w-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full absolute top-0 left-0", className)}
        >
          {theme === "MINIMALISTIC" && (
            <div className="min-h-[40rem] max-h-[40rem] w-full mb-12 flex flex-col justify-start overflow-y-auto relative rounded-2xl text-xl md:text-4xl font-bold text-black border-2 border-gray-100 shadow-xl bg-white">
              {!showProject &&
                tab.projectList.map((item, idx) => (
                  <>
                    <div
                      key={idx + "_desktop"}
                      className="hidden lg:visible w-full flex flex-row items-center justify-between p-8"
                    >
                      <div className="flex flex-row gap-6 items-center">
                        <Image
                          src={item.projectThumbnail}
                          height={200}
                          width={200}
                          className="rounded-xl border-2 border-gray-100"
                          alt="project_preview_img"
                        />
                        <div className="max-w-[30rem]">
                          <h1
                            key={idx}
                            className={
                              tilliana_light.className +
                              " text-[1.5rem] underline underline-2 underline-offset-4 decoration-[#f9e864]"
                            }
                          >
                            {item.projectTitle}
                          </h1>
                          <p
                            className={
                              lexend_light.className +
                              " text-[1rem] leading-relaxed"
                            }
                          >
                            {item.projectDescription}
                          </p>
                        </div>
                      </div>
                      <div>
                        {item.extendedProjectDetails.isProjectActive ? (
                          <div
                            className="flex flex-row gap-2 items-center hover:text-yellow-400"
                            onClick={() => {
                              setShowProject(true);
                              setProject(item.extendedProjectDetails);
                            }}
                          >
                            {" "}
                            <IoNavigateCircleOutline className="w-8 h-8" />
                            <p
                              className={
                                lexend_heavy.className + " text-[1rem]"
                              }
                            >
                              Learn More
                            </p>
                          </div>
                        ) : (
                          <div className="flex flex-row gap-2 items-center hover:text-red-600">
                            <FaHourglassHalf className="w-5 h-5" />
                            <p
                              className={
                                lexend_heavy.className + " text-[1rem]"
                              }
                            >
                              Work In Progress
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      key={idx + "_mobile"}
                      className="w-full flex flex-col gap-4 items-start p-8 lg:hidden"
                    >
                      <Image
                        src={item.projectThumbnail}
                        width={200}
                        height={200}
                        alt="clearjar_preview"
                      />
                      <h1
                        className={
                          tilliana_light.className +
                          " underline underline-2 underline-offset-4 decoration-yellow-400"
                        }
                      >
                        {item.projectTitle}
                      </h1>
                      <div className={lexend_light.className + " text-sm"}>
                        {item.projectDescription}
                      </div>
                      <button
                        onClick={() => {
                          setShowProject(true);
                          setProject(item.extendedProjectDetails);
                        }}
                        className={
                          lexend_heavy.className +
                          " w-full p-2 shadow-md bg-yellow-300/80 rounded-xl text-black text-sm"
                        }
                      >
                        Learn More
                      </button>
                    </div>
                  </>
                ))}
              {showProject && displayProject(project)}
            </div>
          )}
          {theme === "RETRO" && (
            <Card className="min-h-[40rem] mb-12 w-full">
              {!showProject &&
                tab.projectList.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full flex flex-row items-center justify-between p-8"
                  >
                    <div className="flex flex-row gap-6 items-center">
                      <Image
                        src={item.projectThumbnail}
                        height={200}
                        width={200}
                        className="rounded-xl border-2 border-gray-100"
                        alt="project_preview_img"
                      />
                      <div className="flex flex-col gap-2 max-w-[30rem]">
                        <h1
                          key={idx}
                          className={
                            p2p_light.className + " text-yellow-800 text-[1rem]"
                          }
                        >
                          {item.projectTitle}
                        </h1>
                        <p className="retroui-text text-[1rem] text-black leading-relaxed">
                          {item.projectDescription}
                        </p>
                      </div>
                    </div>
                    <div>
                      {item.extendedProjectDetails.isProjectActive ? (
                        <div
                          className="flex flex-row gap-2 items-center hover:text-yellow-400"
                          onClick={() => {
                            setShowProject(true);
                            setProject(item.extendedProjectDetails);
                          }}
                        >
                          {" "}
                          <IoNavigateCircleOutline className="w-8 h-8" />
                          <p className={p2p_light.className + " text-[0.8rem]"}>
                            Learn More
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-row gap-2 items-center hover:text-red-600">
                          <FaHourglassHalf className="w-5 h-5" />
                          <p className={p2p_light.className + " text-[0.7rem]"}>
                            Work In Progress
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              {showProject && displayProject(project)}
            </Card>
          )}
        </motion.div>
      ))}
    </div>
  );
};
