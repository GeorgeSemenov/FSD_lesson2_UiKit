@echo off
set grandParentName=color-and-type
set parentName=__color-block
set /p fileName=What would you create?
set newStyleSCSS=color-and-type__color-block.scss
mkdir %fileName%
(
echo @import '%fileName%/color-and-type__color-block%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
