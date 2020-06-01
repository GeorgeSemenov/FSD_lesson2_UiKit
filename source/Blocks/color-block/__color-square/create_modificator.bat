@echo off
set grandParentName=color-block
set parentName=__color-square
set /p fileName=What would you create?
set newStyleSCSS=color-block__color-square.scss
mkdir %fileName%
(
echo @import '%fileName%/color-block__color-square%fileName%'^;
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
