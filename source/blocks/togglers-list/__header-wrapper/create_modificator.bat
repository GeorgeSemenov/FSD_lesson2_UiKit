@echo off
set grandParentName=togglers-list
set parentName=__header-wrapper
set /p fileName=What would you create?
set newStyleSCSS=togglers-list__header-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/togglers-list__header-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
