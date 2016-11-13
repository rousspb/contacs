export default function() {
  this.namespace = 'api';
  // this.timing = 400;

  /*
  Route shorthand cheatsheet
  */
  // this.get('/contacts');
  // this.get('/contacts/:id');
  // this.delete('/contacts/:id');
  // this.post('/contacts');
  // this.put('/contacts/:id');
  // this.get('/notes');
  // this.post('/notes');
  this.get('/contacts', (schema) => {
    return {
      contacts: schema.db.contacts
    };
  });
  this.get('/contacts/:id', (schema, req) => {
    let id = req.params.id;
    return {
      contact: schema.db.contacts.find(id)
    };
  });
  this.delete('/contacts/:id');
  this.post('/contacts', (schema, req) => {
    let record = JSON.parse(req.requestBody).contact;
    let contact = schema.db.contacts.insert(record);
    return {
      contact
    };
  });
  this.put('/contacts/:id', (schema, req) => {
    let id = req.params.id;
    let record = JSON.parse(req.requestBody).contact;
    let contact = schema.db.contacts.update(id, record);
    return {
      contact
    };
  });
  this.get('/notes');
  this.post('/notes');
  // this.get('/notes?', (schema, req) => {
  //   let id = JSON.parse(req.queryParams.contact);
  //   let results = schema.db.notes.where({ 'contact': id });
  //   return {
  //     data: results
  //   };
  // })
  // this.get('/notes');
}
