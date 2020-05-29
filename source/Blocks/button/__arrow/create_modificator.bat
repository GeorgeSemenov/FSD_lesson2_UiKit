@echo off
set grandParentName=button
set parentName=__arrow
set /p fileName=What would you create?
set newStyleSCSS=button__arrow.scss
mkdir %fileName%
(
echo @import '%fileName%/button__arrow%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
