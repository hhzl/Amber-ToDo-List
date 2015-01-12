Amber-ToDo-List
===============

This is a ToDo List Application in Amber Smalltalk.
It was created by [Rodrigo Bistolfi](https://github.com/rbistolfi/Amber-Todo) and others for Amber version 0.9.1.
It has been updated for Amber version 0.14.1 by Hannes Hirzel.


This project is an [Amber Smalltalk](http://amber-lang.net/)  example. 


Tools needed
------------

1. A web browser with reasonably good support for HTML5 canvas.
2. git, on Windows [Git for Windows](msysgit.github.io)
3. [nodejs](http://www.nodejs.org/). This will give you the node package manager `npm` as well.
4. A global install of the [`amber-cli`](http://amber-lang.net/) [npm](http://npmjs.org/) package
5. A global install of the [`bower`](http://bower.io/) client side package manager in order to install the dependencies
6. A global install of the [`grunt-cli`](http://gruntjs.com/) task runner which is used as the command line build system 

The `amber`, `bower` and `grunt-cli` packages can be installed with the following command:

    npm install --global amber-cli bower grunt-cli

or as short form:

    npm i -g amber-cli bower grunt-cli
    

Reference: http://docs.amber-lang.net/js-glossary.html


## Getting Started

Bring the project alive (for example after `git clone`) with:

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
    
- `npm install` installs components into node_modules; used for recompiling with ``grunt``
   on the command line.
- `bower` is used to install the web components of Amber
- `amber` is used to run a small local web server 


Application structure
---------------------

The application has three classes

- ToDo (for a ToDo item)
- ToDoList (the widget containing all ToDo items)
- ToDoStorage (a wrapper around `localstorage`, another persistency 
  solution might be used later. 
  Every change in the ToDo List is stored immediately)



Note
----

The ToDo list items are stored in the `localStorage` of your browser. When you reload the ToDo List web page they will be reloaded. 

To check manually what is stored execute 

    localStorage getItem: 'TodoList' 
    
in an Amber workspace.    

To completely remove what is there execute

    localStorage removeItem: 'TodoList'
    
