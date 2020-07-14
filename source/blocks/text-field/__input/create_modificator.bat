@echo off
set grandParentName=text-field
set parentName=__input
set /p fileName=What would you create?
set newStyleSCSS=text-field__input.scss
mkdir %fileName%
(
echo @import '%fileName%/text-field__input%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
