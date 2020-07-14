@echo off
set grandParentName=like-button
set parentName=__image
set /p fileName=What would you create?
set newStyleSCSS=like-button__image.scss
mkdir %fileName%
(
echo @import '%fileName%/like-button__image%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
