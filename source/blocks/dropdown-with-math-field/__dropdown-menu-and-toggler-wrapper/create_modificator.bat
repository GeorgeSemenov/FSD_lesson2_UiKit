@echo off
set grandParentName=dropdown-with-math-field
set parentName=__dropdown-menu-and-toggler-wrapper
set /p fileName=What would you create?
set newStyleSCSS=dropdown-with-math-field__dropdown-menu-and-toggler-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/dropdown-with-math-field__dropdown-menu-and-toggler-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
