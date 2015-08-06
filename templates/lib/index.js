function greet(name){
  var greeting = name ? 'Hello '+ name : 'Hello World'; 
  return greeting;  
}


var api = {
    greet : greet
};

module.exports = api;