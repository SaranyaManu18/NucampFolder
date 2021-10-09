function testSwitch(size){
switch(size){
    case 'small':
        alert('The chair is small');
        break;
    case 'medium':
            alert('The chair is medium');
            break;
    case 'big':
                alert('The chair is big');
                break;   
    default:
        alert('the chair size is unknown');    
               
}
function getSize(){
    const size = prompt("Enter the size");
    return size;
}
}
testSwitch(getSize());

