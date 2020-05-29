@echo off
set grandParentName=button-list
set parentName=__header
set /p fileName=What would you create?
set newStyleSCSS=button-list__header.scss
mkdir %fileName%
(
echo @import '%fileName%/button-list__header%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
