const bot = require('../bin/bot')
const config = require('../etc/config')

// 上线
bot.on("system.online", () => {
    bot.sendPrivateMsg(config.admin, `${config.name}已上线`)
})

//自动同意好友申请
bot.on("request.friend.add", (data) => {
	bot.setFriendAddRequest(data.flag);
});

//自动同意群邀请
bot.on("request.group.invite", (data) => {
	bot.setGroupAddRequest(data.flag);
    bot.sendGroupMsg(data.group_id, `大家好，我是${config.botname}`);
});

//监听群员入群事件
bot.on("notice.group.increase", (data) => {
	console.log(data.user_id)
	if (data.user_id == '2084015996') {
		bot.sendGroupMsg(data.group_id, "hello,大家好,我是阿离小可爱,出生于2021年7月16日山东济南。");
	} else {
		bot.sendGroupMsg(data.group_id, data.nickname + " 欢迎您,阿离请你吃棒棒糖🍭🍭");
		bot.sendGroupMsg(data.group_id, "[CQ:image,file=https://qn.qiubit.cc/ac9e4294241e42bcdc2fe455caab57d1.jpg]");
	}
});

// 监听群成员退群事件
bot.on("notice.group.decrease", (data) => {
	console.log(data);
	bot.sendGroupMsg(data.group_id, '江湖路远，我们有缘再见[CQ:face,id=147]');
});

// 群戳一戳
bot.on("notice.group.poke", (data) => {
	console.log(data);
	if (data.user_id === config.qq) {
		bot.sendGroupMsg(data.group_id, '拍坏了[CQ:face,id=18]');
	}
});

// 好友增加
bot.on("notice.friend.increase", (data) => {
	console.log(data);
	bot.sendPrivateMsg(config.admin, data.user_id + ': ' + data.nickname + '已添加' + config.name + '为好友');
	bot.sendLike(data.user_id, 10);
});

// 好友减少
bot.on("notice.friend.decrease", (data) => {
	console.log(data);
	bot.sendPrivateMsg(config.admin, data.user_id + ': ' + data.nickname + '已删除' + config.botname);
});

// 管理员变更
bot.on('notice.group.admin', (data) => {
	console.log(data);
	if (data.self_id === config.qq && data.sub_type === 'admin' && data.set) {
		bot.sendGroupMsg(data.group_id, `管理员变更，${config.name}成为本群管理员，O(∩_∩)O谢谢群主大大~`);
	}
})