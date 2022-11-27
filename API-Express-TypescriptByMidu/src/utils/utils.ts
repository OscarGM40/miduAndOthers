import { Visibility, Weather } from '../enums'
import { NewDiaryEntry } from '../types'

/* fijate que normalmente usaré una libreria. */
const parseComment = (commentFromRequest: any): string => {
  if (commentFromRequest === null || !isString(commentFromRequest)) {
    throw new Error('Invalid or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (
    dateFromRequest === null ||
    !isString(dateFromRequest) ||
    !isDate(dateFromRequest)
  ) {
    throw new Error('Invalid or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (
    weatherFromRequest === null ||
    !isString(weatherFromRequest) ||
    !isWeather(weatherFromRequest)
  ) {
    throw new Error('Invalid or missing weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    visibilityFromRequest === null ||
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error('Invalid or missing visibility')
  }
  return visibilityFromRequest
}

/* utilidades para los parsers */
const isString = (value: any): boolean =>
  typeof value === 'string' || value instanceof String

const isDate = (date: string): boolean => Boolean(Date.parse(date))

const isWeather = (weather: any): boolean =>
  Object.values(Weather).includes(weather)

const isVisibility = (visibility: any): boolean =>
  Object.values(Visibility).includes(visibility)

const toNewDiaryEntry = (object: any): NewDiaryEntry => ({
  weather: parseWeather(object.weather),
  visibility: parseVisibility(object.visibility),
  date: parseDate(object.date),
  comment: parseComment(object.comment)
})

export default toNewDiaryEntry
