/**
 * @fileoverview radio list
 * @author: burning <www.cafeinit.com>
 * @version: 2016-09-11
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    model: {
      type: String,
      default: '',
      twoWay: true
    },

    title: {
      type: String,
      default: ''
    },

    titleWidth: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      required: true
    },

    items: {
      type: Array,
      default: []
    }
  }
}