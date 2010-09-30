if (typeof APPLICATION == "undefined" || !APPLICATION) {
  var APPLICATION = {};
}

if (typeof APPLICATION.position == "undefined" || !APPLICATION.position) {
	APPLICATION.position = {};
}

// reorder div container position
APPLICATION.position.firstContainerBellowSecond = function(first, second) {
	
    var init = function() {
    	var topElement = document.getElementById(first);
    	var bottomElement = document.getElementById(second);
    	
    	swapNodes(topElement, bottomElement);
    };
    
    var swapNodes = function(topNode, bottomNode) {
    	topNode.parentNode.replaceChild(topNode, bottomNode);
        topNode.parentNode.insertBefore(bottomNode, topNode);     	
    };

    return {
        init: init
    };
    
};