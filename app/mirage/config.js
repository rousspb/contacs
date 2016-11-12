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
  this.patch('/contacts/:id');
}
