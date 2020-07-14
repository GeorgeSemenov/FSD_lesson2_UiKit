@echo off
set grandParentName=pagination
set parentName=__content
set /p fileName=What would you create?
set newStyleSCSS=pagination__content.scss
mkdir %fileName%
(
echo @import '%fileName%/pagination__content%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
