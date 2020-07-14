@echo off
set grandParentName=checkbox-list
set parentName=__arrow-toggler
set /p fileName=What would you create?
set newStyleSCSS=checkbox-list__arrow-toggler.scss
mkdir %fileName%
(
echo @import '%fileName%/checkbox-list__arrow-toggler%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
