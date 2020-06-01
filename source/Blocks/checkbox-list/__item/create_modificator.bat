@echo off
set grandParentName=checkbox-list
set parentName=__item
set /p fileName=What would you create?
set newStyleSCSS=checkbox-list__item.scss
mkdir %fileName%
(
echo @import '%fileName%/checkbox-list__item%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
