@echo off
set grandParentName=form-and-elements
set parentName=__lists-row
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__lists-row.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__lists-row%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
