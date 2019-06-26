export default {
  data(){
    return{
      chatWords: [
        { //闲聊
          you: ["在吗？", "你在干嘛？", "吃饭了吗？", "滋儿哇"],
          accept: ["嗯", "^o^"],
          refuse: ["滚", "哦", "...", "呵呵", "：）"]
        },
        { //红包
          you: ["本来想给你发个红包的，然而没有钱了"],
          accept: ["哇，谢谢小哥哥~", "谢谢土豪！", "么么哒~", "爱你哦"],
          refuse: ["？？？", "你装你马呢", "臭吊丝", "你可真是个穷逼"]
        },
        { //吃饭
          you: ["明天有空吗，我请你吃饭", "最近交大开了一家火锅店，我们去吃吧", "吃必胜客不？", "明天我请你吃饭"],
          accept: ["好啊好啊", "嗯嗯", "好的，明天见"],
          refuse: ["我肚子疼，算了吧", "改天吧", "emmmm我不想去", "算了吧。。。"]
        },
        { //电影
          you: ["明天万与万寻重映了，一起去看吗？", "妇联4走一波？", "三杠奇遇记听说评分很高，我们明天去看吧", "有一部恐怖片叫电锯惊魂评分很高，你想看吗？", "后任3现在很火啊，你看过了没，明天一起去吧？"],
          accept: ["好啊，听说很不错呢", "嗯嗯，我很想看", "好"],
          refuse: ["滚", "不好意思我明天有事。。。", "我不想去", "听着很没意思呢"]
        },
        { //送礼
          you: ["我在某宝上给你买了样东西，你查收一下"],
          accept: ["哇，谢谢小哥哥~", "谢谢土豪！", "么么哒~", "爱你哦"],
          refuse: ["我没收到啊？？？", "你骗我的吧", "哪有？你个大骗子", "没钱少装逼", "fnndp"]
        },
        { //旅游
          you: ["我打算去浙江丽水旅游，那儿的风景很好，你想去吗？", "法国巴黎双人七日游了解一下", "我下周去日本秋叶原玩，一起搭个伴？", "明天我去香港，缺个伴，你来陪我吧"],
          accept: ["好啊好啊，我超想去的", "哇！！！（星星眼）", "你可对我太好了"],
          refuse: ["我。。不太想去呢", "别来烦我", "？那是什么鸟地方", "不去滚"]
        },
        { //表白
          you: [],
          accept: [],
          refuse: []
        },
        { //求婚
          you: [],
          accept: [],
          refuse: []
        }
      ]
    }
  }
}
