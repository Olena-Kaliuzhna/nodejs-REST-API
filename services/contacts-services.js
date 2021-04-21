const { ContactsRepository } = require('../repository');

class ContactsServices {
  constructor() {
    this.repositories = {
      contacts: new ContactsRepository(),
    };
  }

  async getAll() {
    const data = await this.repositories.contacts.getAll();
    return data;
  }

  async getById({ id }) {
    const data = await this.repositories.contacts.getById(id);
    return data;
  }

  async create(body) {
    const data = await this.repositories.contacts.create(body);
    return data;
  }

  async update({ id }, body) {
    const data = await this.repositories.contacts.update(id, body);
    return data;
  }

  async remove({ id }) {
    const data = await this.repositories.contacts.remove(id);
    return data;
  }

  async updateStatus({ id }, body) {
    const data = this.repositories.contacts.updateStatus(id, body);
    return data;
  }
}
module.exports = ContactsServices;
