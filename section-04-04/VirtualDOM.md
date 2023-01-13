# Virtual DOM
## Vue Compiling the Template
```html
<!-- 1 -->
<h1 class="blue">
    Hello World
</h1>

<!-- 2 -->
<h1 class="blue">
    <span>
        Hello World
    </span>
</h1>
```
Vue Compiles to  
```JavaScript
// 1
{
    tag: 'h1',
    attributes: {
        class: 'blue'
    },
    content: 'Hello World'
}

// 2
{
    tag: 'h1',
    attributes: {
        class: 'blue'
    },
    content: [
        {
            tag: 'span',
            attributes: {},
            content: 'Hello World'
        }
    ]
}
```
## Easier to manage and provides a performance boost
- The virtual DOM is a JavaScript object.  
- It is a lightweight copy of the actual DOM.  
- It's faster to perform comparisons and updates on the Virtual DOM than it is to perform them on the actual DOM.  

## Updates using the DOM
- DOM functions return unnecessary properties and methods, creates a lot more overhead.  

## Updates using the Virtual DOM
- It'll perform what's called a 'patch' once the process of checking each element finished.  
- The entire element won't be overwritten, it does this process in bulk, will apply changes at once.  
- Will update what's necessary, won't update the whole template.  
- Whenever occur data changes, virtual DOM will also get updated.  
