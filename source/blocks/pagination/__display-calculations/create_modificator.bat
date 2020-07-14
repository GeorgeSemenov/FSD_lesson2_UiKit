@echo off
set grandParentName=pagination
set parentName=__display-calculations
set /p fileName=What would you create?
set newStyleSCSS=pagination__display-calculations.scss
mkdir %fileName%
(
echo @import '%fileName%/pagination__display-calculations%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
