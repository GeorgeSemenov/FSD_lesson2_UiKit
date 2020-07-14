@echo off
set grandParentName=text-field
set parentName=__header
set /p fileName=What would you create?
set newStyleSCSS=text-field__header.scss
mkdir %fileName%
(
echo @import '%fileName%/text-field__header%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
