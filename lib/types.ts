export type ProjectStage =
  | "Trust"
  | "Understanding"
  | "Demand"
  | "Service"
  | "Conversion";

export type ProjectStatus = "public" | "in-progress" | "private";

export interface Project {
  slug: string;
  name: string;
  stage: ProjectStage;
  /** What kind of work this actually was. Stops a reader assuming "website". */
  discipline: string;
  /** The line that takes a position. Set large. */
  headline: string;
  body: string;
  actionLabel: string;
  href?: string;
  status: ProjectStatus;
  external?: boolean;
  /** Screenshot in /public/work. Absent for unphotographed private systems. */
  image?: string;
  imageAlt?: string;
  /** Top-anchored zoom to crop chrome (chat widgets, cookie bars) out of a capture. */
  imageZoom?: number;
  /** Shown over the plane for private work. */
  stamp?: string;
}
