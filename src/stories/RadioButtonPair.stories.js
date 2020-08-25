import RadioButtonPair from '../components/RadiobuttonPair.vue'
import {text} from "@storybook/addon-knobs";

export default {
  component: RadioButtonPair,
  title: 'Radiobutton pair'
}

export const withTextForLeftAndRightButton = () => ({
  components: {RadioButtonPair},
  template: `
    <radio-button-pair left-button-value="left" right-button-value="right" left-button-id="left" right-button-id="right"
                       buttons-name="name">
      <template v-slot:left-button-content>{{leftButtonText}}</template>
      <template v-slot:right-button-content>{{rightButtonText}}</template>
    </radio-button-pair>`,
  props: {
    leftButtonText: {
      default: text('Left button text', 'left')
    },
    rightButtonText: {
      default: text('Right button text', 'rigth')
    }
  }
})
