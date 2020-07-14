@echo off
set grandParentName=toggler-with-label
set parentName=__knob
set /p fileName=What would you create?
set newStyleSCSS=toggler-with-label__knob.scss
mkdir %fileName%
(
echo @import '%fileName%/toggler-with-label__knob%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
