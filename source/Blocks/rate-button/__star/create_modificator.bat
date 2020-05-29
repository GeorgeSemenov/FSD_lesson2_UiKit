@echo off
set grandParentName=rate-button
set parentName=__star
set /p fileName=What would you create?
set newStyleSCSS=rate-button__star.scss
mkdir %fileName%
(
echo @import '%fileName%/rate-button__star%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
