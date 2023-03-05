# blessyou

Для разработки проекта - клонируем с репозитория.

Далее:

#Frontend

1. переходим в папку front
2. Для установки зависимостей, запускаем в терминале командe
   npm i --force
3. Запускаем проект командой
   npm start

#Backend

Ребят, напишите мини-инструкцию для бэкендеров)

#Frontend
Некоторые рекомендации по написанию кода для фронтенда:

1. Статические файлы проекта, такие как иконки с макета и изображения, например баннер, сохраняем в папке static в соответствующих папках.

2. Общие стили макета, например варианты цвета текста, будут в файле themes.

3. Имена классов, переменных, функциий и т.п пишем в camelCase и как можно понятнее. напр headerButtonLink

4. Вместо написания одного большого файла стараемся декомпозировать на несколько небольших файлов.

5. Для каждого большого компонента проекта, например header, footer, ЛК пациента и другие, заводим отдельную папку с именем компонента.
   В этой папке также создаем файл со стилями , который будет вклчать стили файлов данной папки.
   Общие стили проекта лежат в корне папки front в файле
   style.css

6. Какие-либо библиотеки добавляем в проект только после обсуждения с коллегами.

7. Переиспользуемы компоненты храняться в папке commomComponents

#API для использования

\*Основной API адрес запросов
https://blessyou-clinic.ru/api

- АПИ для получения списка врачей
  "GET" /api/doctors/

- Апи для получения полных фоторграфий докторов  
   GET" /storage/doctor/${name_image.jpg}
  на данный момент имя фото получаем в свойстве avatar_path

- Апи для получения аватаров докторов для карточек в карусели
  "GET" /storage/doctor_avatar/${name_image.png}

на данный момент имя фото получаем в свойстве avatar_path

- АПИ для получения картинок отделений
  "GET" /storage/department/{name_image.jpg}

- АПИ для регистрации пользователя
  "POST" /api/patient-register

  струтура запроса на данный момент : {
  'name': 'string',
  'surname': 'string',
  'patronymic': 'string',
  'email': 'string@mail.com',
  'password': 'string',
  }

  регистрирует и логинит user, в db сохраняет:
  users: 'email': 'string@mail.com',
  'password': 'string',
  patients: 'name': 'string',
  'surname': 'string',
  'patronimyc': 'string',

  возвращает: {
  "message": "Пациент успашно добавлен",
  "id": number //(зарегестрированого юзера)
  status: 201
  }

-АПИ для получения данных зарегистрированного(залогиненого) пациента:
"GET" /patient-private/{id}

принимает {id} (на фронте ${id}) - id зарегистрированного(залогиненного) юзера

возвращает все данные из таблицы users и связанной с ней patients:
users: {email,phone,is_patient(1),is_admin(0),is_doctor(0),is_employee(0)}
patients: {id,name,surname,patronymic} (у пациента пока только эти поля, дольше будем добавлять)

-АПИ для добавления,чтения пациентов связаных с зарегестрированным пациентом 
(работают только когда пациент авторизировался):
--"POST" 'add-relative/{id}'
принимает id юзера (именно юзера!) связанного с пациентом из личного кабинета которого идет запрос
струтура запроса на данный момент : {
  'name': 'string',
  'surname': 'string',
  'patronymic': 'string',
  'birthday': 'date',
  }

  регистрирует и связывает с user авторизированного пациента, в db сохраняет:
  patients: 
  'name': 'string',
  'surname': 'string',
  'patronimyc': 'string',
  'birthday': 'date',
  'user_id': id user авторизированного пациента

  возвращает: {
  "message": "Пациент успашно добавлен",
  "id": number //(юзера авторизированного пациента)
  status: 201
  }
  
--"GET" '/patient-relatives/{id}'
принимает id юзера (именно юзера!) связанного с пациентом из личного кабинета которого идет запрос 

возвращает всех пациентов связаных с авторизованным в данный момент пациентом:
patients: {id,name,surname,patronymic,birthday}

--"GET" '/edit-relative/{id}'

принимает {id} (на фронте ${id}) - id связанного пациента

возвращает донные связанного пациента:
patients: {id,name,surname,patronymic,birthday}

--"PUT" 'update-relative/{id}'

принимает {id} (на фронте ${id}) - id связанного пациента
и измененные/неизмененные данные
data : {
  'name': 'string',
  'surname': 'string',
  'patronymic': 'string',
  'birthday': 'date',
  }

  обновляет данные в таблице patients: 
  {name,surname,patronymic,birthday}

  возвращает: {
  'message': 'Данные успешно обновлены',
  'status' : 200
  }
  
-АПИ для деавторизацию юзера
--"POST" 'logout'
возвращает:
'message' => 'logout successful', 'status' => 200;
если никто небыл авторизован: 'message' => 'Пользователь не авторизован'

-АПИ для работы с моделью Doctor:
--GET /doctors
возвращает всех докторов все поля таблицы doctors и поля из связаной таблицы users

--GET /doctor-private/{id}
принимает id связанного с доктором юзера
возвращает доктора все поля таблицы doctors и поля из связаной таблицы users

--POST /add-doctor
создает запись в таблице users и таблице doctors
принимает:
{'email'-string,
 'phone'-string,
 'name'-string,
 'surname'-string,
 'patronymic'-string,
 'avatar_path'-string,
 'photo_path'-string,} все поля необязательны.
 возвращает:
 'message' => 'Успешно сохранено',
 'status' => 201.
 
 --"GET" '/edit-doctor/{id}'

принимает {id} (на фронте ${id}) - id доктора

возвращает данные доктора и связаного юзера(для редактированаия):
patients: {id,name,surname,patronymic,email,phone,speciality_id,avatar_path,photo_path}

--"PUT" 'update-doctor/{id}'

принимает {id} (на фронте ${id}) - id доктора
и измененные/неизмененные данные
data : {'email'-string,
 'phone'-string,
 'name'-string,
 'surname'-string,
 'patronymic'-string,
 'speciality_id'-string,
 'avatar_path'-string,
 'photo_path'-string,}

  обновляет данные в таблице doctors и users: 
  {name,surname,patronymic,email,phone,speciality_id,avatar_path,photo_path}

  возвращает: {
  'message': 'Данные успешно обновлены',
  'status' : 200
  }
