function doSecrets() {
  let sBtn = document.getElementById("secrets_btn");
  let todo = sBtn.value;
   var secrets = document.getElementsByClassName("secret");
   
  if(todo == "REVEAL SECRETS") {
    Array.from(secrets).forEach((secret) => {
      secret.style.color = "red";
    });
    sBtn.value = "HIDE SECRETS";
    sBtn.className = "hdn-btn";
   
  } else {
    Array.from(secrets).forEach((secret) => {
      secret.style.color = "white";
    });
    sBtn.value = "REVEAL SECRETS";
    sBtn.className = "secret-btn";
  }
}

let getGalleryData = async function() {
  let response = await fetch("./data/gallery.json");
  let data = await response.json();
  showGallery(data);
}

let showGallery = async function(data) {
  let projects = data.projects;
  let gallery = document.querySelector(".gallery");
  let template = document.querySelector("#photo-box");
  console.log(projects);
  for(element of projects) {
    let newProject = template.content.cloneNode(true);
    newProject.querySelector(".photo-box-link").href = element.siteUrl;
    newProject.querySelector(".photo-box-image").src = element.imageUrl;
    newProject.querySelector(".photo-box-title").innerHTML = element.name;
    gallery.appendChild(newProject);
  }
}

getGalleryData();