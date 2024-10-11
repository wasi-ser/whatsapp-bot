const { commands, bot } = require('./plugins');
module.exports = {
 Base: require('./_base'),
 Message: require('./_message'),
 ReplyMessage: require('./_reply'),
 getSession: require('./session'),
 GroupManager: require('./groups'),
 GreetingsHandler: require('./misc/group'),
 commands,
 bot,
};
