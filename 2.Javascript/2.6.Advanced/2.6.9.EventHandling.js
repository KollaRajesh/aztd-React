//What is event handling ?
//Event handling is the process of capturing events and executing the code when an event occurs.

//In JavaScript, events are actions or occurrences that happen in the system you are programming, which the system tells you about
// so you can respond to them in some way if desired.

//For example, when the user clicks a button, hovers over an element, submits a form, or presses a key, these are all events.

//JavaScript has a built-in way of handling events. The event handling process is triggered when an event occurs and a callback function is executed.

//The callback function is called an event handler. It is a piece of code that is executed when an event occurs.

//The syntax for event handling is:
    //element.addEventListener(event, function, useCapture);
    //element.removeEventListener(event, function, useCapture);

    //element: The element to attach the event handler to.
    //event: The event to listen for.
    //function: The function to execute when the event occurs.
    //useCapture: A Boolean value that specifies whether the event should be executed in the capturing or bubbling phase. Default is false.

//Example:
    //HTML:
        //<button id="myButton">Click me!</button>
    
    //JavaScript:
        const button = document.getElementById('myButton');
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });

//When the button is clicked, an alert box will appear with the message "Button clicked!".
//There are many types of events in JavaScript, such as click, mouseover, keydown, submit, etc. 
//You can attach event handlers to any of these events using the addEventListener method.
//Event handling is an essential part of web development, as it allows you to create interactive and dynamic web pages that respond to user actions.
//In summary, event handling in JavaScript is the process of capturing events and executing code in response to those events.
    // It allows you to create interactive web pages that respond to user actions such as clicking a button, hovering over an element, or submitting a form.


