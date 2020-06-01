@echo off
set grandParentName=checkbox-list
set parentName=__header
set /p fileName=What would you create?
set newStyleSCSS=checkbox-list__header.scss
mkdir %fileName%
(
echo @import '%fileName%/checkbox-list__header%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
