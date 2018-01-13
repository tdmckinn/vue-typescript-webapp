import Vue from 'vue'
import Component from 'vue-class-component'

interface IHelloWorldLogger {
  log: string
}

@Component({})
export default class BaseWorldDecorated extends Vue {
  msg: string = 'The Best Hello World Today'

  // computed
  get computedMsg() {
    return 'computed ' + this.msg
  }

  // method
  logger({ log }: IHelloWorldLogger) {
    console.log(log)
  }
}
