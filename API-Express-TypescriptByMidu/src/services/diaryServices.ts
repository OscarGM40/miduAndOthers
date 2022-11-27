import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types'
import diaryData from './diaries.json'

/* a esto se le llama aserción de tipos.Implica decirle al programa que una variable tiene que funcionar de una forma concreta,en este caso como un DiaryEntry[],lo cual puede hacer. */
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntry | undefined => {
  const diary = diaries.find((d) => d.id === id)
  if (diary !== null) {
    return diary
  } else {
    throw new Error('Diary entry not found')
  }
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] =>
  diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility
  }))

export const addDiaryEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary: DiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
