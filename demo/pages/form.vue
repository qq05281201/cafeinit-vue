<template>
  <div id="form">
    <ci-form class="my-form" horizontal="horizontal">
      <ci-block>
        <ci-block-body>
          <ci-text class="my-email" title="电子邮箱" type="email" name="email" placeholder="请输入邮箱"
            v-model="email"></ci-text>

          <ci-text title="密码" type="password" name="password" placeholder="6-18位字母数字"
            title-width="4em" v-model="password"></ci-text>
        </ci-block-body>

        <ci-block-footer>
          <ci-button style="primary" block="block" v-on:click="save">保存</ci-button>
        </ci-block-footer>
      </ci-block>
    </ci-form>

    <ci-form>
      <ci-block>
        <ci-block-body>
          <ci-select title="商品分类" name="category" v-bind:items="[
              {title: 'Category 01', value: '1'},
              {title: 'Category 02', value: '2'},
              {title: 'Category 03', value: '3'}
            ]"
            v-model="category"></ci-select>

          <ci-text title="电子邮箱" type="email" name="email" placeholder="请输入邮箱"
            v-model="email"></ci-text>

          <ci-text title="密码" type="password" name="password" placeholder="6-18位字母数字"
            title-width="4em" v-model="password"></ci-text>

          <ci-number title="数量" name="count" placeholder="0"
            title-width="4em" v-model="count"
            v-bind:step="5" v-bind:min="0" v-bind:max="20"></ci-number>

          <ci-number title="质量" name="count" placeholder="0"
            title-width="4em" v-model="count"
            v-bind:step="1" v-bind:min="0" v-bind:max="20"></ci-number>

          <ci-checkbox inline="inline" title="技能" title-width="4em" name="skills"
            v-bind:items="[
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'JavaScript', value: 'javascript'}
            ]"
            v-model="skills"></ci-checkbox>

          <ci-checkbox title="技能" title-width="4em" name="skills"
            v-bind:items="[
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'JavaScript', value: 'javascript'}
            ]"
            v-model="skills"></ci-checkbox>

          <ci-radio title="性别" title-width="4em" name="gender" inline="inline"
            v-bind:items="[
              {title: 'Male', value: 'male'},
              {title: 'Female', value: 'female'}
            ]"
            v-model="gender"></ci-radio>

          <ci-radio title="商家类型" name="type" inline="inline"
            v-bind:items="[
              {title: 'Personal', value: '1'},
              {title: 'Bussiness', value: '2'}
            ]"
            v-model="type"></ci-radio>

          <ci-switch title="是否启用" name="is_working"
            v-model="isWorking"></ci-switch>

          <ci-text title="是否启用" type="text" disabled="disabled"
            v-model="isWorkingString"></ci-text>
        </ci-block-body>
      </ci-block>

      <div class="ci-btn-area">
        <ci-button style="primary" block="block" v-on:click="save">保存</ci-button>
      </div>
    </ci-form>
  </div>
</template>

<script>
export default {
  name: 'form',

  data() {
    return {
      email: 'iburning@live.cn',
      password: '',
      count: 0,
      category: '2',
      skills: ['html', 'javascript'],
      gender: 'female',
      type: '1',
      isWorking: false
    }
  },

  computed: {
    isWorkingString() {
      return this.isWorking ? 'Working' : 'Not working'
    }
  },

  watch: {
    category: function (val, oldVal) {
      console.log('category', val, oldVal)
    }
  },

  mounted() {
    console.log('form mounted')
  },

  methods: {
    save() {
      console.log('save', this.$data)
    }
  }
}
</script>
