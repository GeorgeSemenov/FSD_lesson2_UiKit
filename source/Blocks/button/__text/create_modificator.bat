@echo off
set grandParentName=button
set parentName=__text
set /p fileName=What would you create?
set newStyleSCSS=button__text.scss
mkdir %fileName%
(
echo @import '%fileName%/button__text%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
