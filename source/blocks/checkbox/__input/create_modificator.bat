@echo off
set grandParentName=checkbox
set parentName=__input
set /p fileName=What would you create?
set newStyleSCSS=checkbox__input.scss
mkdir %fileName%
(
echo @import '%fileName%/checkbox__input%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
