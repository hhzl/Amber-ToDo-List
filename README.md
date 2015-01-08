Amber-ToDo-List
===============

This is a ToDo List Application in Amber Smalltalk.
It was created by [Rodrigo Bistolfi](https://github.com/rbistolfi/Amber-Todo) and others for Amber version 0.9.1.
It has been updated for Amber version > 0.12.4 by Hannes Hirzel.


Prerequisites
-------------

- You have installed command line [Amber Smalltalk](http://docs.amber-lang.net/installing-amber.html) 
  (amber-cli)
- Follow the instructions to install the `bower` package manager on the same 
  [instructions page](http://docs.amber-lang.net/overview/installing.html).
    

The tools
---------

- `bower` is used to install the web components of Amber
- `amber` is used to run a small local web server 


Instructions
------------

1. Download and upzip or fork and clone this repository.
2. Open the directory where `index.html` and `README.md` are located.
3. Open a terminal window and execute `bower install`
4. Then execute `amber serve`
5. Point your web browser to `localhost:4000`.

Application structure
---------------------

The application has three classes

- ToDo (for a ToDo item)
- ToDoList (the widget containing all ToDo items)
- ToDoStorage (a wrapper around `localstorage`, another persistency 
  solution might be used later. 
  Every change in the ToDo List is stored immediately)


Log of upgrade activities 
-------------------------

The ToDo list application by Rodrigo Bistolfi works with Amber version 0.9.1. 
The following changes were done to upgrade it to Amber version 0.12.4

1. Create a new repository and initialize it with `amber init`.
   Use `'Examples-ToDo'` as the package name.
2. Port the `TodoList.st` file and the CSS rules of [`index.html`](https://github.com/rbistolfi/Amber-Todo/blob/master/index.html) of R. Bistolfis version. 
   In version 0.9.1 [`TodoList.st`](https://github.com/rbistolfi/Amber-Todo/blob/master/st/TodoList.st) is in the same folder as the core classes. 
   In 0.12.4 the ToDo List app is in a separate folder `src` and all the rest of Amber
   is in a subdirectory called `bower_components`.  This subdirectory is populated by the
   `bower install` command. The new solution makes it much easier to maintain the application code.
3. In a text editor manually replace the package name with `'Examples-ToDo'` in file `TodoList.st`.
4. File in `TodoList.st` in the Workspace of the first Amber IDE. The second IDE, Helios, does not have
   this option yet.
5. In method `ToDoStorage>>getArray` change `smalltalk readJSON:` to `SmalltalkImage current readJSObject:`.
6. In method `ToDoStorage>>save` change `asJSON` to `asJSONString`.


Note
----

The ToDo list items are stored in the `localStorage` of your browser. When you reload the ToDo List web page they will be reloaded. 

To check manually what is stored execute 

    localStorage getItem: 'TodoList' 
    
in an Amber workspace.    

To completely remove what is there execute

    localStorage removeItem: 'TodoList'
    
