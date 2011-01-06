var xhr = Titanium.Network.createHTTPClient();
var current_window = Titanium.UI.currentWindow;
var ratinagimage=[]
    xhr.onload = function()
{
    Titanium.API.info('loaded');
    var doc = this.responseXML.documentElement;
    var elements = doc.getElementsByTagName("title");
    var elements_id = doc.getElementsByTagName("id");
    var tourNames=[]
    for(var i=0; i<=elements.length-1; i++)
	{	
	    tourName = elements.item(i);			
	    tourid = elements_id.item(i);			
	    var row = Ti.UI.createTableViewRow({height:80,tour_id:tourid.id});
	    var label = Ti.UI.createLabel({
		    text: tourName.text,
		    color: '#000',
		    left:72,
		    top: 10,
		    bottom:5,
		    right:5				
		});	
	    var label_id = Ti.UI.createLabel({
		    text: tourid.text,
		    color: '#000',
		    left:5,
		    top: 10,
		    bottom:5,
		    right:5				
		});
	    row.add(label);
	    row.add(label_id);
	    tourNames[i] = row;		
				
	}		
}		
    var TourListingLabel = Ti.UI.createLabel({
	    text: 'Tour Listing',
	    color: '#000',
	    left:72,
	    top: 10,
	    right:5				
	});
			
    var tableview = Titanium.UI.createTableView({data:tourNames, top: 50});		

    current_window.add(tableview);	 
    current_window.add(TourListingLabel);

//tour list request
xhr.open('GET','http://192.168.1.37:3000/mobile_admin/tours/list');
// send the data
xhr.send(); 	 	 
