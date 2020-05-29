@echo off
set grandParentName=pagination
set parentName=__header
set /p fileName=What would you create?
set newStyleSCSS=pagination__header.scss
mkdir %fileName%
(
echo @import '%fileName%/pagination__header%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
