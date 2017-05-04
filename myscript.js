//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bEngram\b/g, "Sheena");
	v = v.replace(/\bengram\b/g, "Sheena");
	v = v.replace(/\bENGRAM\b/g, "SHEENA");
	v = v.replace(/\bEngrams\b/g, "Sheenas");
	v = v.replace(/\bengrams\b/g, "Sheenas");
	v = v.replace(/\bENGRAMS\b/g, "SHEENAS");
	v = v.replace(/\bEngram's\b/g, "Sheena's");
	v = v.replace(/\bengram's\b/g, "Sheena's");
	v = v.replace(/\bENGRAM'S\b/g, "SHEENA'S");	

	
	textNode.nodeValue = v;
}
