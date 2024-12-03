Js can be implemented using JS statements that are placed within the <script>.....</script> HTML tags in a web page.
You can place your script code anywhere within the web page but it is normally recommended that you should keep it within the <head> tags.
<script> alerts the browser program to start interpreting all the text btwn thesee tags as script.
eg,,    
  
        <script......> 
             Javascript code 
         </script> 

script tag takes two important attributes:
  Language: it specifies what scripting language you are using.Typically its value will be javascript.
  Type: this is what is recommended to indicate the scripting language in use and its value should be set to 
         "text/javascript". 
         
         Javascript syntax will look like this...
         <script language = "javascript" type="text/javascript">
            Javascript code
            
          </script> 
example. 
    
    <html>
    <body> 
    
    <script language="javascript" type="text/javascript"> 
      <!--
       document.write("This is my first JS code")
      //-->
</script> 
</body>
</html>

JS is case sensitive language. eg time and TIME has diffrent meaning 

comments in JS

 Any text between a // and the end of a line is treated as a comment and
is ignored by JavaScript.
 Any text between the characters /* and */ is treated as a comment. This
may span multiple lines.
 JavaScript also recognizes the HTML comment opening sequence <!--.
JavaScript treats this as a single-line comment, just as it does the //
comment.
 The HTML comment closing sequence --> is not recognized by JavaScript
so it should be written as //-->.
