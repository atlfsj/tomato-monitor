<template>
  <div class="container_government">
    <!-- 顶部 -->
    <div class="header">

      <div class="title" style="font-family: 时尚中黑简体">全球疫情数据监测系统</div>


    </div>
    <!-- /顶部 -->
    <!-- 内容 -->
    <div class="content">
      <!-- 第一行 -->
      <div class="content_one">
        <!-- 左侧 -->
        <div class="content_one_left">
          <div class="content_one_left_1 chart_box">
            <Box title="国内疫情数据总览">
              <template v-slot:content>
                <Left1 :total-data="totalData" :ext-data="extData"/>
              </template>
            </Box>
          </div>
          <div class="content_one_left_2 chart_box">
            <Box title="国内今日新增数据公布">
              <template v-slot:content>
                <Left2 :today-add="todayAdd" :ext-data="extData"/>
              </template>
            </Box>
          </div>
        </div>
        <!-- / 左侧 -->
        <!-- 中间 -->
        <div class="content_one_center">
          <div class="chart_box content_one_center_map">
            <!-- <Map/>   -->
            <Map_lz :res-map="resMap"/>
          </div>
        </div>
        <!-- / 中间 -->
        <!-- 右侧 -->
        <div class="content_one_right">
          <div class="content_one_right_1 chart_box">
            <Box title="全球疫情今日新增公布">
              <template v-slot:content>
                <Right1 :all-country-confirm="allCountryConfirm"/>
              </template>
            </Box>
          </div>
          <div class="content_one_right_2 chart_box">
            <Box title="全球疫情确诊数目统计">
              <template v-slot:content>
                <Right2 :all-country-total-confirm="allCountryTotalConfirm"/>
              </template>
            </Box>
          </div>
        </div>
        <!-- / 右侧 -->
      </div>
      <!-- /第一行 -->
      <!-- 第二行 -->
      <div class="content_two">
        <div class="content_tow_1 chart_box">
          <Box title="国内近30日新增曲线">
            <template v-slot:content>
              <Bottom1 :recent-add-data="recentAddData"/>
            </template>
          </Box>
        </div>
        <div class="content_tow_2 chart_box">
          <Box title="国内近30日总数曲线">
            <template v-slot:content>
              <Bottom2 :recent-total-data="recentTotalData"/>
            </template>
          </Box>
        </div>
        <div class="content_tow_3 chart_box">
          <Box title="最新全球疫苗接种数排名">
            <template v-slot:content>
              <Bottom3 :vaccine-total="vaccineTotal"/>
            </template>
          </Box>
        </div>
        <div class="content_tow_4 chart_box">
          <Box title="防疫宣传">
            <template v-slot:content>
              <Bottom4/>
            </template>
          </Box>
        </div>
      </div>
      <!-- /第二行 -->
    </div>

    <!-- /内容 -->
  </div>
</template>
<script>
import Box from '../../../src/components/Box.vue'
import Map from './components/Map'
import Map_lz from './components/Map_lz'
import Left1 from './components/Left1'
import Left2 from './components/Left2'
import Right1 from './components/Right1'
import Right2 from './components/Right2'
import Bottom1 from './components/Bottom1'
import Bottom2 from './components/Bottom2'
import Bottom3 from './components/Bottom3'
import Bottom4 from './components/Bottom4'
import axios from "axios";

export default {
  components: {
    Box,
    Map,
    Map_lz,
    Left1,
    Left2,
    Right1,
    Right2,
    Bottom1,
    Bottom2,
    Bottom3,
    Bottom4
  },
  setup() {
    document.title = '疫情数据监测系统'
  },
  mounted() {
    this.initWangYiData()
    this.initTxData()
  },
  data() {
    return {
      totalData: {},
      extData: {},
      todayAdd: {},
      recentAddData: [],
      recentTotalData: [],
      allCountryConfirm: [],
      allCountryTotalConfirm: [],
      vaccineTotal: [],
      resMap: [],
    }
  },
  methods: {
    initWangYiAxios() {
      const service = axios.create({
        // baseURL: '/api',
        timeout: 3000
      })
      return service
    },

    initTxAxios() {
      const service = axios.create({
        // baseURL: '/txApi',
        timeout: 3000
      })
      return service
    },

    async initWangYiData() {
      const service = this.initWangYiAxios()
      let res = await service.get('/api/ug/api/wuhan/app/data/list-total')
      // console.log(res)
      this.totalData = res.data.data.chinaTotal.total
      this.extData = res.data.data.chinaTotal.extData
      this.todayAdd = res.data.data.chinaTotal.today
      let recentAddDataTemp = res.data.data.chinaDayList
      let areaTree = res.data.data.areaTree
      recentAddDataTemp = recentAddDataTemp.splice(30, 60);
      let resTemp = []
      let resTotalTemp = []
      for (let i = 0; i < 30; i++) {
        let confirmTemp = {
          name: '确诊',
          date: recentAddDataTemp[i].date,
          value: recentAddDataTemp[i].today.confirm
        }
        let healTemp = {
          name: '治愈',
          date: recentAddDataTemp[i].date,
          value: recentAddDataTemp[i].today.heal
        }
        let deadTemp = {
          name: '死亡',
          date: recentAddDataTemp[i].date,
          value: recentAddDataTemp[i].today.dead
        }
        let inputTemp = {
          name: '境外输入',
          date: recentAddDataTemp[i].date,
          value: recentAddDataTemp[i].today.input
        }

        let confirmTotalTemp = {
          name: '确诊',
          date: recentAddDataTemp[i].date,
          value: recentAddDataTemp[i].total.confirm
        }
        let healTotalTemp = {
          name: '治愈',
          date: recentAddDataTemp[i].date,
          value: recentAddDataTemp[i].total.heal
        }
        let deadTotalTemp = {
          name: '死亡',
          date: recentAddDataTemp[i].date,
          value: recentAddDataTemp[i].total.dead
        }
        let inputTotalTemp = {
          name: '境外输入',
          date: recentAddDataTemp[i].date,
          value: recentAddDataTemp[i].total.input
        }
        resTemp.push(confirmTemp)
        resTemp.push(healTemp)
        resTemp.push(deadTemp)
        resTemp.push(inputTemp)
        resTotalTemp.push(confirmTotalTemp)
        resTotalTemp.push(healTotalTemp)
        resTotalTemp.push(deadTotalTemp)
        resTotalTemp.push(inputTotalTemp)
      }
      this.recentAddData = resTemp
      this.recentTotalData = resTotalTemp

      let allCountryConfirmTemp = []
      let allCountryTotalConfirmTemp = []
      for (let i = 0; i < areaTree.length; i++) {
        let otherCountry = {
          name: areaTree[i].name,
          today: areaTree[i].today.confirm
        }
        let otherTotalCountry = {
          name: areaTree[i].name,
          total: areaTree[i].total.confirm
        }
        allCountryConfirmTemp.push(otherCountry)
        allCountryTotalConfirmTemp.push(otherTotalCountry)
      }
      this.allCountryConfirm = allCountryConfirmTemp
      this.allCountryTotalConfirm = allCountryTotalConfirmTemp
    },

    async initTxData() {
      const service = this.initTxAxios()
      let res = await service.get('/txApi/newsqa/v1/automation/modules/list?modules=VaccineSituationData')
      let vaccineTotalArray = res.data.data.VaccineSituationData
      let vaccineTotalTemp = []
      for (let i = 0; i < vaccineTotalArray.length; i++) {
        let vaccineObject = {
          name: vaccineTotalArray[i].country,
          value: vaccineTotalArray[i].total_vaccinations
        }
        vaccineTotalTemp.push(vaccineObject)
      }
      this.vaccineTotal = vaccineTotalTemp


      // 地图
      let mapRes = await service.get('/txApi/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail')
      this.resMap = mapRes.data.data.statisGradeCityDetail
    }

  }
}
</script>

<style lang="scss" scoped>
.container_government {
  div {
    box-sizing: border-box;
  }

  .header {
    height: 200px;
    background: url('../../assets/layout/header.png');
    background-size: 100% 200px;

    .title {
      width: 380px;
      margin: 0 auto;
      text-align: center;
      color: #fff;
      font-size: 28px;
    }
  }

  .content {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;

    .chart_box {
      background: url('../../assets/layout/chart_box_bg.png');
      background-size: 100% 100%;
      margin: 0 .5em .5em .5em;
      padding: .5em;
    }

    .content_one {
      flex: 2;
      display: flex;
      flex-direction: row;

      .content_one_left,
      .content_one_right {
        flex: 1;
        display: flex;
        flex-direction: column;

        & > div {
          flex: 1;
        }
      }

      .content_one_center {
        flex: 2;
        display: flex;
        flex-direction: column;

        & > div {
          background: url('../../assets/layout/chart_center_box_bg.png');
          background-size: 100% 100%;
          flex: 1;
          margin: 0 0 .5em 0;
        }

        .content_one_center_map {
          padding: 1em .5em;
          border-radius: 5px;
          overflow: hidden;
        }
      }
    }

    .content_two {
      flex: 1;
      display: flex;
      flex-direction: row;

      & > div {
        flex: 1;
      }
    }
  }
}
</style>
