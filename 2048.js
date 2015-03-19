/**
 * Created by contract on 3/16/15.
 */
var matrix =[];
for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        matrix[0] = ["*","*"];
        matrix[1] = ["*","*"];
        matrix[2] = ["*","*"];
        matrix[3] = ["*","*"];

    }
};
// 37 left arrow
//38 up arrow
// 39 right arrow
//40 down arrow
    var gameStarted = false;
    $(document).keydown(function (e) {
    if (e == undefined) {
        e = window.event;
    }
    switch (e.which) {
        case 37:
            if (!gameStarted) {
               startGame();
               Display();
              break;
            }
            else{
                for (var i = 3; i >=0; i--) {
                    for (var j = 3; j>0 ; j--) {
                        var k = j-1;
                        if (Grid[i][j] === Grid[i][k] || Grid[i][k] === 0) {
                            Grid[i][k] = Grid[i][k] + Grid[i][j];
                            Grid[i][j] = 0;
                        }
                    }
                }
                if (Check()) {
                    // generate rand num
                    addNumberToGrid();
                }
                else{
                    alert("no available place in the grid");
                }
                Display();

                break;
            }
    case 38:
            if (!gameStarted) {
                startGame();
                Display();
            }
            else{
                for (var i = 3; i >=0; i--) {
                    for (var j = 3; j>0 ; j--) {
                        var k = j-1;
                        if (Grid[j][i] === Grid[k][i] || Grid[k][i] === 0) {
                            Grid[k][i] = Grid[k][i] + Grid[j][i];
                            Grid[j][i] = 0;
                        }
                    }
                }
                if (Check()) {
                    // generate rand num
                    addNumberToGrid();
                }
                else{
                    alert("no available place in the grid");
                }
                Display();

                break;
            }
        case 39:
            if (!gameStarted) {
                 startGame();
                 Display();
                break;
            }
            else{
                for (var i = 0; i <=3 ; i++) {
                    for (var j = 0; j < 3 ; j++) {
                        var k = j+1;
                        if (Grid[i][j] === Grid[i][k] || Grid[i][k] === 0) {
                            Grid[i][k] = Grid[i][k] + Grid[i][j];
                            Grid[i][j] = 0;
                        }
                    }
                }
                if (Check()) {
                    // generate rand num
                    addNumberToGrid();
                }
                else{
                    alert("no available place in the grid");
                }
                Display();
                break;
            }
        case 40:
            if (!gameStarted) {
                startGame();
                Display();
                break;
            }
            else{
                for (var i = 0; i <=3 ; i++) {
                    for (var j = 0; j < 3 ; j++) {
                        var k = j+1;
                        if (Grid[j][i] === Grid[k][i] || Grid[k][i] === 0) {
                            Grid[k][i] = Grid[k][i] + Grid[j][i];
                            Grid[j][i] = 0;
                        }
                    }
                }
                if (Check()) {
                    // generate rand num
                    addNumberToGrid();
                }
                else{
                    alert("no available place in the grid");
                }
                Display();
                break;
            }
    };
        e.preventDefault();

});

function startGame()
{
    if (!gameStarted) {
        gameStarted = true;
        //pick 2 random places in matrix and add 2 or 4
        var randPlace1 = (Math.floor(Math.random() * 4));
        var randPlace2 = (Math.floor(Math.random() * 4));
        Grid[randPlace1][randPlace2] = 2;
        var placed = false;
        while (!placed) {
            randPlace1 = (Math.floor(Math.random() * 4));
            randPlace2 = (Math.floor(Math.random() * 4));
            if (Grid[randPlace1][randPlace2] === 0) {
                Grid[randPlace1][randPlace2] = 2;
                placed = true;
            }
        }
        var num = "";
    }
}
var count = 0;
function Display(){
   // document.clear();
    document.body.innerHTML = '';

    var str = "";
    for(var i=0;i<Grid.length;i++){
        str+='<br>';
        for(var j=0;j<Grid.length;j++){
            str+=Grid[i][j];
            str+='    ';
        }
       str+='<br>';
        document.body.innerHTML = str;
    }
};

function Check(){
    var found = 0;
    for(var i=0;i<Grid.length;i++){
        for(var j=0;j<Grid.length;j++){
            if(Grid[i][j]===2048){
                alert("reached 2048");
            }
            if(Grid[i][j] ===0){
                found = 1;
            }
        }
    }
    return found;
};

function addNumberToGrid(){
    var placed = false;
    var randPlace1;
    var randPlace2;
    while(!placed){
        randPlace1 = (Math.floor(Math.random() * 4));
        randPlace2 = (Math.floor(Math.random() * 4));
        if(Grid[randPlace1][randPlace2] ===0){
            Grid[randPlace1][randPlace2] = 2;
            placed=true;
        }
    }
};

