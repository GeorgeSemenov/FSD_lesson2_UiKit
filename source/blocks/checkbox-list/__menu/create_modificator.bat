@echo off
set grandParentName=checkbox-list
set parentName=__menu
set /p fileName=What would you create?
set newStyleSCSS=checkbox-list__menu.scss
mkdir %fileName%
(
echo @import '%fileName%/checkbox-list__menu%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
