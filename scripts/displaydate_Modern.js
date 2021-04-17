<!-- Begin
var day="";
var month="";
var myweekday="";
var year="";
newdate = new Date();
mydate = new Date();
myday = mydate.getDay();
mymonth = mydate.getMonth();
myweekday= mydate.getDate();
myyear= mydate.getYear();
year = myyear;

if (year < 2000)
year = year + 1900;

arday = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat")
armonth = new Array("JANUARY ","FEBRUARY ","MARCH ","APRIL ","MAY ","JUNE ","JULY ","AUGUST ","SEPTEMBER ", "OCTOBER ","NOVEMBER ","DECEMBER ")
ardate = new Array("0th","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st");

var time = (armonth[mymonth] +" "+ardate[myweekday] + ", " + year);
document.write(time);
//-->