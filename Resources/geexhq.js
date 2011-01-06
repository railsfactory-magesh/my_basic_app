var xhr = Titanium.Network.createHTTPClient();

xhr.onload = function()
{
	Ti.API.info('blog xml ' + this.responseXML + ' text ' + this.responseText);
	var doc = this.responseXML.documentElement;
	var items = doc.getElementsByTagName("item");
	// var screenName = items.item(0);
	// Ti.API.info("screenname = " + screenName.title);
	var data = [];
	var x = 0;
	var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
	//for (var c=0;c<items.length;c++) {
	//  var item = items.item(c);
	var item = items.item(0);  
	    var title = item.getElementsByTagName("title").item(0).text;
	    var row = Ti.UI.createTableViewRow({height:80});
	    var label = Ti.UI.createLabel({
		    text:title,
		    left:72,
		    top:5,
		    bottom:5,
		    right:5
		});
	    row.add(label);
	    data[x++] = row;
	
	    var screenname = Ti.UI.createLabel({
		textAlign:'center',
		height:'auto',
		width:'auto',
		top:20,
		text:title
	});
	Ti.UI.currentWindow.add(screenname);
	
	// }
	
	var textarea = Ti.UI.createTextArea({borderRadius:5,borderWidth:2,borderColor:'#999',backgroundColor:'#111',color:'yellow',bottom:10,left:10,right:10,height:300,font:{fontFamily:'courier',fontSize:10}});
	textarea.value = this.responseText;
	Ti.UI.currentWindow.add(textarea);
};
// open the client
xhr.open('GET','http://geexhq.com/feed/');

// send the data
xhr.send();
