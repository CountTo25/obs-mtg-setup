import {
  derived,
  fromStore,
  get,
  readable,
  readonly,
  toStore,
  writable,
  type Readable,
  type Writable,
} from "svelte/store";

export const lang: Writable<"jp" | "en"> = writable("jp");

export const labels: Readable<{ [key: string]: { en: string; jp: string } }> =
  readable({
    health: {
      en: "HP",
      jp: "HP",
    },
    commanderDamage: {
      en: "Commander Damage",
      jp: "統率者ダメージ",
    },
    opponentNamePlaceholder: {
      en: "enter name...",
      jp: "統率者の名",
    },
    floatingMana: {
      en: "Floating mana",
      jp: "出したマナ数",
    },
    timeSinceGameStart: {
      en: "Time since start",
      jp: "ゲーム開始から",
    },
    seconds: {
      en: "s",
      jp: "秒",
    },
    minutes: {
      en: "m",
      jp: "分",
    },
    hours: {
      en: "h",
      jp: "時",
    },
  });
