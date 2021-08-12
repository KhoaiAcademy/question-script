import Wretch, { Wretcher } from 'wretch'

class HttpService {
  private w: Wretcher

  constructor() {
    this.w = Wretch('/api')
  }

  submitAnswer(questionId: string, points: number) {
    this.w
    .url('/question')
    .post({ questionId, points })
    .then(console.log)
  }
}

export const Http = new HttpService()
