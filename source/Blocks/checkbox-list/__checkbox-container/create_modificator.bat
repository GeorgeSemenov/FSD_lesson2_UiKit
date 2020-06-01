@echo off
set grandParentName=checkbox-list
set parentName=__checkbox-container
set /p fileName=What would you create?
set newStyleSCSS=checkbox-list__checkbox-container.scss
mkdir %fileName%
(
echo @import '%fileName%/checkbox-list__checkbox-container%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
