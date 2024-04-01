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
            <Box title="病虫害介绍">
              <template v-slot:content>
                <!--<Left2/>-->
                <div class="scroll">
                  <a-typography-paragraph style="color: #ebf357;font-family: 雅痞-简">
                    农业病虫害研究图库（IDADP）
                    由中国科学院合肥智能机械研究所牵头、联合亚热带农业生态研究所、遥感与数字地球研究所建设，整合了大量的农业病虫害图像样本资源，每种病虫害具有几百到几千张高质量图像，可为病虫害图像识别研究提供机器学习建模所需的样本
                    。
                  </a-typography-paragraph>
                  <a-typography-paragraph style="color: #8EE5EE;font-family: 雅痞-简">
                    面向农业图像理解的机器学习数据集是以农业病虫害研究图库（IDADP）为基础建设而成的综合数据库。整合了大量的农业本体和病虫害高质量图像/文本/视频样本资源，为农业本体/病虫害认知研究提供机器学习建模所需的样本数据，形成面向农业图像理解关键技术研究的基础资源。
                  </a-typography-paragraph>
                  <a-typography-paragraph style="color: #8EE5EE;font-family: 雅痞-简">
                    据我所知，该数据集数量最大，作物类别、病虫害类别最齐全，数据量超过200G。囊括了水稻、小麦、玉米、大豆、棉花、黄瓜、番茄、葡萄、猕猴桃、梨树、豇豆、西瓜、甜瓜等作物。以水稻为例，提供了水稻白叶枯病、水稻稻曲病、水稻稻瘟病、水稻胡麻斑病、水稻纹枯病、水稻细菌性条斑病等病害，东方蝼蛄、盾蝽、稻飞虱、稻蝗、稻棘缘蝽、稻绿蝽、稻纵卷叶螟、二化螟、二星蝽、麻皮蝽、水稻大螟、甜菜白带野螟、中华剑角蝗等十几种虫害的数据。
                  </a-typography-paragraph>
                </div>
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
            <Box title="实时病虫害数据曲线">
              <template v-slot:content>
                <Right1 />
              </template>
            </Box>
          </div>
          <div class="content_one_right_2 chart_box">
            <Box title="专家推荐配药方案">
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
          <Box title="环境数据实时检测">
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

    <!-- 病虫害识别
    <template v-if="showFind">
      <h1>show了看看我</h1>
      <iframe>
        <find />
      </iframe>
    </template> -->

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
  /*
  data: {
    return() {
      showFind: false
    }
  },
  porps() {
    return {
      value: this.showFind
    }
  },
  created() {
    Bus.$on('toggleFind', () => {
      this.showFind = !this.showFind
    })
  }*/
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
