@echo off
set grandParentName=range-slider
set parentName=__slider
set /p fileName=What would you create?
set newStyleSCSS=range-slider__slider.scss
mkdir %fileName%
(
echo @import '%fileName%/range-slider__slider%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
