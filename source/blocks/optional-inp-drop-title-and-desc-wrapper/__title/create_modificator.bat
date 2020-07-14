@echo off
set grandParentName=optional-inp-drop-title-and-desc-wrapper
set parentName=__title
set /p fileName=What would you create?
set newStyleSCSS=optional-inp-drop-title-and-desc-wrapper__title.scss
mkdir %fileName%
(
echo @import '%fileName%/optional-inp-drop-title-and-desc-wrapper__title%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
