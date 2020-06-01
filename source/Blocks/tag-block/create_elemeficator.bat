@echo off
set parentName=tag-block
set /p fileName=What would you create?
mkdir %fileName%
rem Создаём пятёрку балванок, первая будет указывать был ли в цепи блок элемент модификатор создан элемент, а вторая будет содержать символ с которым будут сравнивать,
rem ну а третья будет содержать интерисующий нас символ в имени елементофикатора из fileName ,будет скопированная строка начиная со второго символа, т.к. счёт симоволов начинается с 0, а у тебя указанно 1 и длинной в 1 символ
rem и ещё для сравнения создадим переменную True которая будет содержать строку true, дело в том, что cmd повзваляет сравнивать только пременные, и у него нет булевых, поэтому приходится извращяться
set isThereElement=false
set ans=_
set zero=0
set secondSymbol=%fileName:~1,1%
set True=true
rem /I означает что не будет сравниваться по регистру
rem если второй символ fileName является нижним подчёркиванием, значит создаётся элеменет
rem Похоже если я инициализирую переменную в условном теле, т.е. внутри блока if то он просто не видит эту переменную, я также пробовал определить вне блока, а потом иницализировать, почему то это не получилось, фигня какая то
set isThereNeedPugFile= 0
if /I %secondSymbol% == %ans% (
	set isThereElement=true
	set /p isThereNeedPugFile=Do you need a pug file one or zero
	rem подключаем инклуды в начало pug файла у нашего блока, для этого создаём новый файл в него записываем инклуд, затем добавляем содержимое нашего PUG файла и затем копируем содержимое нового файла в PUG с замещением а новый файл удаляем к чертям собачьим
	rem если нужен pug file то условный оператор всё обработает
	rem NEQ - значит неравное, просто тут нет оператора != поэтому приходится использовать это
)
echo isThereNeedPugFile = %isThereNeedPugFile% , zero = %zero%
if /I %isThereNeedPugFile% NEQ %zero% (
	(
	echo include %filename%/tag-block%filename%.pug
	)> newFile.pug
	type tag-block.pug >> newFile.pug
	move /Y newFile.pug  tag-block.pug
	(
	echo mixin %parentName%%fileName%^(modifier^)
	echo   .%parentName%%fileName%^&attributes^(attributes^)
	)>%fileName%/%parentName%%fileName%.pug
	echo pug file created	
)
echo 35
(
echo @import '%fileName%/tag-block%fileName%';
)>>tag-block.scss
cd %fileName%
(
echo .%parentName%%fileName% {}
)>%parentName%%fileName%.scss
if  /I %isThereElement% == %True% (
(
	echo @echo off
	echo set grandParentName=tag-block
	echo set parentName=%fileName%
	echo set /p fileName=What would you create?
	echo set newStyleSCSS=tag-block%fileName%.scss
	echo mkdir %%fileName%%
	echo ^(
	echo echo @import '%%fileName%%/tag-block%fileName%%%fileName%%';
	echo ^)^>^>%%newStyleSCSS%%
	echo cd %%fileName%%
	echo ^(
	echo echo .%%grandParentName%%%%parentName%%%%fileName%% {}
	echo ^)^>%%grandParentName%%%%parentName%%%%fileName%%.scss
)>>create_modificator.bat
)
