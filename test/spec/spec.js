describe("testing for progressbar", function() {
	//defind global varibles
	var container,data;
	
	beforeEach(function() {
	    container = $(".container");
	    data = $.extend(true, [], ractive.get());
	});
	//remain original data after each change
	afterEach(function(){
		
		for (var k in data){
		    if (data.hasOwnProperty(k)) {
		         ractive.set(k,data[k]);
		    }
		}
	});
	
	it("Data has been changed by switching selection", function() {
		//switch selection
		var switchTo = "current_value2";
		ractive.set({bar_selected:switchTo});
		
		expect("current_value2").toEqual(ractive.get('bar_selected'));
	});
	
	it("Add extra class when value exceed 100", function() {
		
		ractive.set({current_value1:'110'});
		
		$("button:eq(3)",container).click();
		expect($("#bar1",container).hasClass("progress-bar-danger")).toBeTruthy();
	});
	
	it("value don't go under 0", function() {
		
		ractive.set({current_value1:5});
		
		$("button:eq(0)",container).click();
		expect(ractive.get('current_value1')).toBe(5);
	});

});
