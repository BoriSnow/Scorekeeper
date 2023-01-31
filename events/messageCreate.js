module.exports = (client, message) => {
  if (message.author.bot) return;
  let score;
  let channel = message.channel.id;
  //let uid = message.author.id

  if (message.guild) {

    if (message.content.indexOf(client.config.prefix) == 0) {
      const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const cmd = client.commands.get(command);

      if (message.author.id == "223843428834869248") {
        cmd.run(client,message,args);
        return;
      }

      else if (channel == "818196381469900860") //checks if the command is run in the bot channel
      {
        cmd.run(client, message, args);
      }
      else return;
    }
    else {
      score = client.getScore.get(message.author.id, message.guild.id);
      if (!score) {
        score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
      }
      score.points = score.points + 15;
      const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
      if(score.level < curLevel) {
        score.level++;
        message.reply(`Congratulations! You've reached level ` + curLevel);
      }
      client.setScore.run(score);
      switch(curLevel){
        case 3:
        if (message.member.roles.cache.has('803146676411170826')){
          break;
        }
        else {
          message.member.roles.add(['803146676411170826']);
          break;
        }
        case 5:
        if (message.member.roles.cache.has('803146708899987477')){
          break;
        }
        else {
          message.member.roles.add(['803146708899987477']);
          break;
        }
        case 10:
        if (message.member.roles.cache.has('803146735990865941')){
          break;
        }
        else {
          message.member.roles.add(['803146735990865941']);
          break;
        }
        case 20:
        if (message.member.roles.cache.has('803146902085697587')){
          break;
        }
        else {
          message.member.roles.add(['803146902085697587']);
          break;
        }
        case 35:
        if (message.member.roles.cache.has('818207072360333332')){
          break;
        }
        else {
          message.member.roles.add(['818207072360333332']);
          break;
        }
        case 50:
        if (message.member.roles.cache.has('803146823832174612')){
          break;
        }
        else {
          message.member.roles.add(['803146823832174612']);
          break;
        }
      }
    }
  }
  else return;
}
