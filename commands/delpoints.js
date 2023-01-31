exports.run = (client, message, args) => {
  let dpuser;//who we want to remove points from
  try {
    dpuser = args[0].replace(/\D/g, "");
  }
  catch (err) {
    console.log("");
  }
  let pnumber = args[1]; //parse the number of points to remove
  let score = client.getScore.get(dpuser, message.guild.id);
  if (!message.member.roles.cache.has('803145290226860113')) message.reply("Invalid Permissions!");

  else {
  pnumber = parseInt(pnumber);
  if (isNaN(pnumber)){
    message.reply("Please input a **numerical value** for the number of points to take from this user!");
  }

  else {
      if(!score) {
        score = { id: `${message.guild.id}`, user: dpuser, guild: message.guild.id, points: pnumber, level: 1}
      }
      else {
        message.channel.send("Old point score: **" + score.points + "**");
        score.points = score.points - pnumber;
        client.setScore.run(score);
        message.channel.send("New point score: **" + score.points + "**");
        
      }
  }}
}
