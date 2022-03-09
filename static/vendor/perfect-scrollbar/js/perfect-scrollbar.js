  new PerfectScrollbar('#container');

 // Initialize the plugin
      const demo = document.querySelector('#container');
      const ps = new PerfectScrollbar(demo);

      // Handle size change
      document.querySelector('#resize').addEventListener('click', () => {

        // Get updated values
        width = document.querySelector('#width').value;
        height = document.querySelector('#height').value;

        // Set demo sizes
        demo.style.width = `${width}px`;
        demo.style.height = `${height}px`;

        // Update Perfect Scrollbar
        ps.update();
      });
