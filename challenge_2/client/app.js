$.ajax({
  url: '/upload_json',
  type: 'GET',
  success: (data) => {
    console.log('successful get request with ajax', data);
    $('#report').append('<p>' + data + '</p>');
  },
  error: () => {
    console.log('error getting data with ajax');
  }
});

$('#form').submit((e) => {
  e.preventDefault();
  var formData = new FormData();

  formData.append('jsonFile', $('#file').prop('files')[0]);

  $.ajax({
    url: '/upload_json',
    type: 'POST',
    data: formData,
    success: (data) => {
      console.log('ajax post success!');
      if($('#downloadLink').length === 0) {
        $('#form').after(`<form method="GET" action="/download" id="downloadLink">
        <input type="submit" value="Download file"></input>
        </form>`)
      }
    },
    error: () => {
      console.log('error posting with ajax');
    }
  });
});

$('#downloadLink').submit((e) => {
  e.preventDefault();
  console.log("clicked download link")
  $.ajax({
    url: '/download',
    type: 'GET',
    success: (data) => {
      console.log('successful get requst from download link');
    },
    error: () => {
      console.log('failed get request from download link');
    }
  });
});


