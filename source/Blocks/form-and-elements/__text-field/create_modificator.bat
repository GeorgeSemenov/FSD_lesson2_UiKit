@echo off
set grandParentName=form-and-elements
set parentName=__text-field
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__text-field.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__text-field%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
