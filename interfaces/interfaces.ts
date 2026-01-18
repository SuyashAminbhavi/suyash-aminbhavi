import { StaticImageData } from "next/image";
import { JSX } from "react";

export type Project = {
  isProjectActive: boolean;
  projectName: string;
  projectDescription: string;
  projectDuration: string;
  projectTeamSize: string;
  projectPreviewImg: StaticImageData;
  projectLiveLink: string;
  projectDemoLink: string;
  technologiesUsed: {
    title: string;
    icon: JSX.Element;
    href: string;
    iconStyle: string;
  }[];
};

export type ProjectList = {
  projectCategory: string;
  projectTitle: string;
  projectDescription: string;
  projectThumbnail: StaticImageData;
  extendedProjectDetails: Project;
}[];

export type Technology = {
  title: string;
  icon: JSX.Element;
  href: string;
  iconStyle: string;
};

export type Tab = {
  title: string;
  value: string;
  projectList: ProjectList;
  // projectDetails: Project;
};

export type Components = {
  name: React.JSX.Element;
  id: string;
  additionalClass: string;
};
