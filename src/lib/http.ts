import Wretch, { Wretcher } from 'wretch'

class HttpService {
  private w: Wretcher
  private token: string

  constructor() {
    this.token = (window as any).__token__ as string
    this.w = Wretch('/api')
    .headers({
      'X-CSRFToken': this.token,
      'mode': 'same-origin',
    })
  }

  submitAnswer(questionId: string, points: number) {
    this.w
    .url('/question')
    .post({ questionId, points })
    .then(console.log)
  }
}

export const Http = new HttpService()
