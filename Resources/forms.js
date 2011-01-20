var win = Titanium.UI.currentWindow;

var nameLabel = Titanium.UI.createLabel({
	text:'Name',
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
win.add(nameLabel);

var nameField = Titanium.UI.createTextField({
	color:'#336699',
	height:45,
	top:50,
	left:40,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(nameField);

var titleLabel = Titanium.UI.createLabel({
	text:'Title',
	color:'#777',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:15
	},
	textAlign:'center',
	top:20,
	width:300,
	height:'auto'
});
win.add(titleLabel);

var blurButton = Titanium.UI.createButton({
	top:100,
	height:40,
	width:100,
	title:'Submit'
});
win.add(blurButton);
blurButton.addEventListener('click', function()
{
    send();
});


function send()
{
    var name = nameField.value;
    // var title = document.getElementById('title').value;
    // var content = document.getElementById('content').value;
    Ti.API.info("clicked on send button");
    Ti.API.info(name);
    alert(name);
    
    var request = Ti.Network.createHTTPClient();
    
    request.open("POST","http://192.168.1.175:3000/posts");
    var params = {
	name:name,
	title:"this is the title",
	content:"this is the content"
    }
    // var data = JSON.stringify(params);
    Ti.API.info(params);
    // Ti.API.info(data);
    request.send(params);
    
};