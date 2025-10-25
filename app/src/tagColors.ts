export interface TagStyle {
  textColor: string;
  bgColor: string;
}


export const TAG_STYLES: Record<string, TagStyle> = {
  "Hot": {
    textColor: "text-slate-900",
    bgColor: "bg-red-400",
  },
  "Budget": {
    textColor: "text-slate-900",
    bgColor: "bg-green-400",
  },
  "Crowded": {
    textColor: "text-slate-900",
    bgColor: "bg-amber-200",
  },
  "Few People": {
    textColor: "text-slate-900",
    bgColor: "bg-indigo-300",
  },

  "DEFAULT": {
    textColor: "text-gray-100",
    bgColor: "bg-zinc-500",
  },
};

export function getTagStyle(tagName: string): TagStyle {
  return TAG_STYLES[tagName] || TAG_STYLES["DEFAULT"];
}