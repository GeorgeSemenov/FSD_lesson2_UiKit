@echo off
set grandParentName=range-slider
set parentName=__numbers-display-field
set /p fileName=What would you create?
set newStyleSCSS=range-slider__numbers-display-field.scss
mkdir %fileName%
(
echo @import '%fileName%/range-slider__numbers-display-field%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
