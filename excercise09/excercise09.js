function SelectMoveRows(firstSel,secondSel)
{
var SelID='';
var SelText='';
for (i=firstSel.options.length - 1; i >= 0; i--)
{
    if (firstSel.options[i].selected == true)
    {
        SelID=firstSel.options[i].value;
        SelText=firstSel.options[i].text;
        var newRow = new Option(SelText,SelID);
        secondSel.options[secondSel.length]=newRow;
        firstSel.options[i]=null;
    }
}
SelectSort(secondSel);
}
function SelectSort(SelList){
var ID='';
var Text='';
for (x=0; x < SelList.length - 1; x++)
{
    for (y=x + 1; y < SelList.length; y++)
    {
        if (SelList[x].text > SelList[y].text)
        {
            Text=SelList[x].text;
            SelList[x].text=SelList[y].text;
            SelList[y].text=Text;
        }
    }
}
}


window.onload = function(){ 
  
}  