$('#find-slims').on('click', function(evt) {
    var selectedMonth = $('#select-month').val();

    console.log(selectedMonth);

    evt.preventDefault();

    $.ajax({
        url: '/slims',
        type: 'get',
        data: {
            month: selectedMonth
        }
    }).done(function(data) {
        $('#show-list').empty();

        $('#venue-name').text('Slim\'s');

        $.each(data, function(idx, element) {
            $('#show-list').append('<li>' + element.title + ' @ ' + element.date + '</li>');
        });
    }).fail(function() {
        console.log('fail');
    });
});

$('#find-fillmore').on('click', function(evt) {
    var selectedMonth = $('#select-month').val();

    console.log(selectedMonth);

    evt.preventDefault();

    $.ajax({
        url: '/fillmore',
        type: 'get',
        data: {
            month: selectedMonth
        }
    }).done(function(data) {
        $('#show-list').empty();

        $('#venue-name').text('The Fillmore');

        $.each(data, function(idx, element) {
            $('#show-list').append('<li>' + element.title + ' @ ' + element.date + '</li>');
        });
    }).fail(function() {
        console.log('fail');
    });
});

$('#find-independent').on('click', function(evt) {
    var selectedMonth = $('#select-month').val();

    console.log(selectedMonth);

    evt.preventDefault();

    $.ajax({
        url: '/independent',
        type: 'get',
        data: {
            month: selectedMonth
        }
    }).done(function(data) {
        $('#show-list').empty();

        $('#venue-name').text('The Independent');

        $.each(data, function(idx, element) {
            $('#show-list').append('<li>' + element.title + ' @ ' + element.date + '</li>');
        });
    }).fail(function() {
        console.log('fail');
    });
});

$('#find-warfield').on('click', function(evt) {
    var selectedMonth = $('#select-month').val();

    console.log(selectedMonth);

    evt.preventDefault();

    $.ajax({
        url: '/warfield',
        type: 'get',
        data: {
            month: selectedMonth
        }
    }).done(function(data) {
        $('#show-list').empty();

        $('#venue-name').text('The Warfield');

        $.each(data, function(idx, element) {
            $('#show-list').append('<li>' + element.title + ' @ ' + element.date + '</li>');
        });
    }).fail(function() {
        console.log('fail');
    });
});

$('#find-bottomofthehill').on('click', function(evt) {
    var selectedMonth = $('#select-month').val();

    console.log(selectedMonth);

    evt.preventDefault();

    $.ajax({
        url: '/bottomofthehill',
        type: 'get',
        data: {
            month: selectedMonth
        }
    }).done(function(data) {
        $('#show-list').empty();

        $('#venue-name').text('Bottom of the Hill');

        $.each(data, function(idx, element) {
            $('#show-list').append('<li>' + element.title + ' @ ' + element.date + '</li>');
        });
    }).fail(function() {
        console.log('fail');
    });
});