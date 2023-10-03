document.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = 1; // Устанавливаем opacity в 1 после загрузки страницы
});

document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("changing-text");
  setTimeout(function () {
    // Анимация удаления текста
    header.style.animation = "fadeOut 1s";

    // Задержка перед добавлением нового текста
    setTimeout(function () {
      header.innerHTML = "Заметки | Notes";
      header.style.animation = "typing 1s";
    }, 1000);
    setTimeout(function () {
      header.style.animation = "toping 1s";
    }, 1900);
    setTimeout(function () {
      header.style = "top: -380px; position: relative; font-size: 60px;";
    }, 2900);
  }, 2000); // Задержка 2 секунды перед добавлением нового текста
});

document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("main");
  setTimeout(function () {
    header.style.animation = "fadeIn 1s ease-in-out forwards";
  }, 4000);
});

// Список заметок
const notes = [];

// Функция для добавления заметки
function addNote() {
  const textArea = document.querySelector("textarea");
  const noteText = textArea.value.trim();

  if (noteText !== "") {
    notes.push(noteText);
    textArea.value = "";
    displayNotes();
  }
}

// Функция для отображения заметок
function displayNotes() {
  const notesDiv = document.getElementById("notes");
  notesDiv.innerHTML = "";

  notes.forEach((note, index) => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note"); // Добавьте класс "note"
    noteElement.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">Удалить</button>
    `;
    notesDiv.appendChild(noteElement);

    // Добавляем небольшую задержку перед применением стилей для анимации
    setTimeout(() => {
      noteElement.style.opacity = 1;
      noteElement.style.transform = "translateY(0)";
    }, index * 100); // Задержка между появлением каждой заметки
  });
}

function deleteNote(index) {
  const noteElement = document.querySelectorAll(".note")[index];
  noteElement.classList.add("exiting");

  setTimeout(() => {
    notes.splice(index, 1);
    displayNotes();
    const addNoteElement = document.getElementById("add-note");
    addNoteElement.classList.remove("exiting"); // Удалите класс "exiting"
    void addNoteElement.offsetWidth; // Эта строка требуется для сброса анимации
    addNoteElement.classList.add("exiting"); // Добавьте класс "exiting" снова
  }, 500); // Задержка, чтобы дать анимации удаления завершиться
}

// Обработчик для кнопки "Добавить"
document.getElementById("add-button").addEventListener("click", addNote);

// Инициализация отображения заметок
displayNotes();
