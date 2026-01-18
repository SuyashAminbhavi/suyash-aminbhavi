import { Tillana, Lexend, Press_Start_2P } from "next/font/google";
import Image from "next/image";
import { RiTeamFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { Project } from "@/interfaces/interfaces";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { FloatingDock } from "./floating-dock";
import WorkInProgressAnim from "@/public/Loading.gif";
import Link from "next/link";
import { use } from "react";
import { ThemeContext } from "@/contexts/themeContext";
import { Card } from "pixel-retroui";

const tillana_medium = Tillana({ weight: "500", subsets: ["latin"] });
const lexend_light = Lexend({ weight: "300", subsets: ["latin"] });
const lexend_heavy = Lexend({ weight: "500", subsets: ["latin"] });
const p2p_light = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export default function ProjectView({
  isProjectActive,
  projectName,
  projectDescription,
  projectDuration,
  projectTeamSize,
  projectPreviewImg,
  projectLiveLink,
  projectDemoLink,
  technologiesUsed,
}: Project) {
  const { theme } = use(ThemeContext);
  return (
    <div className="w-full flex flex-col justify-start gap-10 p-6 lg:p-8 overflow-hidden relative rounded-2xl text-4xl text-black">
      {theme === "MINIMALISTIC" && (
        <>
          {/*Desktop Layout*/}
          <div className="hidden lg:block">
            <div className="flex flex-row justify-between items-start gap-8">
              <div className="flex flex-col gap-2">
                <div>
                  <h1
                    className={
                      tillana_medium.className +
                      " underline underline-2 underline-offset-4 decoration-[#f9e864] text-[1.5rem]"
                    }
                  >
                    {projectName}
                  </h1>
                  <p className={lexend_light.className + " text-[1rem] mt-2"}>
                    {projectDescription}
                  </p>
                </div>
                <div className="w-full mt-4 flex flex-row gap-10 justify-start items-center">
                  <div className="flex flex-row items-center gap-4">
                    <div className="w-fit h-fit border-1 border-black bg-[#ffee69] rounded-md p-3">
                      <FaCalendarAlt className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <h1
                        className={
                          lexend_heavy.className +
                          " text-[1rem] text-yellow-500 leading-tight"
                        }
                      >
                        Duration
                      </h1>
                      <p className={lexend_light.className + " text-[1.3rem]"}>
                        {projectDuration}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div className="w-fit h-fit border-1 border-black bg-[#ffee69] rounded-md p-3">
                      <RiTeamFill className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <h1
                        className={
                          lexend_heavy.className +
                          " text-[1rem] text-yellow-500 leading-tight"
                        }
                      >
                        Team Size
                      </h1>
                      <p className={lexend_light.className + " text-[1.3rem]"}>
                        {projectTeamSize}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <CardContainer className="inter-var">
                <CardBody className="bg-[#f9f9f9] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src={projectPreviewImg}
                      height="1000"
                      width="1000"
                      className="h-fit w-full border-[0.8rem] border-white object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex flex-row items-center mt-4">
                    {projectLiveLink !== "N/A" && (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={projectLiveLink}
                        target="__blank"
                        className={
                          lexend_heavy.className +
                          " rounded-xl text-[1rem] font-normal hover:text-yellow-400 dark:text-white"
                        }
                      >
                        View Live
                      </CardItem>
                    )}
                    {projectDemoLink !== "N/A" && projectLiveLink !== "N/A" ? (
                      <LuDot width={5} height={5} />
                    ) : (
                      <></>
                    )}
                    {projectDemoLink !== "N/A" && (
                      <>
                        <Link
                          href={projectDemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            lexend_heavy.className +
                            " text-[1rem] hover:text-yellow-400"
                          }
                        >
                          Watch Demo
                        </Link>
                      </>
                    )}
                    {!isProjectActive && (
                      <div className="flex flex-row gap-2">
                        <Image
                          width={40}
                          height={40}
                          src={WorkInProgressAnim}
                          alt="work_in_progress"
                        />
                        <p className={lexend_heavy.className + " text-[1rem]"}>
                          Work In Progress
                        </p>
                      </div>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            </div>
            <div className="flex flex-col gap-6">
              <div
                className={
                  tillana_medium.className +
                  " underline underline-2 underline-offset-4 decoration-[#f9e864] text-[1.5rem]"
                }
              >
                Technologies Used
              </div>
              <FloatingDock items={technologiesUsed} />
            </div>
          </div>
          {/*Mobile Layout*/}
          <div className="flex flex-col gap-4 lg:hidden overflow-y-auto">
            <CardContainer className="inter-var">
              <CardBody className="bg-[#f9f9f9] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
                <CardItem translateZ="100" className="w-full">
                  <Image
                    src={projectPreviewImg}
                    height="1000"
                    width="1000"
                    className="h-fit w-full border-[0.8rem] border-white object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex flex-row items-center mt-4">
                  {projectLiveLink !== "N/A" && (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={projectLiveLink}
                      target="__blank"
                      className={
                        lexend_heavy.className +
                        " rounded-xl text-[0.7rem] lg:text-[1rem] font-normal hover:text-yellow-400 dark:text-white"
                      }
                    >
                      View Live
                    </CardItem>
                  )}
                  {projectDemoLink !== "N/A" && projectLiveLink !== "N/A" ? (
                    <LuDot width={5} height={5} />
                  ) : (
                    <></>
                  )}
                  {projectDemoLink !== "N/A" && (
                    <>
                      <Link
                        href={projectDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          lexend_heavy.className +
                          " text-[0.7rem] lg:text-[1rem] hover:text-yellow-400"
                        }
                      >
                        Watch Demo
                      </Link>
                    </>
                  )}
                  {!isProjectActive && (
                    <div className="flex flex-row gap-2">
                      <Image
                        width={40}
                        height={40}
                        src={WorkInProgressAnim}
                        alt="work_in_progress"
                      />
                      <p className={lexend_heavy.className + " text-[1rem]"}>
                        Work In Progress
                      </p>
                    </div>
                  )}
                </div>
              </CardBody>
            </CardContainer>
            <h1
              className={
                tillana_medium.className +
                " underline underline-2 underline-offset-4 decoration-yellow-400 text-[1rem]"
              }
            >
              {projectName}
            </h1>
            <p
              className={
                lexend_light.className + " inline-block text-[0.8rem] leading-6"
              }
            >
              {projectDescription}
            </p>
            <div className="w-full mt-4 flex flex-row gap-2 justify-center items-center">
              <div className="w-full flex flex-col justify-start items-center gap-4">
                <div className="w-fit h-fit border-1 border-black bg-[#ffee69] rounded-md p-2">
                  <FaCalendarAlt className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <h1
                    className={
                      lexend_heavy.className +
                      " text-[1rem] text-yellow-500 leading-tight"
                    }
                  >
                    Duration
                  </h1>
                  <p className={lexend_light.className + " text-[1rem]"}>
                    {projectDuration}
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-end items-center gap-4">
                <div className="w-fit h-fit border-1 border-black bg-[#ffee69] rounded-md p-2">
                  <RiTeamFill className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <h1
                    className={
                      lexend_heavy.className +
                      " text-[1rem] text-yellow-500 leading-tight"
                    }
                  >
                    Team Size
                  </h1>
                  <p className={lexend_light.className + " text-[1rem]"}>
                    {projectTeamSize}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div
                className={
                  tillana_medium.className +
                  " underline underline-2 underline-offset-4 decoration-[#f9e864] text-[1rem]"
                }
              >
                Technologies Used
              </div>
              <div className="w-full flex flex-row flex-wrap gap-4">
                {technologiesUsed.map((technology, idx) => (
                  <div key={idx} className="h-6 w-6">
                    {technology.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {theme === "RETRO" && (
        <>
          {/*Desktop Layout*/}
          <div className="hidden lg:block">
            <div className="flex flex-row justify-between items-start gap-8">
              <div className="flex flex-col gap-2">
                <div>
                  <h1
                    className={
                      p2p_light.className + " text-yellow-800 text-[1.2rem]"
                    }
                  >
                    {projectName}
                  </h1>
                  <p className="retroui-text text-[1rem] mt-2">
                    {projectDescription}
                  </p>
                </div>
                <div className="w-full mt-4 flex flex-row gap-10 justify-start items-center">
                  <div className="flex flex-row items-center gap-4">
                    <Card bg="#f9e864" className="w-fit h-fit p-2">
                      <FaCalendarAlt className="w-5 h-5" />
                    </Card>
                    <div className="flex flex-col">
                      <h1
                        className={
                          "retroui-text text-[1rem] text-yellow-500 leading-tight"
                        }
                      >
                        Duration
                      </h1>
                      <p className={"retroui-text text-[1.3rem]"}>
                        {projectDuration}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <Card bg="#f9e864" className="w-fit h-fit p-2">
                      <RiTeamFill className="w-5 h-5" />
                    </Card>
                    <div className="flex flex-col">
                      <h1
                        className={
                          "retrui-text text-[1rem] text-yellow-500 leading-tight"
                        }
                      >
                        Team Size
                      </h1>
                      <p className={"retroui-text text-[1.3rem]"}>
                        {projectTeamSize}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <CardContainer className="inter-var">
                <CardBody className="bg-[#f9f9f9] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src={projectPreviewImg}
                      height="1000"
                      width="1000"
                      className="h-fit w-full border-[0.8rem] border-white object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="retroui-text flex flex-row items-center mt-4">
                    {projectLiveLink !== "N/A" && (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={projectLiveLink}
                        target="__blank"
                        className={
                          "retroui-text rounded-xl text-[1rem] font-normal hover:text-yellow-400 dark:text-white"
                        }
                      >
                        View Live
                      </CardItem>
                    )}
                    {projectDemoLink !== "N/A" && projectLiveLink !== "N/A" ? (
                      <LuDot width={5} height={5} />
                    ) : (
                      <></>
                    )}
                    {projectDemoLink !== "N/A" && (
                      <>
                        <Link
                          href={projectDemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            "retroui-text text-[1rem] hover:text-yellow-400"
                          }
                        >
                          Watch Demo
                        </Link>
                      </>
                    )}
                    {!isProjectActive && (
                      <div className="flex flex-row gap-2">
                        <Image
                          width={40}
                          height={40}
                          src={WorkInProgressAnim}
                          alt="work_in_progress"
                        />
                        <p className={lexend_heavy.className + " text-[1rem]"}>
                          Work In Progress
                        </p>
                      </div>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            </div>
            <div className="flex flex-col gap-6">
              <div
                className={
                  p2p_light.className + " text-yellow-800 text-[1.2rem]"
                }
              >
                Technologies Used
              </div>
              <FloatingDock items={technologiesUsed} />
            </div>
          </div>
          {/*Mobile Layout*/}
          <div className="flex flex-col gap-4 lg:hidden overflow-y-auto">
            <CardContainer className="inter-var">
              <CardBody className="bg-[#f9f9f9] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <Image
                    src={projectPreviewImg}
                    height="1000"
                    width="1000"
                    className="h-fit w-full border-[0.8rem] border-white object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="retroui-text flex flex-row items-center mt-4">
                  {projectLiveLink !== "N/A" && (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={projectLiveLink}
                      target="__blank"
                      className={
                        "retroui-text rounded-xl text-[0.8rem] font-normal hover:text-yellow-400 dark:text-white"
                      }
                    >
                      View Live
                    </CardItem>
                  )}
                  {projectDemoLink !== "N/A" && projectLiveLink !== "N/A" ? (
                    <LuDot width={5} height={5} />
                  ) : (
                    <></>
                  )}
                  {projectDemoLink !== "N/A" && (
                    <>
                      <Link
                        href={projectDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          "retroui-text text-[0.8rem] hover:text-yellow-400"
                        }
                      >
                        Watch Demo
                      </Link>
                    </>
                  )}
                  {!isProjectActive && (
                    <div className="flex flex-row gap-2">
                      <Image
                        width={40}
                        height={40}
                        src={WorkInProgressAnim}
                        alt="work_in_progress"
                      />
                      <p className={lexend_heavy.className + " text-[0.7rem]"}>
                        Work In Progress
                      </p>
                    </div>
                  )}
                </div>
              </CardBody>
            </CardContainer>
            <h1
              className={
                p2p_light.className +
                " underline underline-2 underline-offset-4 decoration-yellow-400 text-[0.8rem]"
              }
            >
              {projectName}
            </h1>
            <p className={"retroui-text inline-block text-[0.9rem] leading-6"}>
              {projectDescription}
            </p>
            <div className="w-full mt-4 flex flex-row gap-2 justify-center items-center">
              <div className="w-full flex flex-col justify-start items-center gap-4">
                <Card
                  bg="#ffee69"
                  className="w-fit h-fit border-1 border-black p-2"
                >
                  <FaCalendarAlt className="w-6 h-6" />
                </Card>
                <div className="flex flex-col">
                  <h1
                    className={
                      lexend_heavy.className +
                      " text-[1rem] text-yellow-500 leading-tight"
                    }
                  >
                    Duration
                  </h1>
                  <p className={lexend_light.className + " text-[1rem]"}>
                    {projectDuration}
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-end items-center gap-4">
                <Card
                  bg="#ffee69"
                  className="w-fit h-fit border-1 border-black p-2"
                >
                  <RiTeamFill className="w-6 h-6" />
                </Card>
                <div className="flex flex-col">
                  <h1
                    className={
                      lexend_heavy.className +
                      " text-[1rem] text-yellow-500 leading-tight"
                    }
                  >
                    Team Size
                  </h1>
                  <p className={lexend_light.className + " text-[1rem]"}>
                    {projectTeamSize}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div
                className={
                  p2p_light.className +
                  " underline underline-2 underline-offset-4 decoration-[#f9e864] text-[0.8rem]"
                }
              >
                Technologies Used
              </div>
              <div className="w-full flex flex-row flex-wrap gap-4">
                {technologiesUsed.map((technology, idx) => (
                  <div key={idx} className="h-6 w-6">
                    {technology.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
