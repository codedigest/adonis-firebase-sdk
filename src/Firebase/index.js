'use strict'
const FirebaseSDK = require('firebase')

class Firebase {

  initialize(config) {
    return FirebaseSDK.initializeApp(config)
  }

}

module.exports = new Firebase
