@echo off
set grandParentName=form-and-elements
set parentName=__dropdown-row-column
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__dropdown-row-column.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__dropdown-row-column%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
