@echo off
set parentName=color-block
set /p fileName=What would you create?
mkdir %fileName%
rem Создаём пятёрку балванок, первая будет указывать был ли в цепи блок элемент модификатор создан элемент, а вторая будет содержать символ с которым будут сравнивать,
rem ну а третья будет содержать интерисующий нас символ в имени елементофикатора из fileName ,будет скопированная строка начиная со второго символа, т.к. счёт симоволов начинается с 0, а у тебя указанно 1 и длинной в 1 символ
rem и ещё для сравнения создадим переменную True которая будет содержать строку true, дело в том, что cmd повзваляет сравнивать только пременные, и у него нет булевых, поэтому приходится извращяться
set isThereElement=false
set ans=_
set secondSymbol=%fileName:~1,1%
set True=true
rem /I означает что не будет сравниваться по регистру
rem если второй символ fileName является нижним подчёркиванием, значит создаётся элеменет
if /I %secondSymbol% == %ans% (
set isThereElement=true
rem подключаем инклуды в начало pug файла у нашего блока, для этого создаём новый файл в него записываем инклуд, затем добавляем содержимое нашего PUG файла и затем копируем содержимое нового файла в PUG с замещением а новый файл удаляем к чертям собачьим
(
echo include %filename%/color-block%filename%.pug
)> newFile.pug
type color-block.pug >> newFile.pug
move /Y newFile.pug  color-block.pug
(
echo mixin %parentName%%fileName%^(modifier^)
echo %TAB%.%parentName%%fileName%^&attributes^(attributes^)
)>%fileName%/%parentName%%fileName%.pug
)
(
echo @import '%fileName%/color-block%fileName%';
)>>color-block.scss
cd %fileName%
(
echo .%parentName%%fileName% {}
)>%parentName%%fileName%.scss
if  /I %isThereElement% (
(
echo @echo off
echo set grandParentName=color-block
echo set parentName=%fileName%
echo set /p fileName=What would you create?
echo set newStyleSCSS=color-block%fileName%.scss
echo mkdir %%fileName%%
echo ^(
echo echo @import '%%fileName%%/color-block%fileName%%%fileName%%'
echo ^)^>^>%%newStyleSCSS%%
echo cd %%fileName%%
echo ^(
echo echo .%%grandParentName%%%%parentName%%%%fileName%% {}
echo ^)^>%%grandParentName%%%%parentName%%%%fileName%%.scss
)>>create_modificator.bat
)
