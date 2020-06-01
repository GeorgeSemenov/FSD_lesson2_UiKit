@echo off
set grandParentName=color-and-type
set parentName=__column-of-tag-blocks
set /p fileName=What would you create?
set newStyleSCSS=color-and-type__column-of-tag-blocks.scss
mkdir %fileName%
(
echo @import '%fileName%/color-and-type__column-of-tag-blocks%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
