var win = Ti.UI.currentWindow;

var numberLabel = Titanium.UI.createLabel({
	text: 'Contact Magesh\n magesh@geexhq.com\n http://railsfactory.com\n 9940305209\n Chennai, Tamil Nadu, India',
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
win.add(numberLabel);

numberLabel.autoLink = Ti.UI.Android.LINKIFY_ALL;
// numberLabel.addEventListener('click', function()
// 			     {
// 				 LINKIFY_ALL;
// 			     });