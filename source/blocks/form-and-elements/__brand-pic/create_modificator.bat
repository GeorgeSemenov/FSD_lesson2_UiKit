@echo off
set grandParentName=form-and-elements
set parentName=__brand-pic
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__brand-pic.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__brand-pic%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
