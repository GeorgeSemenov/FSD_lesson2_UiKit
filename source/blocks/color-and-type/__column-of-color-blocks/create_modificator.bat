@echo off
set grandParentName=color-and-type
set parentName=__column-of-color-blocks
set /p fileName=What would you create?
set newStyleSCSS=color-and-type__column-of-color-blocks.scss
mkdir %fileName%
(
echo @import '%fileName%/color-and-type__column-of-color-blocks%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
