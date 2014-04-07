#DOM

-What is a Node?

A node is a type of object that is often used to represent a single item in a linked list, a tree or a graph data structure.  In our case, we can use nodes to represent the structure of an HTML document.

Each "node" contains the following information:

-a pointer to its parent node
-a collection of pointers to its children nodes
-a series of key-value pairs known as "attributes"
-a 'tag name' defining the type of node it is.

What are the nodes in the example below?

```
<div id='container'>
	<p id='sentence_1' class='sentence'>I am a sentence.</p>
	<p id='sentence_2' class='sentence'>I am another sentence.</p>
</div>

```

##Window Object

```window.onload = function(){}```


##Document Object

```document.getElementById()```

```document.getElementsByClassName()```

```document.createElement(tagNameAsString)```

(where is this element??!!?)


##DOM Node/Element Objects

```an_element.innerHTML```

```an_element.appendChild()```

