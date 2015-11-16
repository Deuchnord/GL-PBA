function displayflash(iptdate,iptheure)
{
	$flashes =$('.flash');
	$flashes.hide();
	
	if(iptdate.value=="2015-12-25")
	{
		alert("aaa");
		$('#pascrenau').show();
	}
	else if(iptdate.value=="2015-12-26")
	{
		$('#creneauheure').show();
	}
	else if(iptdate.value=="2015-12-27")
	{
		alert(iptheure.value);
		$('#creneaupasdispo').show();
	}
}