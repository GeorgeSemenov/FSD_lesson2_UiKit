@echo off
set grandParentName=like-button
set parentName=__wrapper
set /p fileName=What would you create?
set newStyleSCSS=like-button__wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/like-button__wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
