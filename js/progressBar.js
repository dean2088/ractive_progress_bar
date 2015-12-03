var ractive=new Ractive({
	el: '#rcontainer', 
	template:"#template",
	data:{
		bar_selected:'current_value1',
	    current_value1:'25',
		current_value2:'50',
		current_value3:'75',
		last_value1:'25',
		last_value2:'50',
		last_value3:'75'
		}
});



ractive.on('activate', function (e,param) {
	
 		switch (ractive.get('bar_selected'))
			{
				case 'current_value1':
				    ractive.set("last_value1",ractive.get("current_value1"));
					if((ractive.get("current_value1")-param)<0)
					ractive.set("current_value1",ractive.get("last_value1"));
					else
					ractive.set("current_value1",ractive.get("current_value1")-param);
					break;
				case 'current_value2':
					ractive.set("last_value2",ractive.get("current_value2"));
					if((ractive.get("current_value2")-param)<0)
					ractive.set("current_value2",ractive.get("last_value2"));
					else
					ractive.set("current_value2",ractive.get("current_value2")-param);
					break;
				case 'current_value3':
					ractive.set("last_value3",ractive.get("current_value3"));
					if((ractive.get("current_value3")-param)<0)
					ractive.set("current_value3",ractive.get("last_value3"));
					else
					ractive.set("current_value3",ractive.get("current_value3")-param);
					break;
			}
  
});
 
