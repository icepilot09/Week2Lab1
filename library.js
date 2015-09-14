var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){},
		UnixMillisecond: function(){
			var date = new Date()
			var milliSec = date.getMilliseconds();
			return (milliSec);
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				var date = new Date()
				var dateSeconds = date.getSeconds();
				return String(dateSeconds);
			},
			DblDigit: function(){}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(liveminute){
				var date = new Date()
				var dateMinute = date.getMinutes();
				return String(dateMinute);
			},
			DblDigit: function(){}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {},
			TwelveHour: function() {},
			AMPM: (function() {
				return {
					UpperCase: function(){},
					LowerCase: function(){}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				var date = new Date()
				var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  			return days[ date.getDay() ]

			},
			AbrDayOfWeek: function(){
				var date = new Date()
				var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  			return days [date.getDay()].substr(0,3);
			},
			FirstTwoOfWeek: function(){
				var date = new Date()
				var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  			return days [date.getDay()].substr(0,2);
			},
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						var date = new Date()
						var dateNum = date.getDate();
					return String(dateNum);
					},
					Ordinal: function(){
					var date = new Date()
					var dateOrd = date.getDate();
						switch (date) {
                			case 1:
                			case 21:
                			case 31:
                    	return "" + dateOrd + "st";

                			case 2:
                			case 22:
                    	return "" + dateOrd + "nd";

                			case 3:
                			case 23:
                    	return "" + dateOrd + "rd";

                		default:
                    	return "" + dateOrd + "th";
					}
					
					},
					DateDblDigit: function(){
					var date = new Date()
					var dblDateDig = date.getDate();
					if (dblDateDig < 10) {dblDateDig = '0'+ dblDateDig;}
					return String (dblDateDig);
					},
				}
			})(),
			MonthNumber: function(){
				var date = new Date()
				var monthNum = date.getMonth() + 1;
			return String(monthNum);
			},
			MonthNumberDblDigit: function(){
				var date = new Date()
				var monthNumDbl = date.getMonth() + 1;
				if (monthNumDbl < 10) {monthNumDbl = '0'+ monthNumDbl;}
			return String(monthNumDbl)
			},
			AbrOfCurrentMonth: function(){
				var date = new Date();
				var abrMonth = date.getMonth() + 1;
				if (abrMonth < 10) {abrMonth = 'Sep';}
			return String(abrMonth)
			},
			CurrentMonth: function(){
				var date = new Date();
				var currentMonth = date.getMonth() + 1;
				if (currentMonth < 10) {currentMonth = 'September';}
			return String(currentMonth);
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){	
				return {
					Numeral: function(){
						var now = new Date();
                    	var start = new Date(now.getFullYear(), 0, 0);
                    	var diff = now - start;
                    	var oneDay = 1000 * 60 * 60 * 24;
                    	var day = Math.floor(diff / oneDay);
                    return String(day);
                    },
					Ordinal: function(){
						var date = new Date();
						var yearOrd = date.toDateString();
						switch (date){
							
							
						}
						}
					};
			})(),
			YearFull: function(){
				var date = new Date()
				var yearFull = date.getFullYear();
				return String(yearFull);
			},
			YearAbr: function(){
				var date = new Date()
				var yearFull = date.getFullYear();
				return String(yearFull).substr(-2);
				
			}
		}
	})(),
	Defaults: function(){}
  }
})();