@echo off
set grandParentName=dropdown-with-math-field
set parentName=__item-math-field
set /p fileName=What would you create?
set newStyleSCSS=dropdown-with-math-field__item-math-field.scss
mkdir %fileName%
(
echo @import '%fileName%/dropdown-with-math-field__item-math-field%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
