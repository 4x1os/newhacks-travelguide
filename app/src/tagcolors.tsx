export interface TagStyle {
  textColor: string;
  bgColor: string;
}

const TAG_PALETTE: TagStyle[] = [
    { textColor: "text-slate-700", bgColor: "bg-blue-100" },
    { textColor: "text-slate-700", bgColor: "bg-green-100" },
    { textColor: "text-slate-700", bgColor: "bg-purple-100" },
    { textColor: "text-slate-700", bgColor: "bg-yellow-100" },
    { textColor: "text-slate-700", bgColor: "bg-pink-100" },
    { textColor: "text-slate-700", bgColor: "bg-indigo-100" },
];

const getRandomTagStyle = (): TagStyle => {
    const randomIndex = Math.floor(Math.random() * TAG_PALETTE.length);
    return TAG_PALETTE[randomIndex];
};

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

};

export function getTagStyle(tagName: string): TagStyle {
  return TAG_STYLES[tagName] || getRandomTagStyle();
}