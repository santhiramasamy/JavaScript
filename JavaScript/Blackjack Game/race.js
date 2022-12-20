var player1 = 105
var player2 = 110

function getfaster()
{
    if(player1<player2)
    {
        return player1
    }

    else if(player2<player1)
    {
        return player2
    }
    else{
        return player1
    }
}

var fast = getfaster()
console.log(fast)