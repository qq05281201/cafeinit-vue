<template>
  <div v-bind:class="ns + 'rate'">
    <span v-for="item in items" v-bind:class="[
        ns + 'rate-item',
        item.decimal ? ns + 'rate-item-half' : '',
        item.isOn ? ns + 'rate-item-on' : ''
      ]"
      v-bind:style="{ cursor: disabled ? 'auto' : 'pointer' }"
      v-on:click="onClickItem(item.value)">
      <i class="fa fa-star"></i>
      <i v-if="item.decimal" class="fa fa-star"
        v-bind:style="{ width: item.decimal + '%' }"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ci-rate',

  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    value: {
      type: [Number, String],
      default: 0
    },

    max: {
      type: Number,
      default: 5
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      myValue: this.value
    }
  },

  watch: {
    value(val) {
      this.myValue = val
    }
  },

  computed: {
    items() {
      let items = []
      for (let i = 1; i <= this.max; i++) {
        let decimal = 1 - (i - this.myValue)
        if (decimal >= 0.5 && decimal < 1) {
          // decimal *= 100
          decimal = 50
        }
        else {
          decimal = 0
        }

        items.push({
          value: i,
          decimal: decimal,
          isOn: i <= this.myValue
        })
      }
      return items
    }
  },

  methods: {
    onClickItem(value) {
      if (!this.disabled) {
        // console.log('CIRate.onClickItem', score)
        if (value == 1 && this.myValue == 1) {
          this.myValue = 0
        }
        else {
          this.myValue = value
        }
        this.$emit('input', this.myValue)
      }
    }
  }
}
</script>
