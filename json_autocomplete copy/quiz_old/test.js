function WriteToFile()
{
var fso = new ActiveXObject("Scripting.FileSystemObject");
var s = fso.CreateTextFile("NewFile.txt", true);
var text=document.getElementById("TextArea1").innerText;
s.WriteLine(text);
s.WriteLine('***********************');
s.Close();
}
WriteToFile();