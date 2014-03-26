$(document).ready(function() {

    // initializing necessary canvas variables
    var c = document.getElementById('c');
    c.height = ~~(window.innerHeight * .99);
    c.width = ~~(window.innerWidth * .99);

    var ctx = c.getContext("2d");



    ctx.clearRect(0, 0, c.width, c.height);

    ctx.beginPath();
    ctx.strokeStyle = "#9CFF00";

    // determines which way you go
    var direction = "east";
    var direction_x = 1;
    var direction_y = 0;

    // current location on canvs
    var current_x = c.width /3 * 2;
    var current_y = c.height /3;

    // len of each line in pixels
    var l = 8;

    function x(n) {
        if (n == 0)
            return;
        x(n-1);
        turnRight();
        y(n-1);
        moveForward();    
    }

    function y(n) {
        if (n == 0)
            return;
        moveForward();
        x(n-1);
        // turn left here
        turnLeft();
        y(n-1);
    }

    function dragonSpiral(n) {
        moveForward();
        // turnRight();
        // moveForward();
        // turnLeft()
        // moveForward();

        x(n);
    }

    function moveForward() {
        ctx.beginPath();
        ctx.moveTo(current_x, current_y);
       
        ctx.strokeStyle = randColor();
        ctx.lineWidth=3;
        ctx.lineTo(direction_x * l + current_x, direction_y * l + current_y);
        ctx.stroke();

        // new coordinates
        current_x = direction_x * l + current_x;
        current_y = direction_y * l + current_y;
    }


    function turnRight() {
        if (direction=="east") {
            direction = "south";
        }
        else if(direction=="south") {
            direction="west";
        }
        else if (direction=="west") {
            direction="north";
        }
        else if (direction=="north") {
            direction="east";
        }
        direction_coordinates();
    }

    function turnLeft() {
        if (direction=="east") {
            direction = "north";
        }
        else if(direction=="south") {
            direction="east";
        }
        else if (direction=="west") {
            direction="south";
        }
        else if (direction=="north") {
            direction="west";
        }
        direction_coordinates();  
    }

    function direction_coordinates() {
        if (direction=="east") {
            direction_x = 1;
            direction_y = 0;
        }
        else if(direction=="south") {
            direction_x = 0;
            direction_y = 1;
        }
        else if (direction=="west") {
            direction_x = -1;
            direction_y = 0;
        }
        else if (direction=="north") {
            direction_x = 0;
            direction_y = -1;
        }
    }

    function randColor() {
        r = ((Math.random() * 127) + 127).toString(16).substring(0,2);
        g = ((Math.random() * 127) + 127).toString(16).substring(0,2);
        b = ((Math.random() * 127) + 127).toString(16).substring(0,2);
        color = "#" + r + g + b;
        return color;   
    }

    dragonSpiral(12);
});

