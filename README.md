[![Build status](https://ci.appveyor.com/api/projects/status/eq85pshbxj76s9kd/branch/main?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ahj-homeworks-animation/branch/main)

---

### Collapse

#### Легенда

При реализации большого портала вам необходимо сделать виджет collapsible-контейнеров, который может разворачиваться и сворачиваться.

#### Описание

Подобный виджет есть в Bootstrap, но мы с вами знаем, что jQuery не нужен. Поэтому реализуйте такой же виджет на чистом JS.

![](./src/img/collapse.gif)

---

### Callback Chat

#### Легенда

Сделайте виджет обратной связи на портал компании. Ключевое в этой задаче — анимации.

#### Описание

Реализуйте показ и скрытие, как это отображено на картинке:

![](./src/img/callback.gif)

Обратите внимание, что при нажатии на кнопку сама кнопка тоже исчезает, а при скрытии формы появляется.

Длительность анимации, использованная в оригинале, — 100ms, функция анимации — `linear`.

Организуйте код в виде виджета, готового к установке через базовый контейнер в html и инициализацию.

---

### Liker

#### Легенда

Реализуйте одну из кнопок лайков.

#### Описание

Реализуйте поведение, указанное на картинке:

![](./src/img/liker.gif)

Данные для анимации:
1. Изображение — ![heart.png](./src/img/heart.png).
1. Высота, на которой исчезают лайки, — 200px.
1. Максимальное отклонение влево/вправо — 50px.
1. Скорость анимации — 500ms.
1. Функция анимации — ease-out, можете использовать другую.
1. Возможные траектории (траектория выбирается рандомно): 
   * 0 % — центр, 25 % — влево, 50 % — центр, 75 % — вправо, 100 % — центр;
   * 0 % — центр, 25 % — центр, 50 % — вправо, 75 % — влево, 100 % — центр;
   * 0 % — центр, 25 % — центр, 50 % — влево, 75 % — вправо, 100 % — центр;
   * 0 % — центр, 25 % — вправо, 50 % — центр, 75 % — влево, 100 % — центр.

**Важно**: элементы после исчезания должны удаляться из DOM. Используйте для этого соответствующие события, а не таймауты.
