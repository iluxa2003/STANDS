var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var addPanel = document.getElementsByClassName('controls')[0];
var userName = document.getElementsByClassName('userName-label')[0];
var taskName = document.getElementsByClassName('taskName-label')[0];
var taskDescription = document.getElementsByClassName('taskDescription-label')[0];
var tasks = document.getElementsByClassName('tasks-container')[0];
var backdropModal = document.getElementsByClassName('backdrop-modal')[0];
addPanel.addEventListener('submit', addTask);
function closeModal() {
    backdropModal.style.visibility = 'hidden';
}
function deleteTask(id) {
    return __awaiter(this, void 0, void 0, function () {
        var options, response, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ id: id }),
                    };
                    return [4 /*yield*/, fetch('/api', options)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    console.log(json);
                    closeModal();
                    showItems(json);
                    return [2 /*return*/];
            }
        });
    });
}
function showItems(json) {
    if (json.status === 'success') {
        tasks.style.visibility = 'visible';
        tasks.innerHTML = "\n        <div class='task-item__header'>\n          <span class='task-userName__header'>User name</span>\n          <span class='task-item__name__header'>Task name</span>\n          <span class='task-item__description__header'>Task description</span>\n        </div>";
        json.database.forEach(function (item) {
            var newTask = document.createElement('div');
            newTask.classList.add('task-item');
            newTask.id = item.id;
            newTask.innerHTML = "\n        <span class='task-userName'>".concat(item.user, "</span>\n        <span class='task-item__name'>").concat(item.task, "</span>\n        <span class='task-item__description'>").concat(item.description, "</span>\n    ");
            newTask.addEventListener('click', function (event) {
                event.preventDefault();
                handleTaskClick(item.user, item.task, item.description, item.id);
            });
            tasks.appendChild(newTask);
        });
    }
}
function handleTaskClick(user, task, description, id) {
    var modal = backdropModal.children[0];
    var data = { user: user, task: task, description: description, id: id };
    console.log(data);
    modal.innerHTML = "\n      <button class=\"modal_close-botton\" type=\"button\" onclick=\"closeModal();\">\n        Close\n      </button>\n      <div class=\"task\">\n        <div class='task-userName'>Username: ".concat(data.user, "</div>\n        <div class='task-item__name'>Task name: ").concat(data.task, "</div>\n        <div>Description:</div>\n        <div class='task-item__description'>").concat(data.description, "</div>\n      </div>\n      <button class=\"modal_delete-botton\" type=\"button\" onclick=\"deleteTask(").concat(data.id, ");\">\n        Delete\n      </button>  \n    ");
    backdropModal.style.visibility = 'visible';
}
fetch('/api')
    .then(function (response) { return response.json(); })
    .then(function (json) {
    showItems(json);
});
function addTask(event) {
    return __awaiter(this, void 0, void 0, function () {
        var user, task, description, id, data, options, response, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    user = userName.value;
                    task = taskName.value;
                    description = taskDescription.value;
                    id = Math.random().toString();
                    data = { user: user, task: task, description: description, id: id };
                    console.log(JSON.stringify(data));
                    options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    };
                    return [4 /*yield*/, fetch('/api', options)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    json = _a.sent();
                    console.log(json);
                    showItems(json);
                    return [2 /*return*/];
            }
        });
    });
}
function createWindow(item) {
    var modal = backdropModal.children[0];
    modal.innerHTML = "\n      <div>\n        <div>\n          <span class='task-userName'>".concat(item.user, "</span>\n          <span class='task-item__name'>").concat(item.task, "</span>\n        </div>\n        <div>\n           <span class='task-item__description'>").concat(item.description, "</span>\n        </div>\n      </div>  \n    ");
}
