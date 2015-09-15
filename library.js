var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			var sec = new Date().getTime() / 1000;
			return String(sec).substr(0,10);
			
		},
		UnixMillisecond: function(){
			var ms = new Date().getTime();
			return String(ms);
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
				var time = new Date()
				return time.toLocaleTimeString();
				  
			  },
	   	    WithOutSeconds: function() {
				 var time = new Date()
				 return time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'});
				
			   }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
				var date = new Date();
				return((date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear());
			},
			Name: function(){
				var date = new Date()
				var monName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				return (monName[date.getMonth()] + " " + date.getDate() + "," + " " +date.getFullYear());
			}
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
			DblDigit: function(){
				var date = new Date()
				var secDbl = date.getSeconds();
				if (secDbl < 10) {return '0'+ secDbl}
			return String(secDbl);
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(liveminute){
				var date = new Date()
				var dateMinute = date.getMinutes();
				return String(dateMinute);
			},
			DblDigit: function(){
				var date = new Date()
				var minDbl = date.getMinutes();
				if (minDbl < 10) {return '0'+ minDbl}
			return String(minDbl);
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				var date = new Date()
				var hours = date.getHours();
				//if (hours < 10) {return '0'+ hours}
				return String(hours);
			},
			TwelveHour: function() {
				var date = new Date()
				var hours = date.getHours();
				if (hours > 12) {hours -=12;}
				return String(hours)
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
					var hours = new Date().getHours();
					var ampm = (hours >= 12) ? 'PM' : 'AM';
					return String(ampm);
					},
					LowerCase: function(){
					var hours = new Date().getHours();
					var ampm = (hours >= 12) ? 'pm' : 'am';
					return String(ampm);
					}
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
			WeekOfYear: function(){
			var d = new Date();
              d.setHours(0,0,0);
              d.setDate(d.getDate() + 4 - (d.getDay()||7));
              var yearStart = new Date(d.getFullYear(),0,1);
              var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
              return String(weekNo);   
           }
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
				var date = new Date()
				var currentMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				return currentMonth[ date.getMonth() ]
			},
			CurrentMonth: function(){
				var date = new Date()
				var currentMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				return currentMonth[ date.getMonth() ]
			},
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
						var now = new Date();
                    	var start = new Date(now.getFullYear(), 0, 0);
                    	var diff = now - start;
                    	var oneDay = 1000 * 60 * 60 * 24;
                    	var day = Math.floor(diff / oneDay);
						switch (day.toString[day.length-2]){
							case 1: + day + "st";
							case 2: + day + "nd";
							case 3: + day + "rd";
							case 11: + day +"th";
							case 12: + day + "th";
							case 13: + day + "th"
							default: return + day + "th";
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
	Defaults: function(){
		var hours = new Date().getHours();
		if (hours < 10) {return '0'+hours}
		return library.Year.YearFull() + "-" + library.Month.MonthNumberDblDigit() + "-" + library.Month.DateOfMonth.DateDblDigit() + "T" + library.Hour.TwentyFourHour() + ":" + library.Minute.DblDigit() + ":" + library.Second.DblDigit();
	}
  }
})();