@echo off
set grandParentName=dropdown-with-math-field
set parentName=__item-text
set /p fileName=What would you create?
set newStyleSCSS=dropdown-with-math-field__item-text.scss
mkdir %fileName%
(
echo @import '%fileName%/dropdown-with-math-field__item-text%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
