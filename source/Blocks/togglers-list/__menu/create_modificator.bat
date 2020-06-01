@echo off
set grandParentName=togglers-list
set parentName=__menu
set /p fileName=What would you create?
set newStyleSCSS=togglers-list__menu.scss
mkdir %fileName%
(
echo @import '%fileName%/togglers-list__menu%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
