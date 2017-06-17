'use strict'
const FirebaseSDK = require('firebase')

class Firebase {

  initializeApp(config) {

    FirebaseSDK.initializeApp(config)

  }

}

module.exports = new Firebase
