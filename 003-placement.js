There is a flexibility given to include js code anywhere in an HTML document.
The most preffered ways to include js in an HTML file are as folows: 

     Script in <head> ....</head> section.
      Script in <body>.... </body> section.
        script in <body>..</body> and <head>.....</head> sections. 
          script in an external file and then include in <head> ....</head> section .


JavaScript in <head>...</head> Section 
      <html>
      <head>
      <script type="text/javascript">
       <!-- 
        function sayHello(){
            alert("Hello world")
      } 
//--> 
</script>
</head> 
<body> 
   Click here for the result 
    <input type="button" onclick="sayHello()" value="say Hello" />
</body>
</html> 

JavaScript in External File 

<html>
<head>
<script type="text/javascript" src="filename.js" ></script>
</head>
<body>
.......
</body>
</html>
