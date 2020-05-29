@echo off
set grandParentName=pagination
set parentName=__pagination-item
set /p fileName=What would you create?
set newStyleSCSS=pagination__pagination-item.scss
mkdir %fileName%
(
echo @import '%fileName%/pagination__pagination-item%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
