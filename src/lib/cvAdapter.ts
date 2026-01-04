import dayjs from "dayjs";
import {
  defaultLanguage,
  getTranslation,
  isSupportedLanguage,
  type Translation,
} from "../i18n/translations";

export type CvVariant = "short" | "full";

export interface CvBasics {
  name: string;
  title: string;
  email: string;
  links: Array<{ label: string; url: string }>;
}

export interface CvExperienceItem {
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface CvProjectItem {
  title: string;
  desc: string;
  url: string;
  badge?: string;
}

export interface CvEducationItem {
  title: string;
  subtitle: string;
}

export interface CvCertificationItem {
  label: string;
  url: string;
}

export interface CvLanguageItem {
  name: string;
  level: string;
}

export interface CvData {
  basics: CvBasics;
  summary: string;
  experience: CvExperienceItem[];
  projects: CvProjectItem[];
  education: CvEducationItem[];
  skills: string[];
  languages: CvLanguageItem[];
  certifications: CvCertificationItem[];
}

const email = "ferranhpv3@gmail.com";
const links: CvBasics["links"] = [
  { label: "GitHub", url: "https://github.com/Ferranv3" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ferran-hernandez-v3/" },
  { label: "Calendly", url: "https://calendly.com/d/cwgs-txt-yqj/meeting" },
];

function calcDuration({ durationLabels, durationConfig }: Translation) {
  const entries = Object.entries(durationConfig ?? {});

  const compute = (startStr: string, endStr?: string) => {
    const start = dayjs(startStr);
    const end = endStr ? dayjs(endStr) : dayjs();
    const totalMonths = end.diff(start, "month");
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const parts: string[] = [];
    if (years > 0) {
      parts.push(`${years} ${years === 1 ? durationLabels.year : durationLabels.years}`);
    }
    if (months > 0) {
      parts.push(`${months} ${months === 1 ? durationLabels.month : durationLabels.months}`);
    }
    if (parts.length === 0) {
      return durationLabels.zero;
    }
    if (parts.length === 1) {
      return parts[0];
    }
    return `${parts[0]} ${durationLabels.and} ${parts[1]}`;
  };

  return Object.fromEntries(entries.map(([key, value]) => [key, compute(value.start, value.end)]));
}

function applyPlaceholders(value: string | undefined, durations: Record<string, string>) {
  if (!value) return "";
  return Object.entries(durations).reduce(
    (acc, [placeholder, duration]) => acc.replaceAll(`{${placeholder}}`, duration),
    value,
  );
}

function normalizeBullets(desc: string | undefined, maxBullets?: number) {
  if (!desc) return [] as string[];
  const bullets = desc
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.replace(/^[-•]\s*/, ""));

  return typeof maxBullets === "number" ? bullets.slice(0, maxBullets) : bullets;
}

function mapExperience(t: Translation, variant: CvVariant): CvExperienceItem[] {
  const durations = calcDuration(t.experience);
  const maxBullets = variant === "short" ? 3 : undefined;
  const maxItems = variant === "short" ? 5 : t.experience.items.length;

  return t.experience.items.slice(0, maxItems).map((item) => ({
    title: item.title,
    subtitle: applyPlaceholders(item.subtitle, durations),
    bullets: normalizeBullets(applyPlaceholders(item.desc, durations), maxBullets),
  }));
}

function mapProjects(t: Translation, variant: CvVariant): CvProjectItem[] {
  const featured = t.projects.featured;
  const extra = t.projects.extra;

  const combined = variant === "short" ? featured.slice(0, 3) : [...featured, ...extra];
  return combined.map((project) => ({
    title: project.title,
    desc: project.desc,
    url: project.url,
    badge: project.badge,
  }));
}

function mapSkills(t: Translation, variant: CvVariant) {
  return variant === "short" ? t.skills.techs.slice(0, 18) : t.skills.techs;
}

function mapCertifications(t: Translation, variant: CvVariant) {
  return variant === "short" ? t.certifications.items.slice(0, 4) : t.certifications.items;
}

export function buildCvData(lang: string | undefined, variant: CvVariant = "full"): CvData {
  const selectedLang = isSupportedLanguage(lang) ? lang : defaultLanguage;
  const t = getTranslation(selectedLang);

  return {
    basics: {
      name: t.greeting.fullName,
      title: t.greeting.role,
      email,
      links,
    },
    summary: t.profile.description,
    experience: mapExperience(t, variant),
    projects: mapProjects(t, variant),
    education: t.education.items,
    skills: mapSkills(t, variant),
    languages: t.languages.items,
    certifications: mapCertifications(t, variant),
  };
}
