@echo off
set grandParentName=color-and-type
set parentName=__brand-pic
set /p fileName=What would you create?
set newStyleSCSS=color-and-type__brand-pic.scss
mkdir %fileName%
(
echo @import '%fileName%/color-and-type__brand-pic%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
