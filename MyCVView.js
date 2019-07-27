var contactDetails = "Name : Suyash Gupta \n, Phone:8290828725, Mail Id: suguptayash@gmail.com";
var copyContactDetails = "left click to copy contact details";

var firstDivWithHeading = {"Profile Summary:": "Full Stack development professional with key projects and exposure to good number of ProgrammingLanguages-Java, Shell Scripting ,Node,JavaScript, PHP, Python, C, MySQL , API with proficiency in Java and C.",
"boldSection": "( 3.8 year of Professional Experience with Wipro, working since January 2016 )"};

var secondDivWithHeading = {"Objective:" : "To work consistently in a challenging environment using latest technologies and optimized approach to deliver the best"};

var thirdDivWithHeading = {"Projects": "key projects worked in"};


var secondTableData = {
"Project - NHM Developer Ericsson (Duration-1 year)": "", 
"Team Size":1,
"Project Description -": "Network Health Monitor Developer- Triggering Events forr breached nodes in backend to display Alarms(Fault Management Alarm) inr GUI",
"Responsibilities and Contribution ": `1) Full stack Development including UI and backend
2) Rest Interface-RestEasy - Java 7, Java Enterprise Beans.`+'\n'+` 
3) Object Mapper for converting POJO to JSON object. \n
4) Esper Event System \n
5) UI Java Script \n
6) Data Base-postgresssql \n
7) Building Tool Maven \n
8) Design Analysis and Estimations.`,
};


var thirdTableData = {
    "Project- NHA Developer Ericsson (Duration- 8 months) ":"",
      "Work Location":"Bangalore, India",
    "Role ":"Software Engineer",
    "Team Size ":"2",
    "Project Description - ": "Network Health Analysis Developer-Dynamically Populating Alarms Data via WebSocket on the Front End.",
    "Responsibilities and Contribution ":`- Auto subscribing Events via  JMS for reduced databse query  - Customized WebPush API’s - Rest Interface-RestEasy - Esper      Event System - Java Enterprise Beans, Remote Injection. - UI Java Script - Data Base-postgresssql - Building Tool Maven - Design Analysis and Estimations`
};

var firstTableData = { 
    "Project-NHM Real time kpi Developer(Duration 8 months at onsite location) ": "",
     "Work Location":"Onsite Location, Athlone Ireland",
    "Role": "Software Engineer",
    "Team-Size":2,
    "Project-Description": "Introducing Real Time Key Performance Indicator Calculation should happen from Real Node data with in one minute.",
    "Responsibilities and Contribution-":`1) Building Design Solution for implementing real time performance indicator 2)  Three New Infinispan replicated Cache was introduced 3) User Cache for user subscription id for user and maintain 13 independent user for one hour session. 4) Performance Indicator cache to store  and avoid DB query. 5) Introducing New JMS Queue to send data to next service i.e. mediation layer where single instance of counter is maintained. 6)) Timer Service to query data every minute to MOCI via camel flow. 7)Auto subscribing Events via  JMS for reduced databse. 8)Creating Genric KPI Calculation Handler. 9) Dynamically Populating Calculated Data via WebSocket on the Front End.`,
};

var fourthTableData = {
     "Personal Details":"",
     "Name":"Suyash Gupta",
     "Email":"suguptayash@gmail.com",
      "phone":"8290828725",
    "Location": "Wipro Bangalore, (client-Ericsson)",
    "Role": "Software Engineer",
    "D.O.B":"19-05-1993"
};

var fifthTableData = {
    "Project-FLS Providing File Lookup Service For Node Side Data":"",
    "Work Location":"Onsite Location, Athlone Ireland",
     "Role":"Software Engineer",
     "Team-Size":2,
    "Project-Description": "Introducing File Lookup Service For Exposing Node Side Data",
    "Responsibilities and Contribution-":`1) Postgres DB was introduced to contain file location 2) Rest Easy Interface to expose file location to clients 3) Handling Duplicate Files. 4) Create File System When DB service is down 6) File deletion after expiry `}



var firstBulletSection = {"Other projects and work Experience": ["Docker Environment Setup For Testing-Vertical Slice along with shell scrip automation for ENM Projects","4 Months of Network administrator (Routing ) Experience at E&Y Financials, Gurugram.",
" 2 month experience in Java,SQL and Linux at Alchemy Solutions, Bangalore for Dell incorporation.",
"4 month freelancing projects and Hobby project on java,html,linux and wordpress in my college days, build automated Student Exam result and Notifications Email WorkFlow using Google Script API"]};

var secondBulletSection = {"Technical Exposure": ["Work Experience in CoreJava & J2EE (EJB, JMS, Apache Camel, EPS) , Server(Jboss, Apache HTTP Server, NodeJs)","Other Languages: JavaScript HTML, CSS, Bootstrap, ShellScript, Python, SQL, Postgres DB.","Operating System: Linux(RHEL, Ubuntu and Debian Flavors)", "Successfully completed Training on Routing,Switching,Android, Android Studio with API of Parse.com"]};


var thirdBulletSection = {"Self Disciplined Online Trainings":["Intro to computer science course (python) from udacity.com website and learned basic search engine coding.", "Completed Linux Foundation course from edx.org website (Scored 100%)", "Completed Android development on teamtreehouse.com .(Scored 2340 points)", "Completed WordPress theme development on teamtreehouse.com(Scored 1128 points )"]};

var fourthBulletSection = {"Educational Background":["B.Tech in Electronics and Communication from RTU in 2015", "Completed senior secondary from CBSE in PCM."]};


var fifthBulletSection = {"Strengths & Activities":["Like research work and reading technologies, runs own youtube channel and facebook page for teaching.", "Good command over Mathematics, Physics and debugging skills.","Play cricket, chess and do Meditation."]};


var elmt = buildElement("div", "topImage");
addClassToElement(elmt, "topImageClass");
attachElement(elmt, "mainBody");
buildImage("myDP","myImageClass", "./Suyash2.jpg", "topImage");
buildImage("copyTag","copyTagClass", "./CopyButton.jpg", "topImage");

 

buildSections("div", "hiddenContact", "mainBody", "hiddenClass",  contactDetails );
buildSections("div", "copyContact", "mainBody", "hiddenClass",  copyContactDetails );
breakLineDiv("firstBreak", "hr");


buildSectionWithHeading(firstDivWithHeading, "firstDiv", "mainBody", "divClass");
breakLineDiv("secondBreak","br");

buildSectionWithHeading(secondDivWithHeading, "secondDiv", "mainBody", "divClass");
breakLineDiv("thirdBreak","hr");

buildSectionWithHeading(thirdDivWithHeading, "thirdDiv", "mainBody", "divClass");

buildTable(firstTableData,  "firstTable");
breakLineDiv("fourthBreak","hr");

buildTable(secondTableData, "secondTable");
breakLineDiv("fifthhBreak","hr");

buildTable(thirdTableData, "thirdTable");
breakLineDiv("sixthBreak","hr");

buildTable(fifthTableData,  "seventhTable");
breakLineDiv("seventhBreak","hr");

buildBulletSection(secondBulletSection,"secondBulletSection", "bulletSection", "mainBody");
buildBulletSection(firstBulletSection,"firstBulletSection", "bulletSection", "mainBody");
buildBulletSection(fifthBulletSection,"fifthBulletSection", "bulletSection", "mainBody");
buildBulletSection(fourthBulletSection,"fourthBulletSection", "bulletSection", "mainBody");
buildBulletSection(thirdBulletSection,"thirdBulletSection", "bulletSection", "mainBody");



breakLineDiv("eightBreak","hr");
buildTable(fourthTableData, "fourthTable");

function buildImage(id,className, path, parentBody){
    var imageElemnt = buildElement('img', id);
	addClassToElement(imageElemnt, className);
    addImage(imageElemnt, path);
	attachElement(imageElemnt, parentBody);
}

function buildTable(tableData, id){
  var tableElement = buildElement("table",id);
  attachElement(tableElement, "mainBody");
  addClassToElement(tableElement, "myTable");
  buildTableData(tableData, id);
}


function buildBulletSection(bulletSection, id, className, parrentID){
    var elmt = buildElement('ul', id);
    addClassToElement(elmt, className);
    attachElement(elmt, parrentID);
    buildBullets(bulletSection, id, className);
}

function buildBullets(bulletSection, id, className){
    Object.keys(bulletSection).forEach(function(key) {
    addContentToElemnt(key, id);
     	 bulletSection[key].forEach(function(entry) {
		    var childId = "child" + id;
			  var childClassName = "child"+className;			
		    buildSections("li", childId, id, childClassName, entry);
        });
    });
}

function buildSections(type, idToBeCreated, parentElementId, className,  content){
    var elementBuilt = document.createElement(type);
	elementBuilt.classList.add(className);
    elementBuilt.id = idToBeCreated;
	if(content !== '' || content !== undefined){
		elementBuilt.innerHTML = content;
	}
    document.getElementById(parentElementId).appendChild(elementBuilt);
}




//addClassName("thirdBulletSection", "list-unstyled");
function addClassName(id, className){
	    document.getElementById(id).classList.add(className);
}

function addImage(element, imagePath){
	element.src= imagePath;
}

function breakLineDiv(id, type){
  
  var elmt = buildElement("div", id);
  addClassToElement(elmt, "breakDivsion");
  attachElement(elmt, "mainBody");
  
	var childId = "child"+id;
	
	var childElmt = buildElement(type, childId);
  addClassToElement(elmt, "newLine");
  attachElement(childElmt, "mainBody");
	
}

function buildSectionWithHeading(divSection, id, parrentID, className){
	Object.keys(divSection).forEach(function(key) {
		entry = divSection[key];
		var childId = "child" + id;
		if(key == "boldSection"){    
			var childClassName = "bold"+className;			
		    buildSections("div", childId, id, childClassName, entry);
        }else{
			buildSections("div", id, parrentID, className, key);
			var childClassName = "child"+className;
			buildSections("div", childId, id, childClassName, entry);
		}	
	});
}



function buildTableData(tableData, id){
	Object.keys(tableData).forEach(function(key) {
		ceateRowforTable(id, key, tableData[key])
	});
}

function ceateRowforTable(id,  cellOne, cellSecond){

	var table = document.getElementById(id);
	if(cellOne !== "" && cellSecond !== ""){
		var row = table.insertRow(-1);
		var firstCell = row.insertCell(0);
		var secondCell = row.insertCell(1);
		
		addClassToElement(row, "twoCellRow");
	  addClassToElement(firstCell,"tableCell");
	  addClassToElement(secondCell,"tableCell");
		
		firstCell.innerHTML = cellOne;
		secondCell.innerHTML = cellSecond;
	} else if(cellOne !== "" && cellSecond === ""){
		var row = table.insertRow(-1);
		var firstCell = row.insertCell(0);
		
		addClassToElement(row, "oneCellRow");
	  addClassToElement(firstCell,"singleCell");
		firstCell.innerHTML = cellOne;
		
	}
}

function buildElement(type, idToBeCreated){
    var elementBuilt = document.createElement(type);
	elementBuilt.id = idToBeCreated;
	return elementBuilt;
}

function attachElement(elementToBeAttached, parentElementId){
     document.getElementById(parentElementId).appendChild(elementToBeAttached);
}

function addContentToElemnt(content, elementId){
    if(content != '' || content != undefined){
		document.getElementById(elementId).innerHTML = content;
	} 
}

function addClass(elementId, className){
   document.getElementById(elementId).classList.add(className);
}

function addClassToElement(element, className){
   element.classList.add(className);
}

function makeElementInline(elementId){
    document.getElementById(elementId).style.display='inline';
}


