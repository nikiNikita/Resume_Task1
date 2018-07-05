

var People = '{ "employees" : [' +
'{ "firstName":"Rohan" ,  "lastName":"Reddy" , "DoB": "12/05/1994" ,"Email" : "drohanreddy@gmail.com" ,"skill" : "c#,c,c++,java,TSQL", "web" :".NET Stack,Angular 5 , JS, NODE JS", "database" : "MS-SQL SERVER,MongoDB" , "sscYear": "2009" ,"sscInstitute": "Triveni Talent School" , "hscYear" : "2011" , "hscInstitute": "Sri Chaitanya college"},' +
'{ "firstName":"Nikita" , "lastName":"Sahare" , "DoB": "15/04/1993" ,"Email" : "nikita.sahare@gmail.com" ,"skill" : "c#,c,c++,java", "web" :"HTML, CSS, JS", "database" : "lol no" , "sscYear": "2009" ,"sscInstitute": "KV bhandup" , "hscYear" : "2011" , "hscInstitute": "kv picket" }]}';


function funload(number){
  var object = People;
  var JSONobj = JSON.parse(object);
  var FileDirPath = window.location.href;
  var pointLoc;
  for(var i=FileDirPath.length; i>0 ;i--){
    if(FileDirPath[i]=='/'){
      pointLoc = i;
      break;
    }
  }
  var dirPath = FileDirPath.slice(0 , pointLoc);
  var imagePath = dirPath + "/image/emp" + number + ".jpg"
   document.getElementById("profileImage").style.display='block';
   document.getElementById("profileImage").src= imagePath;
   document.getElementById("ename").innerHTML = "Name : " + JSONobj.employees[number].firstName + " " + JSONobj.employees[number].lastName ;
   document.getElementById("edob").innerHTML = "DOB  : " + JSONobj.employees[number].DoB;
   document.getElementById("eemail").innerHTML = "Email  : " + JSONobj.employees[number].Email;
   document.getElementById("professionalskill").innerHTML = "Professional Skills ";
   document.getElementById("skilllist").style.display='block';
   document.getElementById("eskill").innerHTML = "Skill  : " + JSONobj.employees[number].skill;
   document.getElementById("eweb").innerHTML = "Web Development  : " + JSONobj.employees[number].web;
   document.getElementById("edatabase").innerHTML = "Database  : " + JSONobj.employees[number].database;
   document.getElementById("education").innerHTML = "Education Qualification "
   document.getElementById("eduTable").style.display='block';
   document.getElementById("epassingyearssc").innerHTML = JSONobj.employees[number].sscYear;
   document.getElementById("epassinginstssc").innerHTML = JSONobj.employees[number].sscInstitute;
   document.getElementById("epassingyearhsc").innerHTML = JSONobj.employees[number].hscYear;
   document.getElementById("epassinginstHSC").innerHTML = JSONobj.employees[number].hscInstitute;

}
