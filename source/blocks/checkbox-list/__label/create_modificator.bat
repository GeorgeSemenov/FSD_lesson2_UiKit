@echo off
set grandParentName=checkbox-list
set parentName=__label
set /p fileName=What would you create?
set newStyleSCSS=checkbox-list__label.scss
mkdir %fileName%
(
echo @import '%fileName%/checkbox-list__label%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
