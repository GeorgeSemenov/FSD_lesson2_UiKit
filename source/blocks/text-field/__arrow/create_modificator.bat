@echo off
set grandParentName=text-field
set parentName=__arrow
set /p fileName=What would you create?
set newStyleSCSS=text-field__arrow.scss
mkdir %fileName%
(
echo @import '%fileName%/text-field__arrow%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
