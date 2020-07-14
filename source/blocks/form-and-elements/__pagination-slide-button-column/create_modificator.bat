@echo off
set grandParentName=form-and-elements
set parentName=__pagination-slide-button-column
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__pagination-slide-button-column.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__pagination-slide-button-column%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
