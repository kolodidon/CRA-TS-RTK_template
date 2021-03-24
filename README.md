# Шаблон установленного и инициализированного проекта CRA-TS-RTK
Обычное CRA-приложение, созданное вот так:
```nodejs
npx create-react-app *название проекта* –template typescript
npm install -save react-redux redux-logger @reduxjs/toolkit uuid
```
Внутри есть:
- Инициализированный store
- Инициализированный корневой reducer
- Один слайс-образец, для работы со списком задач
- Три простых компонента, которые реализуют список задач
- Отдельная директория для типов, type.d.ts

**Это простой шаблон-образец, с правильной файловой стркутурой и наглядной инициализацией Redux с синтаксисом RTK**
