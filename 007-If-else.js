//The ‘if’ statement is the fundamental control statement that allows JavaScript to
//make decisions and execute statements conditionally. 

if(expression){
  statement to be executed if expression is true 
} 


example 
<!DOCTYPE html>
<html>
<body>
  <script type="text/javascript">
  <!--
    var age = 20;
     if(age>18) {
       document.write("<b>Qualifies for driving</b>");
     } 
       //-->
       </script>
</body>
</html> 

//OUTPUT QUALIFIES FOR DRIVING. 


//If else statement

//synatax 
if (expression){
  statements to be executed if expressin is true
}else {
  statement to be executed if the expression is false
} 

//example 
<!DOCTYPE html>
<html>
<body>
  <script type="text/javascript">
  <!--
    var age = 17;
     if(age>18) {
       document.write("<b>Qualifies for driving</b>");
     } 
    else{
      document.write("<b> Does not qualify for driving");
    }
       //-->
       </script>
</body>
</html>


//if else if statements
//syntax
if (expression 1){
Statement(s) to be executed if expression 1 is true
}else if (expression 2){
Statement(s) to be executed if expression 2 is true
}else if (expression 3){
Statement(s) to be executed if expression 3 is true
}else{
Statement(s) to be executed if no expression is true
} 

//example
<!DOCTYPE html>
<html>
<body>
<script type="text/javascript">
<!--
var book = "maths";
if( book == "history" ){
document.write("<b>History Book</b>");
}else if( book == "maths" ){
document.write("<b>Maths Book</b>");
}else if( book == "economics" ){
document.write("<b>Economics Book</b>");
}else{
document.write("<b>Unknown Book</b>");
}
//-->
</script>
</body>
</html>
