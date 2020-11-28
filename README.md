# СУ «РОК»: фронтенд

В данном репозитории представлено SPA приложение управленца

## 1. Создайте файл **.env** со следующими переменными
* REACT_APP_API_URL={host}/api/client/v1

## 2. Запустите контейнер  
*Всё запускать из корневой папки проекта*

### Сборка для продашена
```
docker-compose -f docker/docker-compose.develop.yml run --rm node yarn install
docker-compose -f docker/docker-compose.develop.yml run --rm node yarn build
```
Путь где лежит билд
```
app/build
```
### Для локальной разработки
```
docker-compose -f docker/docker-compose.develop.yml run --rm node yarn install
docker-compose -f docker/docker-compose.develop.yml up -d --build
```
Пути для просмотра 
```
http://localhost:3000
```
