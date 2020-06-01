@echo off
set grandParentName=checkbox-list
set parentName=__header-wrapper
set /p fileName=What would you create?
set newStyleSCSS=checkbox-list__header-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/checkbox-list__header-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
