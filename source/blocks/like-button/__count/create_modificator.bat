@echo off
set grandParentName=like-button
set parentName=__count
set /p fileName=What would you create?
set newStyleSCSS=like-button__count.scss
mkdir %fileName%
(
echo @import '%fileName%/like-button__count%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
