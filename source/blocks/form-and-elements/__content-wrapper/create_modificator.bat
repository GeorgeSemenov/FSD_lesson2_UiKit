@echo off
set grandParentName=form-and-elements
set parentName=__content-wrapper
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__content-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__content-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
@echo off
set grandParentName=form-and-elements
set parentName=__content-wrapper
set /p fileName=What would you create?
set newStyleSCSS=form-and-elements__content-wrapper.scss
mkdir %fileName%
(
echo @import '%fileName%/form-and-elements__content-wrapper%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
