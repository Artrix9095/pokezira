mapAbove = new Image();
mapBase = new Image();
mapNight = new Image();
mapAbove.onload = loadedMapImage;
mapBase.onload = loadedMapImage;
mapAbove.src=cdn+'/maps/' +mapCode+ ' above.png';
mapBase.src=cdn+'/maps/' +mapCode+ ' base.png';
mapNight.src = cdn+'/images/night.png';
		
$(document).ready(function() {
  this.keyState = new Object;
  this.keyState.up = false;
  this.keyState.down = false;
  this.keyState.left = false;
});

(function(){
      $("#keyUp").bind('touchstart', function(ev) {
        keyState.up = true; return false;
      });
			$("#keyUp").bind("touchend", function(ev) {
        this.keyState.up = false; return false;
        });
			
			$("#keyLeft").bind('touchstart', function(ev) {
        this.keyState.left = true; return false;
        });
			$("#keyLeft").bind("touchend", function(ev) {
        this.keyState.left = false; return false;
      });
			
			$("#keyRight").bind('touchstart', function(ev) {
        this.keyState.right = true; return false;
        });
			$("#keyRight").bind("touchend", function(ev) {
        this.keyState.right = false; return false;
      });
			
			$("#keyDown").bind('touchstart', function(ev) {
        this.keyState.down = true; return false;
      });
			$("#keyDown").bind("touchend", function(ev) {
        this.keyState.down = false; return false;
      });
});
			