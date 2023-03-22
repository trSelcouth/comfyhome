    let getGalleryData = async function() {
        let response = await fetch("/data/blog-gallery.json");
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
            newProject.querySelector(".photo-box-subtitle").innerHTML = element.subtitle;
            if (element.status == "0") {
                newProject.querySelector(".photo-box-image").classList.add("bw");
                newProject.querySelector(".photo-box-link").href = "/404.html"
            }

            gallery.appendChild(newProject);
        }
  }
  getGalleryData();