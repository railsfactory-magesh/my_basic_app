var win = Titanium.UI.currentWindow;

var nameLabel = Titanium.UI.createLabel({
	text:'Name',
	color:'#777',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:15
	},
	textAlign:'center',
	top:5,
	width:300,
	height:'auto'
});
win.add(nameLabel);

var nameField = Titanium.UI.createTextField({
	color:'#336699',
	height:45,
	top:30,
	left:40,
	width:250,
	borderRadius:5,
	borderWidth:2,
	borderColor:'#999',
	// borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
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
	top:80,
	width:300,
	height:'auto'
});
win.add(titleLabel);


var titleField = Titanium.UI.createTextField({
	color:'#336699',
	height:45,
	top:110,
	left:40,
	width:250,
	borderRadius:5,
	borderWidth:2,
	borderColor:'#999'
	// borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(titleField);

var bodyLabel = Titanium.UI.createLabel({
	text:'Content',
	color:'#777',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:15
	},
	textAlign:'center',
	top:150,
	width:300,
	height:'auto'
});
win.add(bodyLabel);


var bodyField = Ti.UI.createTextArea({borderRadius:5,borderWidth:2,borderColor:'#999',bottom:50,left:30,right:30,height:100,top:170, font:{fontFamily:'courier',fontSize:10}});
win.add(bodyField);


var blurButton = Titanium.UI.createButton({
	bottom:10,
	height:40,
	width:100,
	title:'Submit'
});
win.add(blurButton);
blurButton.addEventListener('click', function()
{
    send();
});

var xhr = Ti.Network.createHTTPClient();

function send()
{
    var name = nameField.value;
    var title = titleField.value;
    var content = bodyField.value;

    if(title && content != null){
	
	

	Ti.API.info("clicked on send button");
	Ti.API.info("Name: " + name + "title: " + title + "body: " + content );
	
	
	xhr.open("POST","http://192.168.1.175:3000/posts");
	var params = {
	    name:name,
	    title:title,
	    content:content
	}
    
	Ti.API.info(params);
	
	xhr.send(params);
    }else
	{
	    alert("Please Enter the needed infos");
	}
    
};

xhr.onerror = function(e) {
    
    var a = Titanium.UI.createAlertDialog({ 
	    title:'Well, this is awkward...',
	    message: 'We had a problem posting your blogpost - please try again'
	});
    a.show();
    alert(e.error);
};

xhr.onload = function(data) {
    var data = JSON.parse(data);
    Ti.API.info(data);
};