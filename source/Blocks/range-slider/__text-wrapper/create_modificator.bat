@echo off
set grandParentName=range-slider
set parentName=__text-wrapper
set /p fileName=What would you create?
set newStyleSCSS=range-slider__text-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/range-slider__text-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
