@echo off
set grandParentName=like-button-list
set parentName=__menu
set /p fileName=What would you create?
set newStyleSCSS=like-button-list__menu.scss
mkdir %fileName%
(
echo @import '%fileName%/like-button-list__menu%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
