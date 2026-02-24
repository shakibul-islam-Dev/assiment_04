answer-1

getElementById == select a single element by its id and return only this id or null
getElementsByClassName === select all the elements with the same name and return HTMLCOllection
querySelector() ===select the first matching element using a css selcetor like class name or id div, p etc
querySelectorAll() ===select multipile element using a css selector.. we can change the input value of type with querySelectorAll()

answer-2

for create a element using createElement() and insert this to useing append(),appendChild(),

answer-3

Event Bubbling is a phase of event propagation.
It describes the order in which event listeners are executed — from the child element up to the window object.
This upward movement of the event is called event bubbling.

answer-4

Event delegation is a pattern where, instead of attaching too many event listeners to individual elements,
we attach a single event listener to a common parent element to listen for events on its child elements.

It is useful because we do not need to add multiple event listeners for every element.

answer-5

preventDefault()
stop the browser's default action
it dosenot stop bubbling
stopPropagation()
stop event bubbling
it dose't stop browser's default action
