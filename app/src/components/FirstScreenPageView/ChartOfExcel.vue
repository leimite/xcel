<template>
  <div class="chart_of_execl" :class="{'isShowSideBar':!sideBarStatus}">
    <svg v-for="(person, index) in dateValue" :key="index" :class="'time-stack' + index" width="760" height="760"></svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as d3 from 'd3';
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
    for (let i = 0; i < this.dateValue.length; i++) {
      d3.select('.time-stack' + i).call(bar()
        .data({
          axisX: this.dateLabel.slice(3).concat(['示例']),
          values: this.dateValue[i].slice(3).concat(['08:00 20:00'])
        })
        .titleText(this.dateValue[i][0] + '考勤图表') // 图表标题
        .stackLabelCustom({
          'workBefore': 'Are you Ready?'
        })
      )
    }

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

.d3-tip {
  line-height: 1;
  font-weight: bold;
  padding: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 2px;
  pointer-events: none;
}





/* Creates a small triangle extender for the tooltip */

.d3-tip:after {
  box-sizing: border-box;
  display: inline;
  font-size: 10px;
  width: 100%;
  line-height: 1;
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  pointer-events: none;
}





/* Northward tooltips */

.d3-tip.n:after {
  content: "\25BC";
  margin: -1px 0 0 0;
  top: 100%;
  left: 0;
  text-align: center;
}





/* Eastward tooltips */

.d3-tip.e:after {
  content: "\25C0";
  margin: -4px 0 0 0;
  top: 50%;
  left: -8px;
}





/* Southward tooltips */

.d3-tip.s:after {
  content: "\25B2";
  margin: 0 0 1px 0;
  top: -8px;
  left: 0;
  text-align: center;
}





/* Westward tooltips */

.d3-tip.w:after {
  content: "\25B6";
  margin: -4px 0 0 -1px;
  top: 50%;
  left: 100%;
}
</style>


