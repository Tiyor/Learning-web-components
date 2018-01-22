      // Progress bar functionality
      // When the user scrolls the page, execute myFunction 
      window.onscroll = function() {
          myFunction(), scrollFunction();
      };

      function myFunction() {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          document.getElementById("myBar").style.width = scrolled + "%";
      }

      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              document.getElementById("myBtn").style.display = "block";
          } else {
              document.getElementById("myBtn").style.display = "none";
          }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }

      $(document).ready(function() {
          $('a[href^="#"]').on('click', function(e) {
              e.preventDefault();

              var target = this.hash,
                  $target = $(target);

              $('html, body').stop().animate({
                  'scrollTop': $target.offset().top
              }, 2000, 'swing', function() {
                  window.location.hash = target;
              });
          });
      });
