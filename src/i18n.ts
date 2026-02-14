import { es } from "./i18n/es"
import { en } from "./i18n/en"

export type Lang = "es" | "en"

export const dictionaries = { es, en } as const

export type ProjectId = keyof typeof dictionaries.es.projects.items
export type TagKey = keyof typeof dictionaries.es.projects.tags

export const getI18n = (lang: Lang) => dictionaries[lang]

export const getLangFromPath = (url?: URL): Lang =>
  url?.pathname?.startsWith("/en") ? "en" : "es"
