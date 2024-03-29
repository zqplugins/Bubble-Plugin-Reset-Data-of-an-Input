function(properties, context) {
	
    if(properties.input_type === "Searchbox"){
        document.querySelector("#" + properties.input_id + " > span > input.tt-input").value = ''
    }else if(properties.input_type === "Input/Multiline Input"){
        document.getElementById(properties.input_id).value = '';
    }else if(properties.input_type === "Dropdown"){
        document.getElementById(properties.input_id).selectedIndex = 0;
    }

}