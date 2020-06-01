@echo off
set grandParentName=text-field
set parentName=__property
set /p fileName=What would you create?
set newStyleSCSS=text-field__property.scss
mkdir %fileName%
(
echo @import '%fileName%/text-field__property%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
