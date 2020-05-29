@echo off
set grandParentName=button-list
set parentName=__rows-wrapper
set /p fileName=What would you create?
set newStyleSCSS=button-list__rows-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/button-list__rows-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
