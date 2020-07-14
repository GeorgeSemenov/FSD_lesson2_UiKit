@echo off
set grandParentName=radio-buttons-list
set parentName=__options-list
set /p fileName=What would you create?
set newStyleSCSS=radio-buttons-list__options-list.scss
mkdir %fileName%
(
echo @import '%fileName%/radio-buttons-list__options-list%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
