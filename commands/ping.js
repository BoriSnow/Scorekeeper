exports.run = (client, message, args) => {
  message.channel.send({ content: 'Ping?'})
  .then(message => {
    message.edit({ content: `Pong! (took: ${Date.now() - message.createdTimestamp}ms)`});
  });
}
