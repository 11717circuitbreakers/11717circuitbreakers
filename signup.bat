@echo off
SET /P inputname= Please enter your full name: 
SET /P email= Please enter an email we can contact you at: 
SET /P interest= Please tell us why you are interested in robotics: 
SET /P parent= Could your parents be involved? How?: 
echo %inputname% at %email%, says "%interest%" about their interest in robotics, and "%parent%" about parent involvement. > "%userprofile%/desktop/robotics-school-demo/signup/%inputname%.txt"
