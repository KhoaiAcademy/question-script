import Wretch, { Wretcher } from 'wretch'

export class Http {
  private w: Wretcher
  private token: string
  private entity: string

  constructor() {
    this.token = (window as any).__token__ as string
    this.entity = (window as any).__entity__ as string
    this.w = Wretch('/api')
    .headers({
      'X-CSRFToken': this.token,
      'mode': 'same-origin',
    })
  }

  submitAnswer(points: number) {
    this.w
    .url('/question')
    .post({ entityId: this.entity, points })
    .then(console.log)
  }
}

