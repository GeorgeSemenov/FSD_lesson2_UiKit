@echo off
set grandParentName=radio-buttons-list
set parentName=__input
set /p fileName=What would you create?
set newStyleSCSS=radio-buttons-list__input.scss
mkdir %fileName%
(
echo @import '%fileName%/radio-buttons-list__input%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
