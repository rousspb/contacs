# Contacts

This applications shows the contact list and linked notes by each one.
The exercice is using ember data with mirage to populate the list and the contact info. As the notes by each contact.
Also, this application was built using the pods structure https://ember-cli.com/user-guide/#using-pods.

There are one main route called contacts to show the list of all contacts, and two nested routes:
view and notes.
* View: Shows the information detail by each contact. Here, you can edit, and remove a contact. This view has a link to change the screen to see the notes.
* Notes: List of notes. Here you can read, edit and remove a note.

## Extra addons:
* ember-cli-page-object: The ember-cli-page-object addon makes it easy to create page objects for your acceptance and integration tests.
* ember-cli-sass: Uses libsass to preprocess your ember-cli app's files and provides support for source maps and include paths
* ember-component-css: Allows you to specify a component-specific style sheet inside of component pod directories in an app, addon, engine, or in-repo addon
* ember-inputmask: Provides an general use input masking component using the jquery.inputmask plugin, along with a set of commonly used masks
* ember-pikaday: It gives you a datepicker input component that can be used in your Ember.js application. Pikaday and Moment.js are used in the background so they are added as Bower dependencies to your application.
* ember-validations: Validations for mandatory fields based on a model or an object.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/rousspb/contacs.git`
* change into the new directory
* npm install -g ember-cli (if you don't have it yet).
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Use `ember s`

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
