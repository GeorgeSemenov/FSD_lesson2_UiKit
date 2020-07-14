@echo off
set grandParentName=dropdown-with-math-field
set parentName=__button-apply
set /p fileName=What would you create?
set newStyleSCSS=dropdown-with-math-field__button-apply.scss
mkdir %fileName%
(
echo @import '%fileName%/dropdown-with-math-field__button-apply%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
