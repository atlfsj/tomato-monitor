<template>
  <div class="container_government">
    <!-- 顶部 -->
    <div class="header">
      <div class="title">番茄病虫害监测系统</div>
    </div>
    <!-- /顶部 -->
    <!-- 内容 -->
    <div class="content">
      <!-- 第一行 -->
      <div class="content_one">
        <!-- 左侧 -->
        <div class="content_one_left">
          <div class="content_one_left_1 chart_box">
            <Box title="农业资讯">
              <template v-slot:content>
                <!--<Left1/>-->
                <div class="scroll">
                  <a-button class="news" title="把农业建成现代化大产业" type="link" target="_blank"
                    href="http://www.agri.cn/zx/nyyw/202403/t20240305_8613224.htm">
                    把农业建成现代化大产业
                  </a-button>
                  <a-button class="news" title="全国供销合作社系统做好春耕农资供应" type="link" target="_blank"
                    href="http://www.agri.cn/zx/nyyw/202403/t20240305_8613199.htm">
                    全国供销合作社系统做好春耕农资供应
                  </a-button>
                  <a-button class="news" title="把好事实事办到农民心坎上" type="link" target="_blank"
                    href="http://www.agri.cn/zx/nyyw/202403/t20240305_8613195.htm">
                    把好事实事办到农民心坎上
                  </a-button>
                  <a-button class="news" title="中国--中东欧国家农业合作成果如何？" type="link" target="_blank"
                    href="http://www.agri.cn/zx/nyyw/202403/t20240305_8613163.htm">
                    中国--中东欧国家农业合作成果如何？
                  </a-button>
                  <a-button class="news" title="第三期援厄农业专家组归国汇报" type="link" target="_blank"
                    href="http://www.agri.cn/zx/nyyw/202403/t20240305_8613160.htm">
                    第三期援厄农业专家组归国汇报
                  </a-button>
                  <a-button class="news" title="第三期援厄农业专家组归国汇报" type="link" target="_blank"
                    href="http://www.agri.cn/zx/nyyw/202403/t20240305_8613160.htm">
                    第三期援厄农业专家组归国汇报
                  </a-button>
                  <a-button class="news" title="第三期援厄农业专家组归国汇报" type="link" target="_blank"
                    href="http://www.agri.cn/zx/nyyw/202403/t20240305_8613160.htm">
                    第三期援厄农业专家组归国汇报
                  </a-button>
                  <a-button class="news" title="第三期援厄农业专家组归国汇报" type="link" target="_blank"
                    href="http://www.agri.cn/zx/nyyw/202403/t20240305_8613160.htm">
                    第三期援厄农业专家组归国汇报
                  </a-button>
                  <a-button class="news" title="第三期援厄农业专家组归国汇报" type="link" target="_blank"
                    href="http://www.agri.cn/zx/nyyw/202403/t20240305_8613160.htm">
                    第三期援厄农业专家组归国汇报
                  </a-button>
                </div>
              </template>
            </Box>
          </div>
          <div class="content_one_left_2 chart_box">
            <Box title="专家推荐配药方案">
              <template v-slot:content>
                <Left2 />

              </template>
            </Box>
          </div>
        </div>
        <!-- / 左侧 -->
        <!-- 中间 -->
        <div class="content_one_center">
          <div class="chart_box content_one_center_map">
            <!-- <Map/>   -->
            <!--<Map_lz/>-->
            <Vedio />
          </div>
        </div>
        <!-- / 中间 -->
        <!-- 右侧 -->
        <div class="content_one_right">
          <div class="content_one_right_1 chart_box">
            <!-- <Box title="环境数据实时检测">
              <template v-slot:content>
                <div class="right_chart">
                  <div class="right1">
                    <Right1 />
                  </div>
                  <div class="right2">
                    <Right2 />
                  </div>
                </div>

              </template>
            </Box> -->
            <Box title="室内外温度实时检测">
              <template v-slot:content>
                <Right1 />
              </template>
            </Box>

          </div>

          <div class="content_one_right_2 chart_box">
            <Box title="室内湿度实时检测">
              <template v-slot:content>
                <Right2 />
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
          <Box title="防治建议">
            <template v-slot:content>
              <!--<workorder/>-->
              <div class="scroll">
                <a-button class="news" title="果树茶叶应对持续雨雪天气及灾后管理指导意见" type="link" target="_blank"
                  href="http://www.agri.cn/sc/nszd/202402/t20240206_8607939.htm">
                  果树茶叶应对持续雨雪天气及灾后管理指导意见
                </a-button>
                <a-button class="news" title="蔬菜应对持雨雪冰冻天气指导意见" type="link" target="_blank"
                  href="http://www.agri.cn/sc/nszd/202402/t20240201_8606228.htm">
                  蔬菜应对持雨雪冰冻天气指导意见
                </a-button>
                <a-button class="news" title="2024年冬油菜春季田间管理指导意见" type="link" target="_blank"
                  href="http://www.agri.cn/sc/nszd/202402/t20240201_8606060.htm">
                  2024年冬油菜春季田间管理指导意见
                </a-button>
                <a-button class="news" title="2024年全国冬小麦春季田间管理指导意见" type="link" target="_blank"
                  href="http://www.agri.cn/sc/nszd/202402/t20240201_8605937.htm">
                  2024年全国冬小麦春季田间管理指导意见
                </a-button>
                <a-button class="news" title="柑橘防范应对低温冻害技术指导意见" type="link" target="_blank"
                  href="http://www.agri.cn/zx/zxfb/202312/t20231223_8423091.htm">
                  柑橘防范应对低温冻害技术指导意见
                </a-button>
                <a-button class="news" title="小麦防倒伏防早衰夺丰收技术意见" type="link" target="_blank"
                  href="http://www.agri.cn/sc/nszd/202402/t20240206_8607939.htm">
                  果树茶叶应对持续雨雪天气及灾后管理指导意见
                </a-button>
                <a-button class="news" title="小麦防倒伏防早衰夺丰收技术意见" type="link" target="_blank"
                  href="http://www.agri.cn/sc/nszd/202402/t20240206_8607939.htm">
                  果树茶叶应对持续雨雪天气及灾后管理指导意见
                </a-button>
                <a-button class="news" title="小麦防倒伏防早衰夺丰收技术意见" type="link" target="_blank"
                  href="http://www.agri.cn/sc/nszd/202402/t20240206_8607939.htm">
                  果树茶叶应对持续雨雪天气及灾后管理指导意见
                </a-button>
                <a-button class="news" title="小麦防倒伏防早衰夺丰收技术意见" type="link" target="_blank"
                  href="http://www.agri.cn/sc/nszd/202402/t20240206_8607939.htm">
                  果树茶叶应对持续雨雪天气及灾后管理指导意见
                </a-button>
              </div>
            </template>
          </Box>
        </div>
        <div class="content_tow_2 chart_box">
          <Box title="病虫害种类数量实时统计">
            <template v-slot:content>
              <Bottom2 />
            </template>
          </Box>
        </div>
        <div class="content_tow_3 chart_box">
          <Box title="基于知识图谱番茄病虫害诊断系统">
            <template v-slot:content>
              <!--              <minitorinfo device-id="3"/>-->
              <Bottom3></Bottom3>
            </template>
          </Box>
        </div>
        <div class="content_tow_4 chart_box">
          <Box title="防治小技巧">
            <template v-slot:content>
              <Bottom4 />

            </template>
          </Box>
        </div>
      </div>
      <!-- /第二行 -->
    </div>


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
import workorder from './components/workorder'
import Bottom2 from './components/Bottom2'
import minitorinfo from './components/minitorinfo'
import Bottom4 from './components/Bottom4'
import Bottom3 from "./components/Bottom3";
import Middle from "@/pages/government/components/Middle";
import Vedio from './components/Vedio.vue'
import Find from '../m3/Find'

export default {
  components: {
    Middle,
    Box,
    Map,
    Map_lz,
    Left1,
    Left2,
    Right1,
    Right2,
    workorder,
    Bottom2,
    minitorinfo,
    Bottom4,
    Bottom3,
    Vedio
  },
  setup() {
    document.title = '番茄病虫害监测系统'
  },
}



</script>

<style lang="scss" scoped>
.container_government {
  div {
    box-sizing: border-box;
  }

  .news {
    max-width: 300px;

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;
    // color: #8EE5EE;
    color: #ebf357;
    font-family: 雅痞-简;
  }

  .scroll {
    height: 150px;
    overflow-y: auto
  }

  .scroll::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .scroll::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #07910a;
  }

  .scroll::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #62e8a5;
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
      font-family: 时尚中黑简体;
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

        &>div {
          flex: 1;
        }
      }

      .content_one_center {
        flex: 2;
        display: flex;
        flex-direction: column;

        &>div {
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

      &>div {
        flex: 1;
      }
    }
  }
}
</style>
