function drawTriangle(triangleSize) {
   
   // Your solution goes here
   
   for (let i = 1; i <= triangleSize; i++) {
     let line = '';
     for (let j = 1; j <= i; j++) {
       line += '*';
     }
     console.log(line);
   }
 }
 
 // Call drawTriangle() with triangleSize 4
 drawTriangle(4);
 