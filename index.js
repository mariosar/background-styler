var movingBG = function(config){
	var bg = config.start[0]
	var bg2 = config.start[1]
	var bgDone = config.end[0]
	var bg2Done = config.end[1]

  var time = config.time

  var intervalFrequency = 10

  function switchRGB(){
    var placeholder = bg2
    bg2 = bg
    bg = placeholder

    placeholder = bg2Done
    bg2Done = bgDone
    bgDone = placeholder
  }

  function calculateRGB(start, target, step, steps){
    return [
      start[0]+((parseFloat(target[0] - start[0]) / steps) * step),
      start[1]+((parseFloat(target[1] - start[1]) / steps) * step),
      start[2]+((parseFloat(target[2] - start[2]) / steps) * step)
    ]
  }

  function setRGB(rgb, rgb2){
    var backgroundColor = "linear-gradient(65deg, rgb("+rgb.join(", ")+"), rgb("+rgb2.join(", ")+")) repeat scroll 0% 0%"
    $(".moving-bg").each(function(index){
      this.style.background = backgroundColor
    })
  }

  return {
    run: function(){
    	var self = this
      var i = 0
      var interval = setInterval(function(){
        
        var newRGB = calculateRGB(bg, bg2, i, time / intervalFrequency)
        var newRGB2 = calculateRGB(bgDone, bg2Done, i, time / intervalFrequency)
        
        setRGB(newRGB, newRGB2)
        
        if(i == 400){
          clearInterval(interval)
          switchRGB()
          if(config.cycle){
            self.run()  
          }
        } else {
          i++
        }
      }, intervalFrequency)
    }
  }
};

module.exports = movingBG
