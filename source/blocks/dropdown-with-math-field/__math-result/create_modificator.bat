@echo off
set grandParentName=dropdown-with-math-field
set parentName=__math-result
set /p fileName=What would you create?
set newStyleSCSS=dropdown-with-math-field__math-result.scss
mkdir %fileName%
(
echo @import '%fileName%/dropdown-with-math-field__math-result%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
