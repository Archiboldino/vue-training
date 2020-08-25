<template>
  <div class="toggle">
    <input type="radio" :name="buttonsName" :id="leftButtonId" :value="leftButtonValue" checked/>
    <label :for="leftButtonId">
      <slot name="left-button-content">Left</slot>
    </label>
    <input type="radio" :name="buttonsName" :id="rightButtonId" :value="rightButtonValue"/>
    <label :for="rightButtonId">
      <slot name="right-button-content">Right</slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'radiobutton-pair',
  props: {
    leftButtonValue: {
      type: String,
      required: true
    },
    leftButtonId: {
      type: String,
      required: true
    },
    rightButtonValue: {
      type: String,
      required: true
    },
    rightButtonId: {
      type: String,
      required: true
    },
    buttonsName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.toggle {
  box-sizing: border-box;
  font-size: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row nowrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: stretch;
  align-items: stretch;
}

.toggle input {
  width: 0;
  height: 0;
  position: absolute;
  left: -9999px;
}

.toggle input + label {
  margin: 0;
  padding: .25rem 1rem;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  border: solid 1px #DDD;
  background-color: rgba(55, 55, 55, 0.6);
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  -webkit-transition: border-color .15s ease-out, color .25s ease-out, background-color .15s ease-out, box-shadow .15s ease-out;
  transition: border-color .15s ease-out, color .25s ease-out, background-color .15s ease-out, box-shadow .15s ease-out;
  text-transform: uppercase;
  color: white;
}

.toggle input + label:first-of-type {
  border-radius: 6px 0 0 6px;
  border-right: none;
}

.toggle input + label:last-of-type {
  border-radius: 0 6px 6px 0;
  border-left: none;
}

.toggle input:hover + label {
  border-color: #213140;
}

.toggle input:checked + label {
  background-color: #f65261;
  color: #FFF;
  box-shadow: 0 0 10px rgba(102, 179, 251, 0.5);
  z-index: 1;
}

.toggle input:focus + label {
  outline: dotted 1px #CCC;
  outline-offset: .45rem;
}
</style>
