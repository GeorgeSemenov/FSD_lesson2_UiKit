@echo off
set grandParentName=rate-button
set parentName=__line
set /p fileName=What would you create?
set newStyleSCSS=rate-button__line.scss
mkdir %fileName%
(
echo @import '%fileName%/rate-button__line%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
