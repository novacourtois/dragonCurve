$(document).ready(function() {

    // initializing necessary canvas variables
    var c = document.getElementById('c');
    var ctx = c.getContext("2d");

    var direction;
    var direction_x;
    var direction_y;
    var current_x;
    var current_y;
    var l;

    function init() {

        c.height = ~~(window.innerHeight * .99);
        c.width = ~~(window.innerWidth * .99);
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.lineWidth=3;

        // determines which way you go
        direction = "east";
        direction_x = 1;
        direction_y = 0;

        // current location on canvs
        current_x = c.width /3 * 2;
        current_y = c.height /3;

        // len of each line in pixels
        l = 8;

        dragonSpiral(12);
    }

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
        turnLeft();
        y(n-1);
    }

    function dragonSpiral(n) {
        moveForward();
        x(n);
    }

    function moveForward() {
        ctx.beginPath();
        ctx.moveTo(current_x, current_y);
       
        ctx.strokeStyle = randColor();
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

    init();

    $(window).resize(function(){
        init();
    });
});

