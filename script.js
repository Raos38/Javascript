
var hello="Hello World!";

function fibonacci (top) {

   console.log( "Processing Top is : " + top);

   var fs = new Array();
   var i=0;
   for(var j=1, k=2; k<=top ;i++) {

   		fs[i] = j;
   		j=k;
   		k = fs[i]+k;
   }
   fs[i]=k;

   console.log("The seq: " + fs);
   return fs;

};


