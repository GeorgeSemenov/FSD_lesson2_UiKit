@echo off
set grandParentName=form-and-elements
set parentName=__reviews-wrapper
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__reviews-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__reviews-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
