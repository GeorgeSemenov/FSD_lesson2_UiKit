@echo off
set grandParentName=form-and-elements
set parentName=__buttons-block
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__buttons-block.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__buttons-block%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
