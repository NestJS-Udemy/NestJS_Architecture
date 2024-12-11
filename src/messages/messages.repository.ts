import { promises as fs } from 'fs';

export class MessageRepository {
  async findOne(id: string) {
    const contents = await fs.readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await fs.readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await fs.readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await fs.writeFile('messages.json', JSON.stringify(messages));
  }
}
