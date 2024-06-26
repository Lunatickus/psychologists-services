## Технічне завдання для застосунку "Психолог онлайн"

### Опис проєкту
Створити веб-застосунок для компанії, що пропонує послуги психологічної підтримки. Застосунок дозволяє користувачам знайти та спілкуватися з психологами онлайн. Основні функціональність включає сторінки "Home", "Psychologists" та "Favorites".

### Основні сторінки
1. **Home** - Головна сторінка застосунку з заголовком сайту, слоганом компанії та посиланням на сторінку "Psychologists".
2. **Psychologists** - Сторінка з переліком психологів, які доступні для консультацій. Користувач може сортувати психологів за алфавітом, ціною та популярністю. При кліку на психолога відображається детальна інформація про нього, включаючи відгуки клієнтів та можливість записатися на консультацію.
3. **Favorites** - Приватна сторінка, на якій користувач може переглянути список обраних психологів.

### Технічні вимоги
1. Авторизація користувачів за допомогою Firebase: реєстрація, логінізація, отримання даних про користувача та вихід з системи.
2. Використання Formik та Yup для реалізації форми реєстрації/авторизації з мінімальною валідацією полів.
3. Використання Realtime Database (Firebase) для зберігання даних про психологів.
4. Реалізація картки з описом характеристик психолога на сторінці "Psychologists".
5. Завантаження психологів на сторінці "Psychologists" за допомогою кнопки "Load more".
6. Додавання психологів до обраних користувачем і відображення їх на сторінці "Favorites".
7. Підтримка гумового та адаптивного дизайну від 320px до 1440px.
8. Деплой проєкту на Github Pages, Netlify або інший сторонній хостінг.

### Технології
- JavaScript (React)
- Firebase (Authentication, Realtime Database)
- Formik, Yup
- HTML, CSS

### Макет
[Посилання на макет](https://www.figma.com/file/I5vjNb0NsJOpQRnRpMloSY/Psychologists.Services?type=design&node-id=0-1&mode=design&t=4zfT2zFANRbp1fCK-0)

### Завдання із зірочкою*
- Реалізація маршрутизації за допомогою React Router.

### Додаткова інформація
Весь необхідний функціонал має бути реалізований згідно з наведеними технічними вимогами та критеріями виконання. Код повинен бути чистим, без помилок та коментарів, і відформатованим згідно з внутрішніми стандартами проєкту.

### Репозиторій
[Посилання на репозиторій](https://github.com/Lunatickus/psychologists-services)