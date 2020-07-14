@echo off
set grandParentName=range-slider
set parentName=__header
set /p fileName=What would you create?
set newStyleSCSS=range-slider__header.scss
mkdir %fileName%
(
echo @import '%fileName%/range-slider__header%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
