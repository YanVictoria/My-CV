  //for copying the mobile number and address location when icon is clicked
  
  
  function copyFunc(TextToCopy) {
    var TempText = document.createElement("input");
    TempText.value = TextToCopy;
    document.body.appendChild(TempText);
    TempText.select();
    
    document.execCommand("copy");
    document.body.removeChild(TempText);
    
    alert("Copied to clipboard: " + TempText.value);
  };