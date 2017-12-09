$('#slider').slider({
    formatter: function(value) {        
        return 'Текущее значение: ' + value;       
    }       
});