const stateTreatment = require('./stateTreatment')
const msgTreatment = require('./msgTreatment')
const options = require('./options')
const wa = require('@open-wa/wa-automate');

wa.create(options)
  .then(client => {
    start(client)
  })
  .catch(e => {
    console.error(e)
  })

function start(client) {

  client.onStateChanged(state => {
    stateTreatment(state, client)
  })

  client.onAnyMessage(async msg => {
    msgTreatment(msg, client)
  })
}