function displayCreneauPasDispo(ipt,id, iptheure)
{
	var $message = document.getElementById('id');
	if(ipt.value=="2015-12-02" && iptheure.value=='5')
		$message.setAttribute("style", "display:block;");
	else
		$message.setAttribute("style", "display:none;");
}

function displayPasCrenau(ipt)
{
	var $message = document.getElementById('pascreneau');
	if(ipt.value=="2015-12-25")
		$message.setAttribute("style", "display:block;");
	else
		$message.setAttribute("style", "display:none;");
}

function displaycreneauHeure(ipt)
{
	var $message = document.getElementById('creneauheure');
	if(ipt.value=="2015-12-01")
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