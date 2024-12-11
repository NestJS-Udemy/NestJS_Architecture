import { promises as fs } from 'fs';

export class MessageRepository {
  async findOne(id: string) {
    const contents = await fs.readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {}

  async create(message: string) {}
}
