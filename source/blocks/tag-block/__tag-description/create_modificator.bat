@echo off
set grandParentName=tag-block
set parentName=__tag-description
set /p fileName=What would you create?
set newStyleSCSS=tag-block__tag-description.scss
mkdir %fileName%
(
echo @import '%fileName%/tag-block__tag-description%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
