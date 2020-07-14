@echo off
set grandParentName=dropdown-with-math-field
set parentName=__title-and-desc-wrapper
set /p fileName=What would you create?
set newStyleSCSS=dropdown-with-math-field__title-and-desc-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/dropdown-with-math-field__title-and-desc-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
