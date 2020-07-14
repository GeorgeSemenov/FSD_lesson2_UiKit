@echo off
set grandParentName=dropdown-with-math-field
set parentName=__item-button-container
set /p fileName=What would you create?
set newStyleSCSS=dropdown-with-math-field__item-button-container.scss
mkdir %fileName%
(
echo @import '%fileName%/dropdown-with-math-field__item-button-container%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
