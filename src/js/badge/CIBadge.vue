<template src="./_badge.html"></template>

<script>
import config from './_badge'

config.props.ns = {
  type: String,
  default: 'ci-'
}

export default config
</script>
