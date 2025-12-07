export const WORDS_PER_MINUTE = 255

export const WORD_REGEX = /\w+/g

export const calculateReadTime = (text: string) => {
  const words = text.match(WORD_REGEX) || []
  const numberOfWords = words.length
  const readingTimeSeconds = (numberOfWords / WORDS_PER_MINUTE) * 60

  return Math.ceil(readingTimeSeconds)
}

export const formatReadTime = (seconds: number) => {
  const units: { unit: Intl.NumberFormatOptions['unit']; value: number }[] = [
    { unit: 'hour', value: 3600 },
    { unit: 'minute', value: 60 },
    { unit: 'second', value: 1 },
  ]

  const match = units.find((unit) => seconds >= unit.value) || units[2]

  const value = Math.ceil(seconds / match.value)

  return new Intl.NumberFormat('es', {
    style: 'unit',
    unit: match.unit,
    unitDisplay: 'long',
  }).format(value)
}

export const getReadTimeText = (text: string) => {
  const seconds = calculateReadTime(text)
  return formatReadTime(seconds)
}
