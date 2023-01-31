exports.run = (client, message, args) => {
  let user;
  user = args[0];
  let score;
  if(args == ""){ //self level check
    score = client.getScore.get(message.author.id, message.guild.id);
    if (!score) {
      message.channel.send("Is this really your first message? There's no info about you! Type in another channel and run this command again :)");
    }
    else {
      let nextLev = score.level + 1;
      let point = Math.floor((nextLev/0.1) * (nextLev/0.1) - score.points);
      message.reply(`Your current score is **${score.points}** and your level is **${score.level}**. You need **` + point + `** points to reach the next level!`)
    }
  }

  else {//check the level of another user
    score = client.getScore.get(user, message.guild.id);
    if (!score) {
      message.channel.send("There is no info on this user!");
    }
    else {
      let nextLev = score.level + 1;
      let point = Math.floor((nextLev/0.1) * (nextLev/0.1) - score.points);
      user = client.users.fetch(user)
      .then(user => {
        message.channel.send(`**${user.username}**\'s current score is **${score.points}** and their level is **${score.level}**.`);
      })
      .catch(error => {
        message.channel.send("Error fetching user!");
      })
    }
  }
}
