@echo off
set grandParentName=togglers-list
set parentName=__item
set /p fileName=What would you create?
set newStyleSCSS=togglers-list__item.scss
mkdir %fileName%
(
echo @import '%fileName%/togglers-list__item%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
