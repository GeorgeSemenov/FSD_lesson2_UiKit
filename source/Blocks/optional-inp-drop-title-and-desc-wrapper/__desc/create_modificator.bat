@echo off
set grandParentName=optional-inp-drop-title-and-desc-wrapper
set parentName=__desc
set /p fileName=What would you create?
set newStyleSCSS=optional-inp-drop-title-and-desc-wrapper__desc.scss
mkdir %fileName%
(
echo @import '%fileName%/optional-inp-drop-title-and-desc-wrapper__desc%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
