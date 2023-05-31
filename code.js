
function game(userCh){
    userCh = userCh.toLowerCase()
    let computer = Math.round(Math.random() * 3)
    let computerChoice = ""
    let Even = 'Even'
    let ComputerW = 'Computer Wins'
    let UserW = 'User Wins'
    

    if(computer === 0){
    computerChoice = 'scissors'
    } else if(computer === 1){
    computerChoice = 'rock'
    } else {
    computerChoice = 'paper'
    }

    if(computerChoice == 'scissors' && userCh == 'scissors'){
        console.log(Even)
    }else if (computerChoice == 'scissors' && userCh == 'rock') {
        console.log(UserW)
    }else if (computerChoice == 'scissors' && userCh == 'paper'){
        console.log(ComputerW)
    }

    if(computerChoice == 'rock' && userCh == 'rock'){
        console.log(Even)
    }else if(computerChoice == 'rock' && userCh == 'scissors'){
        console.log(ComputerW)
    }else if(computerChoice == 'rock' && userCh == 'paper'){
        console.log(UserW)
    }

    if(computerChoice == 'paper' && userCh == 'paper'){
        console.log(Even)
    }else if(computerChoice == 'paper' && userCh == 'rock'){
        console.log(ComputerW)
    }else if(computerChoice == 'paper' && userCh == 'scissors'){
        console.log(UserW)
    }
    
}


game('rock')

