win = Ti.UI.currentWindow;

var tf = Ti.UI.createTextField({
	color:'#336699',
	height:45,
	top:20,
	left:10,
	width:300,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED

    });

win.add(tf);


tf.addEventListener('change', function(e)
		    {
	
		    });

var b1 = Titanium.UI.createButton({
	title:'1',
	height:40,
	width:40,
	left:10,
	top:65
    });

b1.addEventListener('click', function()
		    {
    
			updatestring('1');
		    });

win.add(b1);

var b2 = Titanium.UI.createButton({
	title:'2',
	height:40,
	width:40,
	left:50,
	top:65
    });

b2.addEventListener('click', function()
		    {
    
			updatestring('2');
		    });

win.add(b2);

var b3 = Titanium.UI.createButton({
	title:'3',
	height:40,
	width:40,
	left:90,
	top:65
    });

b3.addEventListener('click', function()
		    {
    
			updatestring('3');
		    });

win.add(b3);

var b4 = Titanium.UI.createButton({
	title:'4',
	height:40,
	width:40,
	left:130,
	top:65
    });

b4.addEventListener('click', function()
		    {
    
			updatestring('4');
		    });

win.add(b4);

var b5 = Titanium.UI.createButton({
	title:'5',
	height:40,
	width:40,
	left:170,
	top:65
    });

b5.addEventListener('click', function()
		    {
    
			updatestring('5');
		    });

win.add(b5);

var b6 = Titanium.UI.createButton({
	title:'6',
	height:40,
	width:40,
	left:210,
	top:65
    });

b6.addEventListener('click', function()
		    {
    
			updatestring('6');
		    });

win.add(b6);

var b7 = Titanium.UI.createButton({
	title:'7',
	height:40,
	width:40,
	left:250,
	top:65
    });

b7.addEventListener('click', function()
		    {
    
			updatestring('7');
		    });

win.add(b7);

var b8 = Titanium.UI.createButton({
	title:'8',
	height:40,
	width:40,
	left:10,
	top:105
    });

b8.addEventListener('click', function()
		    {
    
			updatestring('8');
		    });

win.add(b8);

var b9 = Titanium.UI.createButton({
	title:'9',
	height:40,
	width:40,
	left:50,
	top:105
    });

b9.addEventListener('click', function()
		    {
    
			updatestring('9');
		    });

win.add(b9);

var b0 = Titanium.UI.createButton({
	title:'0',
	height:40,
	width:40,
	left:90,
	top:105
    });

b0.addEventListener('click', function()
		    {
    
			updatestring('0');
		    });

win.add(b0);

var bplus = Titanium.UI.createButton({
	title:'+',
	height:40,
	width:40,
	left:130,
	top:105
    });

bplus.addEventListener('click', function()
		    {
    
			updatestring('+');
		    });

win.add(bplus);

var bminus = Titanium.UI.createButton({
	title:'-',
	height:40,
	width:40,
	left:170,
	top:105
    });

bminus.addEventListener('click', function()
		    {
    
			updatestring('-');
		    });

win.add(bminus);

var bmul = Titanium.UI.createButton({
	title:'x',
	height:40,
	width:40,
	left:210,
	top:105
    });

bmul.addEventListener('click', function()
		    {
    
			updatestring('*');
		    });

win.add(bmul);

var bdiv = Titanium.UI.createButton({
	title:'/',
	height:40,
	width:40,
	left:250,
	top:105
    });

bdiv.addEventListener('click', function()
		    {
    
			updatestring('/');
		    });

win.add(bdiv);




var bequals = Titanium.UI.createButton({
	title:'=',
	height:40,
	width:40,
	left:170,
	top:145
    });

bequals.addEventListener('click', function()
		    {
			var equ = eval(inputstring);
			inputstring = '';
			updatestring(equ);
			
			
		    });

win.add(bequals);

var bclear = Titanium.UI.createButton({
	title:'clear',
	height:40,
	width:90,
	left:210,
	top:145
    });

bclear.addEventListener('click', function()
		    {
			
			inputstring = '';
			tf.value = inputstring;
			
			
		    });

win.add(bclear);


var inputstring=" ";
function updatestring(value)
{
    inputstring += value;
    tf.value=inputstring;
    }