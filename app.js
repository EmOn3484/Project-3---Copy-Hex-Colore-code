/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 */

// Steps

// Step 1 - create onload handler
window.onload =()=>{
    main();
}
 function main() {
    const root = document.getElementById('root');
    const cngBtn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');

    cngBtn.addEventListener('click',function () {
        const bgColor = generateHEXColor ();
        root.style.backgroundColor =bgColor;
        output.value = bgColor;
    })
    copyBtn.addEventListener('click',function(){
        navigator.clipboard.writeText(output.value);
    })


 }   
        
    
    // step 2 - random color generator function
    function generateHEXColor () {
        const red =Math.floor(Math.random()*255)
        const green = Math.floor(Math.random()*255)
        const blue = Math.floor(Math.random()*255)
    
       return`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }

// step 2 - random color generator function


// step 3 - collect all necessary references

// step 4 - handle the change button click event

// step 5 - handle the copy button click event
