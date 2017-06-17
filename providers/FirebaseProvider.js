'use strict'
const Ioc = require('adonis-fold').Ioc
const ServiceProvider = require('adonis-fold').ServiceProvider

class FirebaseProvider extends ServiceProvider {

  * register () {

    this._bindFirebase()

  }

  _bindFirebase () {

    this.app.singleton('Codedigest/Src/Firebase', (app) => {
      const Firebase = require('../src/Firebase')
      // initialize firebase with config from config/firebase.js
      const Config = app.use('Adonis/Src/Config')

      var config = {
        apiKey: Config.get('firebase.apiKey'),
        authDomain: Config.get('firebase.authDomain'),
        databaseURL: Config.get('firebase.databaseURL'),
        storageBucket: Config.get('firebase.storageBucket')
      }

      return Firebase.initialize(config)
    })

  }

  * boot () {

    // Create Alias to Firebase
    Ioc.alias('Firebase', 'Codedigest/Src/Firebase')

    // add named middleware
    this._addNamedMiddleware()
    // add global middleware
    this._addGlobalMiddleware()

  }

  _addGlobalMiddleware () {
    const Middleware = this.app.use('Adonis/Src/Middleware')
  }

  _addNamedMiddleware () {
    const Middleware = this.app.use('Adonis/Src/Middleware')
  }

}

module.exports = FirebaseProvider
