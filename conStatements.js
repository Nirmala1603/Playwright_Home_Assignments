//if else for browser launch messages
let browserName = "Chrome";
function  launchBrowser(browserName){
  
  if(browserName==="Chrome"){
    console.log("Launched Browser is Chrome");
  }
  else{
    console.log("Other Browser")
  }
}
launchBrowser(browserName)

//Switch case for test type messages
  let testType="smoke";
function runTests(testType){
 switch(testType){

  case "smoke":
  console.log("Testtype is smoke");
  break;

  case "sanity":
  console.log("Testtype is sanity");
   break;

case "regression":
  console.log("Testtype is regression");
   break;

 default:
 console.log("Default Testtype is smoke");
 }
 
}
runTests(testType);
