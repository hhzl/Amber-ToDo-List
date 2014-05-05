define("Examples/Examples-ToDo", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Web", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Examples-ToDo');
smalltalk.packages["Examples-ToDo"].transport = {"type":"amd","amdNamespace":"Examples"};

smalltalk.addClass('Todo', globals.Widget, ['isDone', 'text', 'id', 'onTodoChanged', 'onDeleteClicked'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'testing',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._id();
$ctx1.sendIdx["id"]=1;
$1=_st($2).__eq(_st(aTodo)._id());
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{aTodo:aTodo},globals.Todo)})},
args: ["aTodo"],
source: "= aTodo\x0a\x09^ self id = aTodo id",
messageSends: ["=", "id"],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@id"];
return $1;
},
args: [],
source: "id\x0a\x09^ id",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "id:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@id"]=aString;
return self},
args: ["aString"],
source: "id: aString\x0a\x09id := aString",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Todo.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@isDone"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Todo)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09isDone := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "isDone",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@isDone"];
return $1;
},
args: [],
source: "isDone\x0a\x09^ isDone",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "isDone:",
protocol: 'accessing',
fn: function (aBool){
var self=this;
self["@isDone"]=aBool;
return self},
args: ["aBool"],
source: "isDone: aBool\x0a\x09isDone := aBool.",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "onDeleteClickedDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onDeleteClicked"]=aBlock;
return self},
args: ["aBlock"],
source: "onDeleteClickedDo: aBlock\x0a\x09onDeleteClicked := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "onTodoChangedDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@onTodoChanged"]=aBlock;
return self},
args: ["aBlock"],
source: "onTodoChangedDo: aBlock\x0a\x09onTodoChanged := aBlock",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var input,delete_;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$6,$5,$4,$7,$8,$9,$2,$10;
$1=_st(html)._li();
_st($1)._id_(self._id());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._input();
_st($3)._type_("checkbox");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
self._toggleIsDone();
_st(self["@onTodoChanged"])._value_(self);
$ctx3.sendIdx["value:"]=1;
$6=_st(input)._asJQuery();
$ctx3.sendIdx["asJQuery"]=1;
$5=_st($6)._next();
$ctx3.sendIdx["next"]=1;
return _st($5)._toggleClass_("done");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
input=$4;
input;
$7=_st(html)._span();
$ctx2.sendIdx["span"]=1;
_st($7)._with_(self["@text"]);
$ctx2.sendIdx["with:"]=2;
$8=_st(html)._span();
_st($8)._with_("  [x]");
$9=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@onDeleteClicked"])._value_(self);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
delete_=$9;
return delete_;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$10=self["@isDone"];
if(smalltalk.assert($10)){
_st(input)._at_put_("checked","checked");
_st(_st(_st(input)._asJQuery())._next())._addClass_("done");
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,input:input,delete_:delete_},globals.Todo)})},
args: ["html"],
source: "renderOn: html\x0a\x09| input delete |\x0a\x09html li\x0a\x09\x09id: self id;\x0a\x09\x09with: [\x0a                  input := html input\x0a                  \x09type: 'checkbox';\x0a                  \x09onClick: [\x0a                          self toggleIsDone.\x0a                          onTodoChanged value: self. \x0a                          (input asJQuery next) toggleClass: 'done' ].\x0a\x09\x09html span with: text .\x0a                delete := html span\x0a                  with: '  [x]';\x0a                  onClick: [ onDeleteClicked value: self ]].\x0a\x09isDone ifTrue: [ \x0a          input at: 'checked' put: 'checked'.\x0a          (input asJQuery next) addClass: 'done'].",
messageSends: ["id:", "li", "id", "with:", "type:", "input", "onClick:", "toggleIsDone", "value:", "toggleClass:", "next", "asJQuery", "span", "ifTrue:", "at:put:", "addClass:"],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@text"];
return $1;
},
args: [],
source: "text\x0a\x09^ text",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@text"]=anObject;
return self},
args: ["anObject"],
source: "text: anObject\x0a\x09text := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleIsDone",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._isDone_(_st(self["@isDone"])._not());
return self}, function($ctx1) {$ctx1.fill(self,"toggleIsDone",{},globals.Todo)})},
args: [],
source: "toggleIsDone\x0a\x09self isDone: isDone not",
messageSends: ["isDone:", "not"],
referencedClasses: []
}),
globals.Todo);


smalltalk.addMethod(
smalltalk.method({
selector: "fromDictionary:",
protocol: 'not yet classified',
fn: function (aDict){
var self=this;
var todo;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
todo=self._new();
$1=todo;
$2=_st(aDict)._at_("id");
$ctx1.sendIdx["at:"]=1;
_st($1)._id_($2);
$3=todo;
$4=_st(aDict)._at_("text");
$ctx1.sendIdx["at:"]=2;
_st($3)._text_($4);
_st(todo)._isDone_(_st(aDict)._at_("isDone"));
$5=todo;
return $5;
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:",{aDict:aDict,todo:todo},globals.Todo.klass)})},
args: ["aDict"],
source: "fromDictionary: aDict\x0a\x09| todo |\x0a\x09todo := self new.\x0a\x09todo id: (aDict at: 'id').\x0a\x09todo text: (aDict at: 'text').\x0a\x09todo isDone: (aDict at: 'isDone').\x0a\x09^ todo",
messageSends: ["new", "id:", "at:", "text:", "isDone:"],
referencedClasses: []
}),
globals.Todo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromDictionary:withCallback:",
protocol: 'not yet classified',
fn: function (aDict,aBlock){
var self=this;
var todo;
return smalltalk.withContext(function($ctx1) { 
var $1;
todo=self._fromDictionary_(aDict);
_st(todo)._onTodoChangedDo_(aBlock);
$1=todo;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:withCallback:",{aDict:aDict,aBlock:aBlock,todo:todo},globals.Todo.klass)})},
args: ["aDict", "aBlock"],
source: "fromDictionary: aDict withCallback: aBlock\x0a\x09| todo |\x0a\x09todo := self fromDictionary: aDict.\x0a\x09todo onTodoChangedDo: aBlock.\x0a\x09^ todo",
messageSends: ["fromDictionary:", "onTodoChangedDo:"],
referencedClasses: []
}),
globals.Todo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromDictionary:withTodoChangedCallback:withDeleteClickedCallback:",
protocol: 'not yet classified',
fn: function (aDict,aBlock,oBlock){
var self=this;
var todo;
return smalltalk.withContext(function($ctx1) { 
var $1;
todo=self._fromDictionary_(aDict);
_st(todo)._onTodoChangedDo_(aBlock);
_st(todo)._onDeleteClickedDo_(oBlock);
$1=todo;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:withTodoChangedCallback:withDeleteClickedCallback:",{aDict:aDict,aBlock:aBlock,oBlock:oBlock,todo:todo},globals.Todo.klass)})},
args: ["aDict", "aBlock", "oBlock"],
source: "fromDictionary: aDict withTodoChangedCallback: aBlock withDeleteClickedCallback: oBlock\x0a\x09| todo |\x0a\x09todo := self fromDictionary: aDict.\x0a\x09todo onTodoChangedDo: aBlock.\x0a\x09todo onDeleteClickedDo: oBlock.\x0a\x09^ todo",
messageSends: ["fromDictionary:", "onTodoChangedDo:", "onDeleteClickedDo:"],
referencedClasses: []
}),
globals.Todo.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithText:",
protocol: 'not yet classified',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._text_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithText:",{aString:aString},globals.Todo.klass)})},
args: ["aString"],
source: "newWithText: aString\x0a\x09^ self new text: aString",
messageSends: ["text:", "new"],
referencedClasses: []
}),
globals.Todo.klass);


smalltalk.addClass('TodoList', globals.Widget, ['todos', 'container', 'count'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "addTodo:",
protocol: 'adding/removing',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aTodo)._id_(_st(self["@count"])._asString());
_st(aTodo)._onTodoChangedDo_((function(todo){
return smalltalk.withContext(function($ctx2) {
return _st(self["@todos"])._at_put_(_st(self["@todos"])._indexOf_(todo),todo);
}, function($ctx2) {$ctx2.fillBlock({todo:todo},$ctx1,1)})}));
_st(aTodo)._onDeleteClickedDo_((function(todo){
return smalltalk.withContext(function($ctx2) {
return self._removeTodo_(todo);
}, function($ctx2) {$ctx2.fillBlock({todo:todo},$ctx1,2)})}));
_st(self["@todos"])._add_(aTodo);
_st(aTodo)._appendToJQuery_(_st(self["@container"])._asJQuery());
self["@count"]=_st(self["@count"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"addTodo:",{aTodo:aTodo},globals.TodoList)})},
args: ["aTodo"],
source: "addTodo: aTodo\x0a\x09aTodo id: count asString.\x0a\x09aTodo onTodoChangedDo: [ :todo | todos at: (todos indexOf: todo) put: todo ].\x0a\x09aTodo onDeleteClickedDo: [ :todo | self removeTodo: todo ].\x0a       \x09todos add: aTodo.\x0a       \x09aTodo appendToJQuery: container asJQuery.\x0a\x09count := count + 1",
messageSends: ["id:", "asString", "onTodoChangedDo:", "at:put:", "indexOf:", "onDeleteClickedDo:", "removeTodo:", "add:", "appendToJQuery:", "asJQuery", "+"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "handleInput:",
protocol: 'events',
fn: function (anEvent){
var self=this;
var text,todo;
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
text=_st(_st(anEvent)._target())._value();
todo=_st($Todo())._newWithText_(text);
self._addTodo_(todo);
return self}, function($ctx1) {$ctx1.fill(self,"handleInput:",{anEvent:anEvent,text:text,todo:todo},globals.TodoList)})},
args: ["anEvent"],
source: "handleInput: anEvent\x0a\x09| text todo |\x0a        text := anEvent target value.\x0a        todo := Todo newWithText: text.\x0a \x09self addTodo: todo",
messageSends: ["value", "target", "newWithText:", "addTodo:"],
referencedClasses: ["Todo"]
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $TodoStorage(){return globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
return smalltalk.withContext(function($ctx1) { 
var $1;
($ctx1.supercall = true, globals.TodoList.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@todos"]=_st($TodoStorage())._new();
self["@container"]="div#todos ol";
$1=_st(_st(self["@todos"])._size()).__eq((0));
if(smalltalk.assert($1)){
self["@count"]=(1);
} else {
self["@count"]=_st(_st(_st(_st(self["@todos"])._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._id())._asNumber();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})})))._sort())._last()).__plus((1));
};
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoList)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09todos := TodoStorage new.\x0a\x09container := 'div#todos ol'.\x0a\x09count := todos size = 0 ifTrue: [ 1 ] ifFalse: [( todos collect: [ :each | each id asNumber ]) sort last + 1 ]",
messageSends: ["initialize", "new", "ifTrue:ifFalse:", "=", "size", "+", "last", "sort", "collect:", "asNumber", "id"],
referencedClasses: ["TodoStorage"]
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTodo:",
protocol: 'adding/removing',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@todos"])._remove_(aTodo);
_st(_st("li#".__comma(_st(aTodo)._id()))._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeTodo:",{aTodo:aTodo},globals.TodoList)})},
args: ["aTodo"],
source: "removeTodo: aTodo\x0a\x09todos remove: aTodo.\x0a\x09('li#', aTodo id) asJQuery remove",
messageSends: ["remove:", "remove", "asJQuery", ",", "id"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBodyOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._id_("body");
_st($1)._class_("section");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderFormOn_(html);
return self._renderTodosOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBodyOn:",{html:html},globals.TodoList)})},
args: ["html"],
source: "renderBodyOn: html\x0a\x09html div\x0a\x09\x09id: 'body';\x0a\x09\x09class: 'section';\x0a\x09\x09with: [\x0a                  self renderFormOn: html.\x0a                  self renderTodosOn: html ]",
messageSends: ["id:", "div", "class:", "with:", "renderFormOn:", "renderTodosOn:"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFooterOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._id_("footer");
_st($1)._class_("section");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._p())._with_("Example Todo application for Amber Smalltalk by rbistolfi");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderFooterOn:",{html:html},globals.TodoList)})},
args: ["html"],
source: "renderFooterOn: html\x0a\x09html div\x0a\x09\x09id: 'footer';\x0a\x09\x09class: 'section';\x0a\x09\x09with: [ html p with: 'Example Todo application for Amber Smalltalk by rbistolfi' ]",
messageSends: ["id:", "div", "class:", "with:", "p"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var input,defaultText;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2;
defaultText="What needs to be done?";
$1=_st(html)._div();
_st($1)._id_("form");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._input();
_st($3)._type_("text");
$4=_st($3)._onKeyUp_((function(event){
return smalltalk.withContext(function($ctx3) {
$5=_st(_st(event)._keyCode()).__eq((13));
if(smalltalk.assert($5)){
self._handleInput_(event);
return _st(_st(input)._asJQuery())._val_("");
};
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2,2)})}));
input=$4;
return input;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(_st(input)._element())._placeholder_(defaultText);
return self}, function($ctx1) {$ctx1.fill(self,"renderFormOn:",{html:html,input:input,defaultText:defaultText},globals.TodoList)})},
args: ["html"],
source: "renderFormOn: html\x0a\x09| input defaultText |\x0a\x09defaultText := 'What needs to be done?'.\x0a\x09html div\x0a\x09\x09id: 'form';\x0a\x09\x09with: [\x0a                   input := html input\x0a                  \x09type: 'text';\x0a                  \x09onKeyUp: [ :event |\x0a                                  (event keyCode = 13) ifTrue: [\x0a                                    self handleInput: event.\x0a                                    input asJQuery val: '' ] ] ].\x0a\x09input element placeholder: defaultText.",
messageSends: ["id:", "div", "with:", "type:", "input", "onKeyUp:", "ifTrue:", "=", "keyCode", "handleInput:", "val:", "asJQuery", "placeholder:", "element"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._id_("header");
_st($1)._class_("section");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._h1())._with_("Todo list");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},globals.TodoList)})},
args: ["html"],
source: "renderHeaderOn: html\x0a\x09html div\x0a\x09\x09id: 'header';\x0a\x09\x09class: 'section';\x0a\x09\x09with: [ html h1 with: 'Todo list' ]",
messageSends: ["id:", "div", "class:", "with:", "h1"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._id_("application");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderHeaderOn_(html);
self._renderBodyOn_(html);
return self._renderFooterOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TodoList)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09id: 'application';\x0a\x09\x09with: [\x0a                  self renderHeaderOn: html.\x0a                  self renderBodyOn: html.\x0a                  self renderFooterOn: html. ]",
messageSends: ["id:", "div", "with:", "renderHeaderOn:", "renderBodyOn:", "renderFooterOn:"],
referencedClasses: []
}),
globals.TodoList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTodosOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._id_("todos");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._ol())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@todos"])._do_((function(aTodo){
return smalltalk.withContext(function($ctx4) {
_st(aTodo)._onTodoChangedDo_((function(todo){
return smalltalk.withContext(function($ctx5) {
return _st(self["@todos"])._at_put_(_st(self["@todos"])._indexOf_(todo),todo);
}, function($ctx5) {$ctx5.fillBlock({todo:todo},$ctx4,4)})}));
_st(aTodo)._onDeleteClickedDo_((function(todo){
return smalltalk.withContext(function($ctx5) {
return self._removeTodo_(todo);
}, function($ctx5) {$ctx5.fillBlock({todo:todo},$ctx4,5)})}));
return _st(aTodo)._renderOn_(html);
}, function($ctx4) {$ctx4.fillBlock({aTodo:aTodo},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTodosOn:",{html:html},globals.TodoList)})},
args: ["html"],
source: "renderTodosOn: html\x0a\x09html div\x0a\x09\x09id: 'todos';\x0a\x09\x09with: [\x0a                  html ol\x0a                  \x09with: [ todos do: [ :aTodo | \x0a                                           aTodo onTodoChangedDo: [ :todo | todos at: (todos indexOf: todo) put: todo ].\x0a\x09                                   aTodo onDeleteClickedDo: [ :todo | self removeTodo: todo ].\x0a                                           aTodo renderOn: html ]]]",
messageSends: ["id:", "div", "with:", "ol", "do:", "onTodoChangedDo:", "at:put:", "indexOf:", "onDeleteClickedDo:", "removeTodo:", "renderOn:"],
referencedClasses: []
}),
globals.TodoList);


smalltalk.addMethod(
smalltalk.method({
selector: "run",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"run",{},globals.TodoList.klass)})},
args: [],
source: "run\x0a\x09self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
globals.TodoList.klass);


smalltalk.addClass('TodoStorage', globals.Object, ['storage', 'array'], 'Examples-ToDo');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._add_(anObject);
self._save();
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},globals.TodoStorage)})},
args: ["anObject"],
source: "add: anObject\x0a\x09array add: anObject.\x0a\x09self save.",
messageSends: ["add:", "save"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._at_(anIndex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anIndex:anIndex},globals.TodoStorage)})},
args: ["anIndex"],
source: "at: anIndex\x0a\x09^ array at: anIndex",
messageSends: ["at:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (anIndex,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._at_put_(anIndex,anObject);
self._save();
return self}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},globals.TodoStorage)})},
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09array at: anIndex put: anObject.\x0a\x09self save",
messageSends: ["at:put:", "save"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "collect:",
protocol: 'iterating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._collect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},globals.TodoStorage)})},
args: ["aBlock"],
source: "collect: aBlock\x0a\x09^ array collect: aBlock",
messageSends: ["collect:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "detect:",
protocol: 'iterating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._detect_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock},globals.TodoStorage)})},
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^ array detect: aBlock",
messageSends: ["detect:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
protocol: 'iterating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._do_(aBlock);
self._save();
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},globals.TodoStorage)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09array do: aBlock.\x0a\x09self save.",
messageSends: ["do:", "save"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "getArray",
protocol: 'accessing',
fn: function (){
var self=this;
var anArray,aJSONArray;
function $SmalltalkImage(){return globals.SmalltalkImage||(typeof SmalltalkImage=="undefined"?nil:SmalltalkImage)}
function $JSON(){return globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $Todo(){return globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$receiver;
aJSONArray=_st(self["@storage"])._getItem_("TodoList");
$1=aJSONArray;
if(($receiver = $1) == null || $receiver.isNil){
anArray=self._initializeStorage();
} else {
anArray=_st(_st($SmalltalkImage())._current())._readJSObject_(_st($JSON())._parse_(aJSONArray));
};
$2=_st(anArray)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($Todo())._fromDictionary_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"getArray",{anArray:anArray,aJSONArray:aJSONArray},globals.TodoStorage)})},
args: [],
source: "getArray\x0a\x09| anArray aJSONArray |\x0a\x09aJSONArray := storage getItem: 'TodoList'.\x0a\x09anArray := aJSONArray ifNil: [ self initializeStorage ] \x0a\x09                      ifNotNil: [ SmalltalkImage current \x0a\x09\x09\x09\x09\x09\x09                readJSObject: (JSON parse: aJSONArray)\x0a                                    ].\x0a\x09^ anArray collect: [ :each | Todo fromDictionary: each ]",
messageSends: ["getItem:", "ifNil:ifNotNil:", "initializeStorage", "readJSObject:", "current", "parse:", "collect:", "fromDictionary:"],
referencedClasses: ["SmalltalkImage", "JSON", "Todo"]
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "indexOf:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._indexOf_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anObject:anObject},globals.TodoStorage)})},
args: ["anObject"],
source: "indexOf: anObject\x0a\x09^ array indexOf: anObject",
messageSends: ["indexOf:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@storage"]=localStorage;
self["@array"]=self._getArray();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TodoStorage)})},
args: [],
source: "initialize\x0a\x09storage := localStorage.\x0a\x09array := self getArray.",
messageSends: ["getArray"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeStorage",
protocol: 'initializing',
fn: function (){
var self=this;
var anArray;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
anArray=_st($Array())._new();
_st(self["@storage"])._setItem_value_("TodoList",_st(anArray)._asJSON());
$1=anArray;
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeStorage",{anArray:anArray},globals.TodoStorage)})},
args: [],
source: "initializeStorage\x0a\x09| anArray |\x0a\x09anArray := Array new.\x0a\x09storage setItem: 'TodoList' value: anArray asJSON.\x0a\x09^ anArray",
messageSends: ["new", "setItem:value:", "asJSON"],
referencedClasses: ["Array"]
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "lenght",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"lenght",{},globals.TodoStorage)})},
args: [],
source: "lenght\x0a\x09^ self size",
messageSends: ["size"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
protocol: 'adding/removing',
fn: function (anObject){
var self=this;
var d;
return smalltalk.withContext(function($ctx1) { 
var $1;
d=_st(self["@array"])._detect_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._asJSON();
$ctx2.sendIdx["asJSON"]=1;
return _st($1).__eq(_st(anObject)._asJSON());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(self["@array"])._remove_(d);
self._save();
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject,d:d},globals.TodoStorage)})},
args: ["anObject"],
source: "remove: anObject\x0a\x09| d |\x0a\x09d := array detect: [ :each | each asJSON = anObject asJSON ]. \x0a\x09array remove: d.\x0a\x09self save",
messageSends: ["detect:", "=", "asJSON", "remove:", "save"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "save",
protocol: 'persistence',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@storage"])._setItem_value_("TodoList",_st(self["@array"])._asJSONString());
return self}, function($ctx1) {$ctx1.fill(self,"save",{},globals.TodoStorage)})},
args: [],
source: "save\x0a\x09storage setItem: 'TodoList' value: array asJSONString",
messageSends: ["setItem:value:", "asJSONString"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "select:",
protocol: 'iterating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._select_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock},globals.TodoStorage)})},
args: ["aBlock"],
source: "select: aBlock\x0a\x09^ array select: aBlock",
messageSends: ["select:"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "setArray",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._save();
return $1;
}, function($ctx1) {$ctx1.fill(self,"setArray",{},globals.TodoStorage)})},
args: [],
source: "setArray\x0a\x09^ self save",
messageSends: ["save"],
referencedClasses: []
}),
globals.TodoStorage);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@array"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},globals.TodoStorage)})},
args: [],
source: "size\x0a\x09^ array size",
messageSends: ["size"],
referencedClasses: []
}),
globals.TodoStorage);


});
