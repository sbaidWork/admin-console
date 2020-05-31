import $ from 'jquery';
function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://prod-68.westus.logic.azure.com:443/workflows/2b86a6dc22754acf977b112b55111438/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1JKvXOAff8ryiSeNIADbah9w4RM2vla2ZsTi-TFHdbk";
    let BaseUrl="http://sapient.interview.scheduling.admin.s3-website-us-east-1.amazonaws.com";
    $.ajax({
        type: "POST",
        url : URL,
  
        complete: function (response,status) {
          let redirect_url=BaseUrl
          
          window.location.href=redirect_url;
        },
  
      });

}

export default submitToAPI;