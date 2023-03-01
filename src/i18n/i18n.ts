//+-------------------------------------------------------------------------
//
//  i18n
//
//  File:       i18n.ts
//
//  Directory:  src/i18n
//
//  History:    2月-25-2023   QQK  Created
//
//--------------------------------------------------------------------------

export interface LanguageObject {
  navigator_bar: Array<{
    name: string;
    id: string;
  }>

  top_background: {
    title: string;
    subtitle: string;
    wrongDayTimeSubtitle: string;
    wrongNightTimeSubtitle: string;
    explore: string;
  },

  about: {
    meTitle: string;
    meIntroduction: string;
    meContent: Array<string>;

    webTitle: string;
    webContent: Array<string>;
  },

  education: {
    title: string;
    schoolList: Array<{
      name: string;
      time: string;
      introduction: string;
    }>,
  },

  contact: {
    title: string;
    content: string;
  },

  mobile_notice: {
    title: string;
    content: Array<string>;
  }
}

export const Chinese: LanguageObject = {
  navigator_bar: [
    { name: '首页', id: 'top-background' },
    { name: '关于', id: 'about' },
    { name: '教育', id: 'education' },
    { name: '联系', id: 'contact' },
  ],

  top_background: {
    title: '循梦而行，向阳而生',
    subtitle: '欢迎来到 QQK 的个人网站',
    wrongDayTimeSubtitle: '为什么你在白天使用夜间主题呢？',
    wrongNightTimeSubtitle: '为什么你在夜晚使用白天主题呢？',
    explore: '探索',
  },

  about: {
    meTitle: '关于我',
    meIntroduction: '👋 你好，我是 QQK',
    meContent: [
      "🎓 一个即将毕业的北京邮电大学本科生",
      "🖥️ 一个距离 1000 粉丝还有 958 个的 B 站 UP 主",
      "🧑‍ 一个想成为具有工匠精神的程序员的人",
      "🎱 一个水平只有 0.5 档的台球爱好者",
      "🥳 一个喜欢整活的生活喜剧人",
      "🤯 一个每天不停实现自己想法的人",
    ],
    webTitle: '关于网站',
    webContent: [
      "这是一个基于 Vue3 + Vite + TypeScript 的个人网站",
      "网站还提供了夜间模式和本地化的功能",
      "😜 但切换语言的开关暂时被我藏起来了",
      "并且已经在 Github 上开源",
      "欢迎提出任何 issue 和 star",

    ]
  },

  education: {
    title: '教育经历',
    schoolList: [
      {
        name: "深圳市南山区南头城学校",
        time: "2007.9 - 2013.6",
        introduction: "南头城学校坐落在美丽的中山公园旁著名的南头古城旁，学校前身是清代的“凤岗书院”，至今有 200 多年的历史，是深圳市历史最悠久的学校。学校先后用名“新安县凤岗书院”、“新安县凤岗小学堂”、“宝安县立第一高等小学”、“宝安县莲城小学”、“宝安县九街小学”，1985年学校更名为“深圳市南山区南头城小学”，2021年9月更名为“深圳市南山区南头城学校”。"
      },
      {
        name: "深圳市南山前海学校",
        time: "2013.9 - 2016.6",
        introduction: "前海学校建校以来，在历任校领导的带领下，形成了前海人“人本、和谐、卓越”的拼搏精神、学生能够“四会五能”、“学思笃行”、“虚怀勤勉博文，问道笃行约理”、“实现每个人的奇迹的定制教育”的文化传承，形成了“三精管理”模式，即：精心准备、精准执行、精品呈现。学校是“绿色校园、平安校园、人文校园、书香校园、和谐校园”，也是人才辈出的永恒学园、生命乐园、精神家园。为学生的人生发展奠定坚实的基础，前海人的精神品质深入学生骨髓。"
      },
      {
        name: "深圳市第二高级中学",
        time: "2016.9 - 2019.6",
        introduction: "第二高级中学站在现代教育的制高点，确立“尊重的教育”的办学理念，坚持“张扬生命活力，探求智慧人生，奠基终身发展”的办学方略，熔炼“阳光、进取、平实、包容”的学校精神，全力推进着眼于学生终身发展的全面素质教育和高中课程改革，主动融入现代教育改革大潮。"
      },
      {
        name: "北京邮电大学",
        time: "2019.9 - 2023.6",
        introduction: "北京邮电大学是教育部直属、工业和信息化部共建、首批进行“211工程”建设的全国重点大学，是“985优势学科创新平台”项目重点建设高校，是一所以信息科技为特色、工学门类为主体、工管文理协调发展的多科性、研究型大学，是我国信息科技人才的重要培养基地。2017年，“信息网络科学与技术学科群”和“计算机科学与网络安全学科群”两个学科群进入一流学科建设行列。"
      }
    ],
  },

  contact: {
    title: '与我联系',
    content: '或许我们可以一起做点什么',
  },

  mobile_notice: {
    title: '😲',
    content: [
      '看起来你似乎用了移动设备来访问本网站',
      '但是我还没有做移动端的适配 😞',
      '不过你可以查看我的开发进度',
    ]
  },
}

export const English: LanguageObject = {
  navigator_bar: [
    { name: 'Home', id: 'top-background' },
    { name: 'About',  id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ],

  top_background: {
    title: 'Chase Aspirations, Embrace Radiance',
    subtitle: 'Welcome to QQKdeWebsite',
    wrongDayTimeSubtitle: 'Why are you using dark theme in daytime?',
    wrongNightTimeSubtitle: 'Why are you using light theme in night?',
    explore: 'Explore',
  },

  about: {
    meTitle: 'About Me',
    meIntroduction: '👋 Hello, I am QQK',
    meContent: [
      "🎓 A senior who is about to graduate from Beijing University of Posts and Telecommunications",
      "🖥️ A Bilibili UP who still needs 958 more fans to reach 1000",
      "🧑 A person who wants to be a programmer with a craftsman spirit",
      "🎱 A pool player who is at poor level",
      "🥳 A humorous person who enjoys playing tricks",
      "🤯 A person who is constantly implementing his ideas",
    ],
    webTitle: 'About Website',
    webContent: [
      "This is a personal website based on Vue3 + Vite + TypeScript",
      "The website also provides night mode and localization",
      "😜 But the button to change language is hidden for now",
      "And it has been open sourced on Github",
      "Any issues and stars are appreciated",
    ]
  },

  education: {
    title: 'Education',
    schoolList: [
      {
        name: "Nantoucheng School of Nanshan District, Shenzhen",
        time: "2007.9 - 2013.6",
        introduction: "Nantoucheng School is located in the beautiful Zhongshan Park and the famous Nantou Ancient Town. The predecessor of the school was the \"Fenggang Academy\" in the Qing Dynasty, which has a history of more than 200 years and is the oldest school in Shenzhen. The school has been called \"Xinan County Fenggang Academy\", \"Xinan County Fenggang Primary School\", \"Ba'an County First Higher Primary School\", \"Ba'an County Liancheng Primary School\", \"Ba'an County Jiu Street Primary School\", and renamed \"Nanshan District Nantoucheng Primary School\" in 1985, and renamed \"Nanshan District Nantoucheng School\" in September 2021."
      },
      {
        name: "Qianhai School of Nanshan District, Shenzhen",
        time: "2013.9 - 2016.6",
        introduction: "Since the establishment of Qianhai School, under the leadership of each principal, the spirit of \"people-oriented, harmonious, and outstanding\" has been formed. Students can \"meet four, five, and six\", \"learn to think and practice\", \"be humble and diligent, study hard, and ask questions and practice\", and \"realize the miracle of each person's customized education\". The school is a \"green campus, safe campus, humanistic campus, bookish campus, and harmonious campus\", but also an eternal school of talents, a life paradise, and a spiritual home. To lay a solid foundation for students' lifelong development, the spirit of Qianhai people has been deeply rooted in students' bones."
      },
      {
        name: "Shenzhen Second High School",
        time: "2016.9 - 2019.6",
        introduction: "The Second High School stands at the forefront of modern education, establishes the concept of \"respectful education\", adheres to the strategy of \"emphasizing the vitality of life, exploring the wisdom of life, and laying the foundation of lifelong development\", and melts the \"sunshine, enterprising, plain, and inclusive\" school spirit. It is fully committed to full-quality education and high school curriculum reform that focuses on students' lifelong development."
      },
      {
        name: "Beijing University of Posts and Telecommunications",
        time: "2019.9 - 2023.6",
        introduction: "Beijing University of Posts and Telecommunications is a key university directly under the Ministry of Education, jointly built by the Ministry of Industry and Information Technology, and the first batch of \"211 Project\" construction universities in the country. It is a multi-disciplinary, research-oriented university with information technology as its characteristic, engineering as its main body, and the coordinated development of science, engineering, management and literature. It is an important training base for information technology talents in our country. In 2017, the \"Information Network Science and Technology Discipline Group\" and the \"Computer Science and Network."
      },
    ],
  },

  contact: {
    title: 'Contact',
    content: 'Maybe we can work together',
  },

  mobile_notice: {
    title: '😲',
    content: [
      'It seems that you are using',
      'a mobile phone to visit this website',
      'But I haven\'t adapted it yet 😞',
      'You can view my development progress on',
    ]
  },
}
