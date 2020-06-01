@echo off
set grandParentName=form-and-elements
set parentName=__dropdown-row
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__dropdown-row.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__dropdown-row%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
