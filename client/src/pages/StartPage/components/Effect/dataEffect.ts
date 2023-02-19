interface EffectsInterface {
  id: number;
  color: string;
  text: string;
  description: string;
}

export const EFFECTS: Array<EffectsInterface> = [
  {
    id: 1,
    color: "#27a8e0",
    text: "+17%",
    description: "startPage.reactDescription",
  },
  {
    id: 2,
    color: "#b47cfc",
    text: "x1,6",
    description: "startPage.focusDescription",
  },
  {
    id: 3,
    color: "#ec5956",
    text: "x2,1",
    description: "startPage.attentionDescription",
  },
  {
    id: 4,
    color: "#23b175",
    text: "+19%",
    description: "startPage.memoryDescription",
  },
];
