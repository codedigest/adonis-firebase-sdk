'use strict'
const FirebaseSDK = require('firebase')

class Firebase {

  initialize(config) {

    FirebaseSDK.initializeApp(config)

  }

}

module.exports = new Firebase
