@echo off
set grandParentName=dropdown-with-math-field
set parentName=__math-operation
set /p fileName=What would you create?
set newStyleSCSS=dropdown-with-math-field__math-operation.scss
mkdir %fileName%
(
echo @import '%fileName%/dropdown-with-math-field__math-operation%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
