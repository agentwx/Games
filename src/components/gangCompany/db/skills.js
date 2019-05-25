export default {
  data(){
    return{
      allSkills: [
        { //0
          img: require("../img/default.png"),
          name: "人格魅力",
          desc: "提升offer被接受的概率",
          effect: {
            basicAcceptOfferRate: 0.2
          }
        },
        { //1
          img: require("../img/default.png"),
          name: "电子元件",
          desc: "提升网站的基本盈利",
          effect: {
            baseProfit: 0.25
          }
        },
        { //2
          img: require("../img/default.png"),
          name: "土豪入驻",
          desc: "提升网站的会员氪金",
          effect: {
            vipProfit: 0.3
          }
        },
        { //3
          img: require("../img/default.png"),
          name: "包租婆的口红",
          desc: "降低租金",
          effect: {
            rentCost: -0.25
          }
        },
        { //4
          img: require("../img/default.png"),
          name: "艾登的手套",
          desc: "降低电费",
          effect: {
            electricityCost: -0.25
          }
        },
        { //5
          img: require("../img/default.png"),
          name: "网管的手办",
          desc: "降低网费",
          effect: {
            netCost: -0.25
          }
        },
        { //6
          img: require("../img/default.png"),
          name: "不存在的餐补",
          desc: "员工每天可接受的工作时间增加1小时",
          effect: {
            workHoursToMood: 1
          }
        },
        { //7
          img: require("../img/default.png"),
          name: "资本家的剥削",
          desc: "员工每天可接受的工作时间增加1小时",
          effect: {
            workHoursToMood: 1
          }
        },
        { //8
          img: require("../img/default.png"),
          name: "996的庇护",
          desc: "员工每天可接受的工作时间增加1小时",
          effect: {
            workHoursToMood: 1
          }
        },
        { //9
          img: require("../img/default.png"),
          name: "福报",
          desc: "减少员工周末加班时心情下降的值",
          effect: {
            weekendWorkToMood: 5
          }
        },
        { //10
          img: require("../img/default.png"),
          name: "ICU",
          desc: "减少员工周末加班时心情下降的值",
          effect: {
            weekendWorkToMood: 5
          }
        },
        { //11
          img: require("../img/default.png"),
          name: "奋斗",
          desc: "减少员工周末加班时心情下降的值",
          effect: {
            weekendWorkToMood: 5
          }
        },
        { //12
          img: require("../img/default.png"),
          name: "价值观不合警告",
          desc: "可立即开除新员工",
          effect: {
            fireDay: -30
          }
        },
        { //13
          img: require("../img/default.png"),
          name: "互联网寒冬",
          desc: "降低求职者的期望薪资，减少求职者人数，降低offer被接受的概率",
          effect: {
            expectSalary: -50,
            seekerNumber: -1,
            basicAcceptOfferRate: -0.05
          }
        },
        { //14
          img: require("../img/default.png"),
          name: "虚假宣传",
          desc: "增加公司知名度，增加求职者人数",
          effect: {
            seekerNumber: 1,
            popularity: 0.1
          }
        },
        { //15
          img: require("../img/default.png"),
          name: "洁癖",
          desc: "略微改善公司环境",
          effect: {
            environment: 5
          }
        },
        { //16
          img: require("../img/default.png"),
          name: "表结构优化",
          desc: "减少用户每天产生的数据量",
          effect: {
            serversSizePerUser: -0.2
          }
        },
        { //17
          img: require("../img/default.png"),
          name: "投资鬼才",
          desc: "降低学习新能力的价格",
          effect: {
            skillPrice: -0.25
          }
        },
        { //18
          img: require("../img/default.png"),
          name: "技术出身",
          desc: "增加工作日的用户增量",
          effect: {
            user: 0.25
          }
        },
        { //19
          img: require("../img/default.png"),
          name: "产品出身",
          desc: "提高网站的用户体验",
          effect: {
            ue: 0.25
          }
        },
        { //20
          img: require("../img/default.png"),
          name: "美工出身",
          desc: "美化网站的用户界面",
          effect: {
            ui: 0.25
          }
        },
        { //21
          img: require("../img/default.png"),
          name: "网管出身",
          desc: "加快网站的响应速度，减少用户每天产生的数据量",
          effect: {
            speed: 0.15,
            serversSizePerUser: -0.2
          }
        },
        { //22
          img: require("../img/default.png"),
          name: "大学普及",
          desc: "提高国民的智力水平",
          effect: {
            minAbility: 10
          }
        },
        { //23
          img: require("../img/default.png"),
          name: "义务教育",
          desc: "提高国民的智力水平",
          effect: {
            minAbility: 10
          }
        },
      ]
    }
  }
}
