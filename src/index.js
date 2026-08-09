import "./style.css"
import "./dialog.css"
import "./project.css"
import { taskConfiguration, projectConfiguration } from "./main.js"
import { loadProjects } from "./projectManager.js"


loadProjects()

taskConfiguration()
projectConfiguration()

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
if (storageAvailable("localStorage")) {
    console.log("You can use local storage nigg")
}
else {
    console.log("you dont have acces to local storagen igg")
}