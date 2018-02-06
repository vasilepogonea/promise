function makeMoney(knowledge){
  console.log('making money...')
  return new Promise( function(succes, reject){
    setTimeout(function(){knowledge > 10 ? succes({money: knowledge*10}) : reject('I have not yet made money')}, 2000)
  })
}

function designProject(money){
  console.log('design process...  money: '+ money)
  return new Promise( function(succes, reject){
    setTimeout(function(){
    money > 110 ? succes({proiect: 'project done'}) : reject("not enougth money")
  } ,2000)
  })
}

function buildHouse(answer){
  console.log('building house...')
  setTimeout(function(){
    answer.proiect === 'project done' ? console.log('super! house done!') : console.log("we don't have the project")
  } ,2000)
}

makeMoney(12)
.then((message)=>{console.log('earn money: ' + message.money); return message.money})
.then(designProject)
.then(buildHouse)
.catch((error)=>{console.log(error)})

/*
makeMoney(12, function(message){
    console.log('am facut: ' + message.bani)
    makeProject(message.bani, 
      function(proiect){
        console.log(proiect.proiect)
        constructHouse(1000, 
          function(message){console.log(message)}, 
          function(error){console.log(error)}
        )
      }, 
      function(error){console.log(error)}
    )
  }, 
  function(error){console.log(error)}
)*/