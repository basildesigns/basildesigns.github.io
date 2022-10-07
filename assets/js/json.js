// Display Images From API
$(document).ready(function () {
  $.getJSON("https://images.jijinraj.com/api/master/json/images/images.json",
    function (data) {
      let employee = '';
      $.each(data, function (key, value) {
        employee += `
        <div class="col-lg-4 col-md-6 portfolio-item ${value.category}">
        <div class="portfolio-wrap" style="border-radius: 20px;box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.30);">
          <img
            src="${value.url}"
            class="img-fluid" alt="">
          <div class="portfolio-links">
            <a href="${value.url}" target="_blank"
              data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i
                class="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
          </div>
        </div>
      </div>`;
      });

      //INSERTING ROWS INTO TABLE 
      $('#external-events-list').append(employee);
      //  });
    });
});

// ToDO : Fix Up Blogs
// $(document).ready(function () {
//   $.getJSON("assets/json/blog.json",
//     function (data) {
//       let blogs = '';
//       $.each(data, function (key, value) {
//         blogs += `
//       <div class="col-lg-4 col-md-6 portfolio-item ${value.category}">
//       <div class="portfolio-wrap" style="border-radius: 20px;box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.30);background-color: var(--secondary);border: 3px solid var(--secondary);">
//         <img src="${value.url}" class="img-fluid" alt="">
//         <div style="padding: 15px 10px 0px;"><h4>hello world</h4></div>        
//         <div style="padding: 0px 15px;"><p style="font-size:15px">26-12-2020</p></div>        
//         <div style="padding: 0px 15px;"><p>some important blog which may help you a lot</p></div>        
//         <div class="portfolio-links">
//           <a href="${value.url}" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1">
//             <i class="bx bx-plus"></i>
//           </a>
//           <a href="portfolio-details.html" title="More Details">
//             <i class="bx bx-link"></i>
//           </a>
//         </div>
//       </div>
//     </div>`;
//       });

//       //INSERTING ROWS INTO TABLE 
//       $('#external-blog-events-list').append(blogs);
//       //  });
//     });
// });
