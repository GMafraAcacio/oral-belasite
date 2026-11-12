var WHATSAPP="5500000000000";
function go(e){e.preventDefault();var m="Olá! Gostaria de agendar uma consulta na Oral Bela.\nNome: "+n.value+"\nTelefone: "+t.value+(s.value?"\nTratamento: "+s.value:"");window.open("https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(m),"_blank");return false}
