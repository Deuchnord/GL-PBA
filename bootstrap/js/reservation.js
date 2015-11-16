function displayflash(iptdate,iptheure)
{
	$flashes =$('.flash');
	$.each($flashes,function(i){
		$flashes[i].hidden();
	});
	if(iptdate.value=="2015-12-25")
	{
		$('#pascreneau').show();
	}
	else if(ipdate.value=="2015-12-26")
	{
		$('#creneauheure').show();
	}
	else if(iptdate.value=="2015-12-27" && iptheure.value=="12")
	{
		$('#creneaupasdispo').show();
	}
}