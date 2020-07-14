@echo off
set grandParentName=radio-buttons-list
set parentName=__header-wrapper
set /p fileName=What would you create?
set newStyleSCSS=radio-buttons-list__header-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/radio-buttons-list__header-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
