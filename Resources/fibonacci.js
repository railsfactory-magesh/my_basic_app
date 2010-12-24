var win = Titanium.UI.currentWindow;

//
// BASIC SLIDER
//
var basicSliderLabel = Titanium.UI.createLabel({
	//text:'Basic Slider - value = 0' ,
	text:'Fibonacci',
	color:'#777',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:15
	},
	textAlign:'center',
	top:10,
	width:300,
	height:'auto'
});

win.add(basicSliderLabel);
// var l = Titanium.UI.createLabel({
// 	top:150,
// 	left:10,
// 	width:300,
// 	height:'auto',
// 	color:'#777',
// 	font:{fontSize:13},
// 	text:''
// });
// win.add(l);

var tf1 = Titanium.UI.createTextField({
	color:'#336699',
	height:45,
	top:50,
	left:20,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(tf1);




var blurButton = Titanium.UI.createButton({
	top:100,
	height:40,
	width:100,
	title:'Submit'
});
win.add(blurButton);
blurButton.addEventListener('click', function()
{
    //f(tf1.value);
    //l.text = 'Fibonacci = '  + r;
	show(f(tf1.value));
});


function f(n) {
var s = 0;
if(n == 0) return(s);
if(n == 1) {
s += 1;
return(s);
}
else {
return(f(n - 1) + f(n - 2));
   }
}
function show(n) {
var i;
tf1.value = '';
for(i = 0; i <= n; i++) {
tf1.value += "  " + f(i);
   }
}
