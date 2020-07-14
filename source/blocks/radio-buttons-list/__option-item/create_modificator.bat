@echo off
set grandParentName=radio-buttons-list
set parentName=__option-item
set /p fileName=What would you create?
set newStyleSCSS=radio-buttons-list__option-item.scss
mkdir %fileName%
(
echo @import '%fileName%/radio-buttons-list__option-item%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
