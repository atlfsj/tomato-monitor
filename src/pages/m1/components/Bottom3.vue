<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: charles
 * @LastEditTime: 2021-07-14 15:18:36
-->
<template>
  <div ref="bottom3container" style="margin-top: 20px">

  </div>
</template>
<script>
import {Bar} from '@antv/g2plot';

export default {
  props: ['vaccineTotal'],
  data() {
    return {}
  },
  watch: {
    vaccineTotal() {
      this.initCharts()
    }
  },
  methods: {
    initCharts() {


      const data = this.vaccineTotal
      const column = new Bar(this.$refs.bottom3container, {
        data,
        yField: 'name',
        xField: 'value',
        height: 150,
        yAxis: {
          label: {
            autoRotate: false,
          },
        },
        scrollbar: {
          type: 'vertical',
        },
      });

      column.render();
    }
  }
}
</script>
