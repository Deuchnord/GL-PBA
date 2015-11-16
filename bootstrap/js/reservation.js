function displayCreneauPasDispo(ipt)
{
	var $message = document.getElementById('creneaupasdispo');
	if(ipt.value==aaaa)
		$message.setAttribute("style", "display:block;");
	else
		$message.setAttribute("style", "display:none;");
}

function displayPasCrenau(ipt)
{
	var $message = document.getElementById('pascreneau');
	if(ipt.value==aaaa)
		$message.setAttribute("style", "display:block;");
	else
		$message.setAttribute("style", "display:none;");
}

function displaycreneauHeure(ipt)
{
	var $message = document.getElementById('creneauheure');
	if(ipt.value==aaaa)
		$message.setAttribute("style", "display:block;");
	else
		$message.setAttribute("style", "display:none;");
}

function displayPasCrenau(ipt)
{
	var $message = document.getElementById('pascreneau');
	if(ipt.value==aaaa)
		$message.setAttribute("style", "display:block;");
	else
		$message.setAttribute("style", "display:none;");
}

function displayReussi()
{
	var $message = document.getElementById('reussi');
	$message.setAttribute("style", "display:block;");
}