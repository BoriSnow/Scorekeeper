exports.run = (client, message, args) => {
  let apuser;//who we want to add points to
  try {
    apuser = args[0].replace(/\D/g, "");
  }
  catch (err) {
    console.log("");
  }
  let pnumber = args[1]; //parse the number of points to give
  let score = client.getScore.get(apuser, message.guild.id);
  if (!message.member.roles.cache.has('803145290226860113')) message.reply("Invalid Permissions!");

  else {
    pnumber = parseInt(pnumber);
  if (isNaN(pnumber)){
    message.reply("Please input a **numerical value** for the number of points to give this user!");
  }
  else{
      if(!score) {
        score = { id: `${message.guild.id}`, user: apuser, guild: message.guild.id, points: pnumber, level: 1}
      }
      else {
        message.channel.send("Old point score: " + score.points);
        score.points = score.points + pnumber;
        client.setScore.run(score);
        message.channel.send("New point score: " + score.points);
      }
  }}
}
