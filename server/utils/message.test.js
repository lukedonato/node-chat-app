const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let from = 'bobby';
    let text = 'goodbye';
    let newMessage = generateMessage(from, text);
    expect(newMessage).toInclude({from, text});
    expect(newMessage.createdAt).toBeA('number');
  })
});
