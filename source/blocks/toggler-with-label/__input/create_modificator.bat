@echo off
set grandParentName=toggler-with-label
set parentName=__input
set /p fileName=What would you create?
set newStyleSCSS=toggler-with-label__input.scss
mkdir %fileName%
(
echo @import '%fileName%/toggler-with-label__input%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
