export type JournalBriefASR = {
  _id: string
  isStarred: boolean
  mood: 1 | 2 | 3 | 4 | 5
  standout: string
  tags: string[]
}

export type JournalFullASR = {
  _id: string
  user: string
  isStarred: boolean
  mood: 1 | 2 | 3 | 4 | 5
  standout: string
  wentWell: string
  wentWrong: string
  betterNextTime: string
  excuses: string
  tags: string[]
}
