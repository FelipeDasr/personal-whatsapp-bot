
module.exports = (state, client) => {

  switch(state){

    case "UNLAUNCHED":
      client.forceRefocus()
      break

    case "CONFLICT":
      setTimeout(() => client.forceRefocus(), 180000) //3 minutes
      break

    case "UNPAIRED":
      console.log("LOGGED OUT!!!!")
      break

  }
}