@echo off
set grandParentName=checkbox
set parentName=__inner-space
set /p fileName=What would you create?
set newStyleSCSS=checkbox__inner-space.scss
mkdir %fileName%
(
echo @import '%fileName%/checkbox__inner-space%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
