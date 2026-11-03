import dayjs from "dayjs";
import type { DurationLabels } from "../i18n/translations";

type DurationConfig = Record<string, { start: string; end?: string; duration?: string }>;

/** Human readable duration ("1 year and 5 months") between two dates. */
export function calcDuration(
  labels: DurationLabels,
  startStr: string,
  endStr?: string,
): string {
  const start = dayjs(startStr);
  const end = endStr ? dayjs(endStr) : dayjs();
  const totalMonths = end.diff(start, "month");
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? labels.year : labels.years}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? labels.month : labels.months}`);
  }
  if (parts.length === 0) {
    return labels.zero;
  }
  if (parts.length === 1) {
    return parts[0];
  }
  return `${parts[0]} ${labels.and} ${parts[1]}`;
}

/** Returns a function that replaces `{key}` placeholders with live durations. */
export function createPlaceholderResolver(
  labels: DurationLabels,
  config: DurationConfig = {},
) {
  const computed = Object.fromEntries(
    Object.entries(config).map(([key, value]) => [
      key,
      value.duration ?? calcDuration(labels, value.start, value.end),
    ]),
  );

  return (text?: string) => {
    if (!text) return text;
    return Object.entries(computed).reduce(
      (acc, [placeholder, value]) => acc.replaceAll(`{${placeholder}}`, value),
      text,
    );
  };
}
