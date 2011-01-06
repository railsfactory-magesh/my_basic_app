Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win = Titanium.UI.createWindow({  
    title:'Magesh',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    title:'Magesh Basic App',
    window:win
});

// create table view data object

var data = [
	{title:'Twitter', hasChild:true, test:'twitter.js'},
	{title:'Facebook', hasChild:true},
	{title:'GeexHQ', hasChild:true, test:'geexhq.js'},
	{title:'Fibonacci', hasChild:true, test:'fibonacci.js'},
	{title:'Calculator', hasChild:true, test:'calc.js'}

];


// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
win.add(tableview);
tabGroup.addTab(tab1);

tabGroup.open();
