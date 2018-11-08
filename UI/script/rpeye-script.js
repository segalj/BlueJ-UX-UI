$(document).ready(function(){
	$("input").focus();
	
	/*filter block renering*/
	var filter = "<form id=\"filter\"></form>";
	var result = ""
	var content = null;
	var result_num = 10;
    $("#filter_btn").click(function(){
  		if ( filter ) {
  			/*swap content*/
  			$("#filter_btn").text("Save");
    		content=$("#content").children().detach();
    		$("#content").prepend($(filter));

    		filter = null;
  		} else {
  			/*might need to change this*/
  			$("#filter_btn").text("Filter");

    		filter = $( "#filter" ).detach();
    		/*show original content*/
    		$("#content").prepend($(content));
  		}
    });
});