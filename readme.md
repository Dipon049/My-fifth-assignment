1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answers:
querySelector() and getElementById() both return a single element, while querySelectorAll() and getElementByClassName() return multiple element.

querySelectorAll() returns a static NodeList while getElementsByClassName() returns a live HTML collection.

2.How do you create and insert a new element into the DOM?
answers:
createElement(), setAttribute(), createTextNode(), appendChild()

3.What is Event Bubbling and how does it work?
answers:
Event bubbling is a type of DOM event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element or document object .

4.What is Event Delegation in JavaScript? Why is it useful?
answers:
Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the target property of the event object.

5.What is the difference between preventDefault() and stopPropagation() methods?
answers:
preventDefault() is used to prevent the default action that belongs to the event, such as preventing a form from submitting event. 
stopPropagation() is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.