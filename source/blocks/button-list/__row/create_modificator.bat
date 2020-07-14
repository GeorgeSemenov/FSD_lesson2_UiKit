@echo off
set grandParentName=button-list
set parentName=__row
set /p fileName=What would you create?
set newStyleSCSS=button-list__row.scss
mkdir %fileName%
(
echo @import '%fileName%/button-list__row%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
