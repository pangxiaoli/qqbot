// const config = require('./etc/config')
// const getCommand = require('./bin/getcommand')

// const msg = {
//     post_type: 'message',
//     message_id: 'OD37s5bd5f4AAMuWCLhH3GHDXyYB',
//     user_id: 2531124734,
//     time: 1640193830,
//     seq: 52118,
//     rand: 146294748,
//     font: '宋体',
//     message: [ { type: 'text', text: '阿离' } ],
//     raw_message: '阿离',
//     message_type: 'group',
//     sender: {
//       user_id: 2531124734,
//       nickname: 'qiubit',
//       card: '',
//       sex: 'unknown',
//       age: 0,
//       area: '',
//       level: 1,
//       role: 'member',
//       title: ''
//     },
//     group_id: 943586227,
//     group_name: '测试',
//     block: false,
//     sub_type: 'normal',
//     anonymous: null,
//     atme: false,
//     atall: false,
// }

// console.log(getCommand(msg).callme);

const birthWishes = require('./etc/birthWishes')
console.log(birthWishes[Math.round(Math.random() * (birthWishes.length - 1))])