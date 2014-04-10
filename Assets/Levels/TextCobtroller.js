var isNewGameButton = false; 
var isOptionsButton = false; 
var isQualityButtonFastest = false;   
var isQualityButtonFantastic = false;   
var isMainMenuButton = false; 
var isQuitButton = false;   
var camera1:Camera;   
var camera2:Camera;   
function OnMouseEnter()   
{   
//color.X - any color that you like 
renderer.material.color = Color.gray;   
}   
function OnMouseExit()   
{   
//color.X - any color that you like 
renderer.material.color = Color.white;   
}   
function OnMouseUp()   
{   
if ( isQuitButton )   
{   
Application.Quit();   
}   
else if ( isQualityButtonFastest )   
{   
QualitySettings.currentLevel = QualityLevel.Fastest;   
}   
else if ( isQualityButtonFantastic )   
{   
QualitySettings.currentLevel = QualityLevel.Fantastic;   
}   
else if ( isNewGameButton ) 
{   
//it can be any level 
Application.LoadLevel (1);   
} 
else if ( isOptionsButton )   
{   
camera1.enabled = false;   
camera2.enabled = true;   
} 
else if ( isMainMenuButton ) 
{ 
//майн меню level 
Application.LoadLevel (0);   
} 
}