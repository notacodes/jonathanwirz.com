import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jonathan Wirz",
  EMAIL: "jonathan.wirz@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "This is my little space to share what I learn, what inspires me, and the projects I’m working on.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "This is my little space to share what I learn, what inspires me, and the things I find worth remembering along the way.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/notacodes",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/notacodes"
  },
];
