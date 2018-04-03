/*

    Program Name: Recipe Display Application
    
    Author: Noah Abramowitz
    
    Date: April 3rd, 2018
    
    Filename: myRecipe.js
    
*/

/* global $ */
/* global toggle */
/* global slow */

//displays the next element after the current target 

    function display(event) {
        
        $ (event.currentTarget).next().fadeIn("fast");
        
    }//end of display
    
//attach event listener to h3 elements to invoke display function when clicked 

    //$("h3").click(display);
    
//displays and animates the next element after the current target 

    function display2(event) {

        $ (event.currentTarget).siblings().animate( {clone: 'toggle'}, "fast"); 
        
    } //end of display2
    
//attach event listener to h3 elements to invoke display function when clicked 

    $("h3").click(display2);
    
//change the background color h3 element when mouse hovers over it 

    $("h3").hover(function(){
        
        $(this).css("background-color", "gray"); 
        }, function()   { 
        $(this).css("background-color", "light blue");
    
    });
    
//hover() will trigger display2 method each time mouse hovers over header 
    
    $("h3").hover(display2);