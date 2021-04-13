const { v4: uuid } = require('uuid')
const db = require('../db')
class ContactsRepository {
  getAll() {
    return db.get('contacts').value()
  }

  getById(id) {
    console.log('id', id)
    const dbR = db.get('contacts').find({ id }).value()
    console.log('db', dbR)
    return dbR
  }

  create(body) {
    const id = uuid()
    const record = {
      id,
      ...body,
    }
    db.get('contacts').push(record).write()
    console.log('record', record)
    return record
  }

  update(id, body) {
    const record = db.get('contacts').find({ id }).assign(body).value()
    db.write()
    return record
  }

  remove(id) {
    const [record] = db.get('contacts').remove({ id }).write()
    return record
  }
}
module.exports = ContactsRepository
