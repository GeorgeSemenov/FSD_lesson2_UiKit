@echo off
set grandParentName=tag-block
set parentName=__tag-name
set /p fileName=What would you create?
set newStyleSCSS=tag-block__tag-name.scss
mkdir %fileName%
(
echo @import '%fileName%/tag-block__tag-name%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
