function drukuj(){
	if(self.parent.frames.length<2)
		alert('Polecenie niedostÍpne')
	else{
		self.parent.plan.focus()
		window.print()
	}
}