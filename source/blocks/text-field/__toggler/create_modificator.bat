@echo off
set grandParentName=text-field
set parentName=__toggler
set /p fileName=What would you create?
set newStyleSCSS=text-field__toggler.scss
mkdir %fileName%
(
echo @import '%fileName%/text-field__toggler%fileName%';
)>>%newStyleSCSS%
cd %fileName%
(
echo .%grandParentName%%parentName%%fileName% {}
)>%grandParentName%%parentName%%fileName%.scss
