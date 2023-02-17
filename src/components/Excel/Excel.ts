interface Options {
  components: []
}

export class Excel {
  $el: Element | null
  components: any[] // ?

  constructor(selector: string, options: Options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }
}
