@echo off
set grandParentName=dropdown-with-math-field
set parentName=__item
set /p fileName=What would you create?
set newStyleSCSS=dropdown-with-math-field__item.scss
mkdir %fileName%
(
echo @import '%fileName%/dropdown-with-math-field__item%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
