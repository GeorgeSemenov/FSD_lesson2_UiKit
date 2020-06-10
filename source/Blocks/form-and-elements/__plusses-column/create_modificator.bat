@echo off
set grandParentName=form-and-elements
set parentName=__plusses-column
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__plusses-column.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__plusses-column%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
