@echo off
set grandParentName=like-button-list
set parentName=__like-button
set /p fileName=What would you create?
set newStyleSCSS=like-button-list__like-button.scss
mkdir %fileName%
(
echo @import '%fileName%/like-button-list__like-button%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
