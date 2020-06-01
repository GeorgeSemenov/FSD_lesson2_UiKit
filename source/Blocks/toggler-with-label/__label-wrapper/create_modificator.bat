@echo off
set grandParentName=toggler-with-label
set parentName=__label-wrapper
set /p fileName=What would you create?
set newStyleSCSS=toggler-with-label__label-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/toggler-with-label__label-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
