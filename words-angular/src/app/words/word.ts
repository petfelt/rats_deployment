export class Word {
  word: string
  creator: string
  _id: string
  createdAt: Date
  updatedAt: Date

  constructor(word, creator){
    this.word = word
    this.creator = creator
  }
}
