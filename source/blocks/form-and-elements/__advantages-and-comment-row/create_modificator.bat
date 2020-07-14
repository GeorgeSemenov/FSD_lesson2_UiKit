@echo off
set grandParentName=form-and-elements
set parentName=__advantages-and-comment-row
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__advantages-and-comment-row.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__advantages-and-comment-row%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
