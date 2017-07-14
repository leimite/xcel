<template>
  <div class="chart_of_execl" :class="{'isShowSideBar':!sideBarStatus}">
    <svg class="time-stack" width="760" height="760"></svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as d3 from "d3";
var bar = require('d3-stack-time')

export default {
  props: {
    dateLabel: {
      type: Array,
      required: true
    },
    dateValue: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      sideBarStatus: 'getSideBarStatus'
    })
  },
  mounted() {
    var mock={
      axisX: this.dateLabel,
      values: this.dateValue

    }
    // d3.select('.time-stack').call(bar()
    //   .data(mock)
    //   .stackLabelCustom({
    //     'workBefore': 'Are you Ready?'
    //   })
    // )
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
.bar {
  fill: steelblue;
}

.axis path {
  display: none;
}
</style>


