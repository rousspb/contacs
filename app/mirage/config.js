export default function() {
  this.namespace = 'api';
  // this.timing = 400;

  /*
  Route shorthand cheatsheet
  */
  this.get('/contacts');
  this.get('/contacts/:id');
  this.delete('/contacts/:id');
  this.post('/contacts');
  this.put('/contacts/:id');
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
